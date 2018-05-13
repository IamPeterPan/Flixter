/**
    Created For: Shop
    Author: Minoj
*/

//Function used to display the modal with the movieName as the id
function movieModal(movieName) {
    var modal = document.getElementById(movieName);
    modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
function closemodal(movieName) {
    var modal = document.getElementById(movieName);
    modal.style.display = "none"; 
}