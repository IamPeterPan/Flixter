var limitFontI = 0; //Limit to Increase Font Size
var limitFontD = 0; //Limit to Decrease Font Size

/**Displaying Image in the largeImg div section when a image is hovered */

function displayImage(image){
    document.getElementById('largeImg').innerHTML = "<img src="+image.src+" alt="+image.alt+"/><br /><h4>"+image.alt+"</h4>";
}

/**Change Background color of main section */

function colorChangeBg(form){
    var box = document.getElementById('main');
    var val = form.backgroundColor.value;
    box.style.background = val;
}

/**Change Text Color ijn the main section */

function colorChangeTxt(form){
    var box = document.getElementById('main');
    var val = form.textColor.value;
    box.style.color = val;
}

/**Increase Font Size by 2px - Limit 5*2=10px */

function increaseSize(){
    var el = document.getElementById('main');
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style); 
    if(limitFontI <= 5){
        var box = document.getElementById('main');
        box.style.fontSize = (fontSize+2)+"px";
        limitFontI++;
        if(limitFontD>0){
            limitFontD--;
        }
    }else{
        alert('Font Increase Limit Reached!');
    }
}

/**Decrease Font Size by 1px - Limit 5*1=5px */

function decreaseSize(){
    var el = document.getElementById('main');
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style); 
    if(limitFontD <= 5){
        el.style.fontSize = (fontSize-1)+"px";
        limitFontD++;
        if(limitFontI>0){
            limitFontI--;
        }
    }else{
        alert('Font Decrease Limit Reached!');
    }
}