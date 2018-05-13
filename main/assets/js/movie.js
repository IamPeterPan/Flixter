var limitFontI = 0; //Limit to Increase Font Size
var limitFontD = 0; //Limit to Decrease Font Size

function videoModal(url) {
    var modal = document.getElementById('video');
    var content = document.getElementById('modalContent');
    content.innerHTML = "<div class='content'><iframe width='800' height='600' src='"+url+"' frameborder='0' allowfullscreen></iframe></div>";
    modal.style.display = "block";
}

function imageModal(img){
    var modal = document.getElementById('image');
    document.getElementById('modalImage').innerHTML = "<img src='"+img+"' alt='Movie Still'/>";
    modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
function closemodal() {
    var modal = document.getElementById('video');
    modal.style.display = "none"; 
    modal = document.getElementById('image');
    modal.style.display = "none";
}

/**Increase Font Size by 2px - Limit 5*2=10px */

function increaseSize(){
    var el = document.getElementById('main');
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style); 
    if(limitFontI <= 5){
        var box = document.getElementById('main');
        box.style.fontSize = (fontSize+1)+"px";
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