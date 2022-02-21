const inputBox = document.getElementById('page1-input');
const submitButton =  document.getElementById('submit-btn');

// REMOVE MENU 
btn = document.getElementById('btn')
btn.addEventListener('click',()=>{
    navMenu.classList.remove('show')
})
btn1 = document.getElementById('btn1')
btn1.addEventListener('click',()=>{
    navMenu.classList.remove('show')
})
const sections = document.getElementById('section[id]');

// QR CODE GENERATOR 

var qrcode = document.getElementById('qr-image');
const user_input = document.getElementById('page1-input');
const generate_qr = document.getElementById('submit-btn');
const downloadBtn = document.getElementById('download-btn');

generate_qr.addEventListener('click',()=>{
    if(isEmpty() != 0){
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=190x205&data=${user_input.value}`;
    qrcode.src=url;
    user_input.value="";
    download(`https://api.qrserver.com/v1/create-qr-code/?size=190x205&data=${user_input.value}`,'new.png');
    }
    else{
        alert('Text Field cannot be empty');
    }
});
function btnStyle(value){
    if(value==1){
        submitButton.classList.toggle('button-toggle');
        setTimeout(()=>{
            submitButton.classList.remove('button-toggle');
        },200);
    }
    else if(value==2){
        downloadBtn.classList.toggle('button-toggle');
        setTimeout(()=>{
            downloadBtn.classList.remove('button-toggle');
        },200);
    }
}

function isEmpty(){

    if(user_input.value==""){
    return 0;}
    else{
        return 1
    }
}
