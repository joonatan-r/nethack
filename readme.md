
Nethack browser port. Content under "wasm" got by compiling Nethack 5.0.0 (https://github.com/NetHack/NetHack/tree/NetHack-5.0) (at commit 186d9524de4c7bae696f6fcd8cfed44933d7b33e) with unix and CROSS_TO_WASM. The only small modification is in files.c according to files.c.diff as a hack to make saving work.

Saving and returning to game is supported. (Warning: closing without saving deletes the run)

### Playing on mobile

The game's mobile interface is available on https://joonatan-r.github.io/nethack/. The game is installable as a PWA by adding it to home screen, allowing it to be played on fullscreen.

Mobile-specific features:
- Zoomable and pannable (including menus)
- Moving by tapping in the direction, running by holding press, travelling to a square by panning and holding at the location
- "Smart" actions by tapping the character (looting, going up/down stairs, picking something up, or just looking)
- Custom soft keyboard (including Ctrl, Shift, Meta, Enter, Escape, Delete (actually corresponds to backspace))
- Mobile-style dialogs
    - Custom number of items can be selected by pressing and holding the item row
    - All items in a group can be selected by tapping the title
    - Dialogs can be minimized and brought back using a floating button
- Menu dialog for extended commands (can also just be written or use the shortcuts)
- Quick access redo button that also remembers the number of actions
- Button for saving custom nethack configuration options
- Button for downloading a playback of the current game (all sessions) (experimental, https://joonatan-r.github.io/nethack-player used for viewing)
    - Can be turned off by clicking the "PbOff" button, and back on by clicking the "PbOn" (only checked on save)

### Playing on desktop

The game's desktop interface is available on https://joonatan-r.github.io/nethack/#pc. This is less refined compared to the mobile interface, but should function similarly to traditional Nethack. Some shortcuts are a bit funky due to also being actions on the browser.

### Additional options

Some additional options are also supported using the text after the url hash ("#"). The previously mentioned "pc" is one of the options, but a semicolon-separated list can be given that also recognizes "user=..." for custom player name, "wizard" for playing in wizard mode, and "OPTIONS=..." for actual nethack configuration options. So, for example, to play on the mobile interface as player "John" you can specify https://joonatan-r.github.io/nethack/#user=John and for the desktop interface https://joonatan-r.github.io/nethack/#pc;user=John. Giving different names can be used to play multiple games at the same time. To specify custom options for nethack, simply include them in the list, for example  https://joonatan-r.github.io/nethack/#user=John;OPTIONS=catname:Whiskers,role:wiz for predetermined role and pet name.
