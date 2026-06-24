
Nethack browser port. Content under "wasm" got by compiling Nethack 5.0.0
(https://github.com/NetHack/NetHack/tree/NetHack-5.0)
(at commit 186d9524de4c7bae696f6fcd8cfed44933d7b33e)
with unix and CROSS_TO_WASM. The only small modification is in files.c according
to files.c.diff as a hack to make saving work.
