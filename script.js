function changeDisplay(color, textColor, fontSize, text){
    document.getElementById("mainDiv").innerHTML = `
    <div ${changeColor(color, textColor, fontSize)}>${text}</div>
    `;
}

function changeColor(color, textColor, fontSize){
    return `style= "
    ${createBackgroundColor(color)}; 
    ${createFontSize(fontSize)}; 
    ${createTextColor(textColor)};
    "`;
}

function createBackgroundColor(color){
    return `background-color: ${color};`;
}

function createFontSize(fontSize){
    return `font-size: ${fontSize}px;`;
}

function createTextColor(textColor){
    return `color: ${textColor};`;
}