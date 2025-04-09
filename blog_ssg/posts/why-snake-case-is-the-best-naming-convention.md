---
title: "Hack Your Keyboard for Effortless snake_case: Windows and Linux Guide"
date: 2025-04-08
author: João Felipe Ribeiro
metas:
    image: "$ img.cover attr(src)"
tags:
    - 2025
    - programming
    - tooling
    - keyboard
---

For me, snake_case is the best naming convention when writing code. It's easy to read and easy to type. And now, it became *even more easier* to type after I discovered that I could remap shift+space to give me the underscore character more precisely and comfortably.

However, every operating system have their particularities and I've made my own research to find out how to remap these keys on Windows and Linux. (I don't know how to achieve this on macos since I don't own an apple computer).

<!-- more -->

## How to remap on Linux
Depending on the desktop environment that you're using, it may offer you a built in functionality that allows you to remap keys. But, in this article I'll try to show more universal alternatives that are not desktop environment specific.
### X11 systems
Steps using **xmodmap** (built-in):

1. Find the keycode for Shift+Space: Open a terminal and run:
```
xev
```

Press Shift + Space, and note the keycode of the space key (usually it's 65, but confirm it).

2. Edit `.Xmodmap`: Create or edit the .Xmodmap file in your home directory:
```
nano ~/.Xmodmap
```
3. Map it like this: If your space key is keycode 65:

```
keycode 65 = space underscore
```

This tells X11 to emit space normally, but underscore when Shift is held.

4. Load your new keymap:
```
xmodmap ~/.Xmodmap
```
5. Make it persistent: Add that last line to your .xinitrc or autostart script.

> [!IMPORTANT]
> This works on X11, not Wayland (used in newer GNOME/KDE setups). For Wayland, please read the next section.

### Wayland systems
For wayland, there are different software alternatives you can use, but the one I found easier to use was [keyd](https://github.com/rvaiya/keyd)

1. Follow the instructions on the [keyd github repo](https://github.com/rvaiya/keyd) for instructions on how to install it on your operating system.

But you can compile it from source by running these commands
```
git clone https://github.com/rvaiya/keyd
cd keyd
make && sudo make install
sudo systemctl enable --now keyd
```

2. Create a file at `/etc/keyd/default.conf` if it doesn't exist already, and add the following content:
```
[ids]

*

[shift]
space = _
```

This will remap the behavior of space when shift is being hold, outputting the underscore character we wanted. The `[ids]` section is required, if you want to explore more about this software, visit the repository for more information.

## How to Remap Keys on Windows

Remapping keys on Windows is surprisingly simple, thanks to **AutoHotKey** — a powerful and flexible tool that many Linux users wish they had.

1. Download and install AutoHotKey
   Get it from the [official website](https://www.autohotkey.com/).

2. Create a new script
   To map **Shift + Space** to output an underscore (`_`), use the following script:
   ```ahk
   +Space:: {
       Send "_"
   }
   ```

3. Run the script at startup
   To make the script launch automatically every time you boot:
   - Press `Win + R`, type `shell:startup`, and press Enter.
   - Copy your script (or a shortcut to it) into the folder that opens.

## Conclusion
After some training, you can get enough muscle memory to become more faster on typing underscores

Well, snake_case is very awesome, but that doesn't matter that much, because the true value got from this research was the discover of these remapping softwares, and how they can be used to achieve even more different functions in your keyboard as you like.