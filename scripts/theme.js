let tags = document.getElementsByClassName("theme");


// the list of themes
let themes = [
    'onedark',
    'monokai',
    'dracula',
    'github-dark',
    'notepadpp'
];

// the function that sets the theme
function setTheme() {
    let colorscheme = window.prompt("Choose a colorscheme:\n- 'onedark' (default)\n- 'monokai'\n- 'dracula'\n- 'github-dark'\n- 'notepadpp'");
    if (colorscheme == null)
        return;
    
    for (let i = 0; i < themes.length; i++) {
        if (colorscheme == themes[i]) {
            tags[0].href = `style/${colorscheme}.css`;
            localStorage.setItem('colorscheme', colorscheme);
            return;
        } else 
            continue;
    }
}

// applying the theme
for (tag of tags)
    // if the theme is not defined in the local storage, then set to onedark (default theme)
    if (localStorage.getItem('colorscheme') == null)
        localStorage.setItem('colorscheme', 'onedark');
    else
        tag.href = `style/${localStorage.getItem('colorscheme')}.css`;