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
    },
    '@media only screen and (min-width: 500px)': {
        'header': {
            'background-color': "#354",
        },
    },
    
};


// NO NEED TO EDIT BELOW
var stringToOutput = "";

// Import Items
for(var i in imports) {
    stringToOutput += "@import url(" + imports[i] + ");";
}

// Apply styles located in defaultStyle
for(var i in defaultStyle) {
    // Regular Query
    if (i.search("@media") != 0) {
        stringToOutput += i + "{";
        for (var key in defaultStyle[i]) {
            stringToOutput += key + ":" + defaultStyle[i][key] + ";";
            console.log(key + ":" + defaultStyle[i][key] + ";");
        }
    } else {
        // Media Query
        for (var key in defaultStyle[i]) {
            if (i.search("@media") == 0) {
                stringToOutput += i + "{" + key + "{";
                for (var key2 in defaultStyle[i][key]) {
                    stringToOutput += key2 + ":" + defaultStyle[i][key][key2] + ";";
                }
                stringToOutput += "}}";
            }
        }  
    }
    stringToOutput += "}";
};

// Append to document, keeps an ID reference for changing later.
document.write("<style id='theme'>" + stringToOutput + "</style>");