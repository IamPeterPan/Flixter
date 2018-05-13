/**
    JavaScript For: Shopping Cart
    Author: Minoj
 */

/**Total Price Variable to Display the total of all the products */
var totalPrice = 0;
/**Variable to store the total number of products */
var totalProducts = 0;
/**Variables to Store customer's name, customer's email address and customer's address */
var cusname = "";
var cusemail = "";
var cusaddress = "";

/**Empty the cart When the user clicks on the rest button **/
function resetCart(){
    totalPrice = 0;
    totalProducts = 0;
    document.getElementById('emptyCart').innerHTML = "<h5>Empty Cart</h5>";
    document.getElementById('cart').innerHTML = "";
    document.getElementById('total').innerHTML = "";
}

/**Choosing the type of item they want */
function chooseType(formRef,price){
    var chosenValue = formRef.type.value;
    if (chosenValue == 1) {
        formRef.qty.readOnly = false;
        formRef.qty.value = 0;
    }else if (chosenValue == 2) {
        formRef.qty.readOnly = true;
        formRef.qty.value = 1;
        setPrice(formRef,price);
    }
}

/**Add Item to the Cart
 * User Chooses Quantity - Price generated accordingly
 */
function setPrice(formRef,price){
    var quantity = 0;
    var finalPrice = 0;
    if (formRef.qty.value == '') {
        formRef.txtTotal.value = 0;
        alert('Quantity cannot be empty');
        formRef.txtTotal.value = 0;
    } else {
        quantity = parseInt(formRef.qty.value);
        if (quantity <= 0) {
            alert('Quantity cannot be 0 or empty');
            formRef.txtTotal.value = 0;
            formRef.qty.value = 0;
        } else if (quantity > 20) {
            alert('Quantity cannot be more than 20');
            formRef.txtTotal.value = 0;
            formRef.qty.value = 0;
        } else {
            finalPrice = parseInt(price) * quantity;
            formRef.txtTotal.value = finalPrice;
        }
    }
}

/**Add Items to Cart
 * Validate Quantity and then add the item to the cart along with the title, price and quantity.
 */
function addCart(formRef,title,price){
    var finalPrice = 0;
    var quantity = 0;
    var type = 0;
    if (formRef.qty.value == '') {
        alert('Quantity cannot be empty');
        formRef.txtTotal.value = 0;
    }else{
        quantity = parseInt(formRef.qty.value);
        if (quantity <= 0) {
            alert('Quantity cannot be 0 or empty');
            formRef.txtTotal.value = 0;
        } else if (quantity > 20) {
            alert('Quantity cannot be more than 20');
            formRef.txtTotal.value = 0;
            formRef.qty.value = 0;
        } else if (totalProducts == 5) { 
            alert('Product Limit per Order Reached');
            formRef.txtTotal.value = 0;
        } else {
            type = parseInt(formRef.type.value);
            finalPrice = parseInt(price) * quantity;
            totalPrice += finalPrice;
            document.getElementById('emptyCart').innerHTML  = "";
            if(type==1){
                type = "DVD";
            }else{
                type = "Digital";
            }
            document.getElementById('cart').innerHTML += "<div class='item' id="+totalProducts+"><span class='remove' onclick='removeCart("+totalProducts+","+finalPrice+")'>&times;</span><h5>"+title+"</h5><p>Type: "+type+"<br />QTY: "+quantity+"<br />LKR "+finalPrice+"</p></div>";
            document.getElementById('total').innerHTML = "Total : "+totalPrice;
            totalProducts++;
        }
    }
}

function removeCart(movieName,price) {
    var modal = document.getElementById(movieName);
    modal.style.display = "none"; // hides the myModal section 
    totalPrice -= price;
    totalProducts--;
    if(totalProducts==0){
        document.getElementById('cart').innerHTML = "";
        document.getElementById('total').innerHTML = "";
        document.getElementById('emptyCart').innerHTML = "<h5>Empty Cart</h5>";
    }else{
        document.getElementById('total').innerHTML = "Total : "+totalPrice;
    }
    
}

function checkOut(){
    
    if(totalProducts==0){
        var modal = document.getElementById('checkOutMessage');
        modal.style.display = "block";
        document.getElementById('MessageCheckOut').innerHTML = "<h4 class='error'>You have 0 items in your cart!</h4>";
    }else{
        var modal = document.getElementById('checkOut');
        modal.style.display = "block";
        document.getElementById('checkout').innerHTML = document.getElementById('cart').innerHTML;
        document.getElementById('checkoutTotal').innerHTML = "Total : "+totalPrice;
    }
}

function checkoutConfirm(formRef){

    /**Boolean Variables to ensure that all validations are completed */
    var nameValid;
    var emailValid;
    var phoneValid;
    var addValid;

    /**Validate the Customer's Name - Cannot contain numbers or special characters */
    nameValid = validateName(formRef.name.value);

    /**Validate the Customer's Email - Invalid Email if it contains restricted characters */
    emailValid = validateEmail(formRef.email.value);

    /**Validate the Customer's Phone Number - Phone Number cannot be longer than 10 digits and only numbers */
    phoneValid = validatePhNum(formRef.phNum.value);

    /**Validate Customer's Address - Only certain characters allowed */
    addValid = validateAdd(formRef.address.value);
    
    /**Check if all the variables are valid - If valid display Product Summary */
    if(nameValid){
        if(emailValid){
            if(phoneValid){
                if(addValid){
                    var modal = document.getElementById('checkOut');
                    modal.style.display = "none";
                    var modal1 = document.getElementById('checkOutMessage');
                    modal1.style.display = "block";
                    document.getElementById('MessageTotal').innerHTML = "<h4 class='success'>You've Successfully checked out!</h4><br />";
                    document.getElementById('MessageCheckOut').innerHTML = document.getElementById('cart').innerHTML;
                    document.getElementById('MessageTotal').innerHTML += "<h4>Total : "+totalPrice+"</h4><br />";
                    document.getElementById('MessageTotal').innerHTML += "Dear <b>"+cusname+"</b>, the items you ordered will be shipped to <b><u>"+cusaddress+"</u></b>.<br />Your order ID has been mailed to <b><u>"+cusemail+"</u></b>."
                    resetCart();
                }
            }
        }else{
            alert('error occured');
        }
    }
}

function checkOutClose(){
    var modal = document.getElementById('checkout');
    modal.style.display = "none";
}


/**Validation Functions for Each field in the Checkout form */
/**Validating the Name */
function validateName(value){
    if(value == ''){
        alert('Please input your name');
        return false;
    }else{
        var matches = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
        if (!(value.match(matches))) {
            alert('Name cannot contain Numbers or Special Characters');
            return false;
        }else{
            cusname = value;
            return true;
        }
    }
    return false;
}

/**Validating the Email */
function validateEmail(value){
    if(value == ''){
        alert('Please input your email');
        return false;
    }else{
        matches = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!(value.match(matches))) {
            alert('Invalid Email');
            return false;
        }else{
            cusemail = value;
            return true;
        }
    }
    return false;
}

/**Validating the Phone Number */
function validatePhNum(value){
    if(value == ''){
        alert('Please input your Phone Number');
        return false;
    }else{
        matches = /[^0-9]+$/;
        if (value.match(matches)) {
            alert('Invalid Phone Number');
            return false;
        }else{
            if(value.length != 10){
                alert('Phone Number should be 10 digits');
                return false;
            }else{
                return true;
            }
        }
    }
    return false;
}

/**Validating the Address */
function validateAdd(value){
    if(value == ''){
        alert('Please input your Address');
        return false;
    }else{
        matches = /^[a-zA-Z0-9\s,'-]*$/;
        if(!(value.match(matches))){
            alert('Invalid Address');
            return false;
        }else{
            cusaddress = value;
            return true;
        }
    }
    return false;
}