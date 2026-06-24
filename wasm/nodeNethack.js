
import factory from "./nethack.js";

// starts nethack
function nethackStart(cb, inputModule = {}) {
    // set callback
    let cbName = cb.name;
    if (cbName === "") cbName = "__anonymousNetHackCallback";
    let userCallback = globalThis[cbName] = cb;

    // Emscripten Module config
    let Module = inputModule;
    Module.onRuntimeInitialized = function (... args) {
        // after the WASM is loaded, add the shim graphics callback function
        Module.ccall(
            "shim_graphics_set_callback", // C function name
            null, // return type
            ["string"], // arg types
            [cbName], // arg values
            {async: true} // options
        );
    };

    // load and run the module
    // var factory = require("./nethack.js");
    factory(Module);
}

nethackStart(callback);

let winCount = 0;
let saved = false;

async function callback(name, ...args) {
    console.log(`---- ${name}: ${Array.from(args).join(", ")}`);
    // await new Promise(r => setTimeout(r, 10));

    switch(name) {
        case "shim_player_selection_or_tty":
            return true;
        case "shim_create_nhwindow":
            winCount++;
            console.log(`create window ${winCount}`);
            return winCount;
        case "shim_yn_function":
        case "shim_message_menu":
            console.log("returning y");
            return "y".charCodeAt(0);
        case "shim_nhgetch":
        case "shim_nh_poskey":
            if (!saved) {
                saved = true;
                return "S".charCodeAt(0);
            }
            await new Promise(r => {}); // hang
            return 0;
        case "shim_select_menu":
            console.log("cancelling");
            return -1; // cancel tutorial query
        case "shim_getmsghistory":
            return "";
        default:
            return 0;
    }
}
