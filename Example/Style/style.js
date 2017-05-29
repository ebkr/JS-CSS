/*
    What's the point in using JS for CSS? -
    
    It provides the ability to use variables on IE and Edge, without a preprocessor.
    This means that there is no need to compile, and you can keep the same syntax.
    
    This also supports selectors, and other functions such as calc() too.
    
    Another benefit of using JS for CSS is that there can potentially be themes
    that the user can choose from, which JS can determine on page load/refresh.
*/

// Default Colours
const defaultThemeColours = {
    bodyBackground: "#E5E5E5",
    bodyTextColour: "black",
    headerBackground: "#523",
    headerTextColour: "white",
};

// Used for imports. Works with anything requiring "url()".
const imports = {
    'font-lato': 'https://fonts.googleapis.com/css?family=Raleway',
}

// Here is where you keep your styles. An added benefit is that you can make this modular, and customise designs elsewhere.
// As you can see, it's still familiar.
const defaultStyle = {
    '*': {
        'padding': 0,
        'margin': 0,
        'font-family': 'Raleway',
    },
    
    'body,html': {
        'background-color': defaultThemeColours.bodyBackground,
        'color': defaultThemeColours.bodyTextColour,
    },
    
    'header': {
        'background-color': defaultThemeColours.headerBackground,
        'color': defaultThemeColours.headerTextColour,
    },
    'header>*': {
        'padding': "15px 20px",
    },
    'header>div>*': {
        'display': 'inline-block',
        'margin-left': "20px",
    }
    
};


// NO NEED TO EDIT BELOW
var stringToOutput = "";

// Import Items
for(var i in imports) {
    stringToOutput += "@import url(" + imports[i] + ");";
}

// Apply styles located in defaultStyle
for(var i in defaultStyle) {
    stringToOutput += i + "{";
    for (var key in defaultStyle[i]) {
        stringToOutput += key + ":" + defaultStyle[i][key] + ";";
    }
    stringToOutput += "}";
};

// Append to document, keeps an ID reference for changing later.
document.write("<style id='theme'>" + stringToOutput + "</style>");