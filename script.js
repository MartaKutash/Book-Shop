let firstdParagraph = document.createElement('p');
firstdParagraph.setAttribute('class', 'first');
let body = document.querySelector('body');
body.appendChild(firstdParagraph);
firstdParagraph.innerText = "Welcome to the best BookShop you have ever visited!";


let line = document.createElement('hr');
body.appendChild(line);

//body.getElementsByClassName('first')[0].style = "margin-left: 600px; font-size: 24px; font-style: bold";
let img = document.createElement('img');
img.src = "/img/pexels-pixabay-159711.jpg";
body.appendChild(img);


let orderFormBox = document.createElement('div');
orderFormBox.setAttribute('class', 'orderbox');
body.appendChild(orderFormBox);

let orderForm = document.createElement('p');
orderForm.setAttribute('class', 'order');
orderFormBox.appendChild(orderForm);
orderForm.innerText = "Your order";

let boxWithOrder = document.createElement('div');
boxWithOrder.setAttribute('class', 'whatordered');
orderFormBox.appendChild(boxWithOrder);

let butt = document.createElement('button');
butt.innerText = "Make an order";
butt.setAttribute('class', 'makeorder');
orderFormBox.appendChild(butt);


