# JS-CSS (JavaScript-Stylesheets)
Write CSS using JavaScript without a framework.

### Why?
There are a few reasons I can think of.
1. Modularity - You can customise elements outside of the CSS area, and reuse those parts in other areas.
2. Compatibility - Works on IE and Edge, removes the need for a preprocessor to use variables.
3. Conditionals - Deliver custom themes, or style specific elements before delivering content.

JS-CSS doesn't try to bloat your files with unnecessary objects. All it's doing is parsing your JS and translating it to CSS.

### What can it do?
JS-CSS currently supports all methods and selectors, as well as media queries (new).
If you do require anything else, it's always possible to overwrite using a CSS file.

[You can't nest items]


### But the file size is larger!
Well, considering it's ~2KBs in size, there shouldn't be any noticeable performance hit. The code also delivers minified\* CSS to the webpage.
Isn't it also worth all those extra possibilities?
