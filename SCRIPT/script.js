const inputBox = document.getElementById("page1-input");
const submitButton = document.getElementById("submit-btn");
const sections = document.getElementById("section[id]");

// QR CODE GENERATOR

var qrcode = document.getElementById("qr-image");
const user_input = document.getElementById("page1-input");
const generate_qr = document.getElementById("submit-btn");
const downloadBtn = document.getElementById("download-btn");
let url = "";

generate_qr.addEventListener("click", () => {
  if (isEmpty() != 0) {
    url = `https://api.qrserver.com/v1/create-qr-code/?size=190x205&data=${user_input.value}`;
    qrcode.src = url;
    user_input.value = "";
    // downloadBtn.setAttribute("href", url);
    downloadBtn.setAttribute("download", `download.png`);
  } else {
    alert("Text Field cannot be empty");
  }
});

async function downloadImage(imageSrc) {
  const image = await fetch(imageSrc);
  const imageBlog = await image.blob();
  const imageURL = URL.createObjectURL(imageBlog);

  const link = document.createElement("a");
  link.href = imageURL;
  link.download = "download.jpg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function btnStyle(value) {
  if (value == 1) {
    submitButton.classList.toggle("button-toggle");
    setTimeout(() => {
      submitButton.classList.remove("button-toggle");
    }, 200);
  } else if (value == 2) {
    downloadImage(url);
    downloadBtn.classList.toggle("button-toggle");
    setTimeout(() => {
      downloadBtn.classList.remove("button-toggle");
    }, 200);
  }
}
function isEmpty() {
  if (user_input.value == "") {
    return 0;
  } else {
    return 1;
  }
}
