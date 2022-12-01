

let firstdParagraph = document.createElement('p');
firstdParagraph.setAttribute('class', 'first');
let body = document.querySelector('body');
body.appendChild(firstdParagraph);
firstdParagraph.innerText = "Welcome to the BookShop!";


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
orderForm.innerText = "Your Purchase";


let boxWithOrder = document.createElement('div');
boxWithOrder.setAttribute('class', 'whatordered');
orderFormBox.appendChild(boxWithOrder);


let butt = document.createElement('button');
butt.innerText = "Make an order";
butt.setAttribute('id', 'submit');

butt.onclick = function () {
	alert('Please, fill the delivery form =>');
}
orderFormBox.appendChild(butt);


let listOfBooks = document.createElement("div")
body.appendChild(listOfBooks)
listOfBooks.setAttribute('id', 'book_list')
fetch('books.json') //path to the file with json data
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        for(let key in data) {
            console.log(data[key]);
            console.log(data[key].author);
            let bookItem = document.createElement("div")
			bookItem.setAttribute('class', 'book-self');
            let author = document.createElement("div");
            author.textContent = data[key].author;
			author.setAttribute('class', 'author-self')
            bookItem.appendChild(author);
			let image = document.createElement("img");
			image.setAttribute('class', 'img-self' )
            image.src = data[key].imageLink;
            bookItem.appendChild(image)
            let title = document.createElement("div");
			title.setAttribute('class', 'title-self')
            title.textContent = "Title: " + data[key].title;
            bookItem.appendChild(title);
            listOfBooks.appendChild(bookItem);
			let price = document.createElement("div");
            price.textContent = "Price: " + data[key].price;
			price.setAttribute('class', 'self-price')
            bookItem.appendChild(price);
            //pop-up
            let newlink = document.createElement('button');
            newlink.innerHTML = "Show more";
            newlink.setAttribute( 'class', 'open-popup');
            bookItem.appendChild(newlink);
            let popup_bg = document.createElement("div");
            popup_bg.setAttribute('class', 'popup_bg');
            newlink.appendChild(popup_bg);
            let popup = document.createElement("div");
            popup.setAttribute('class', 'popup');
            popup_bg.appendChild(popup);
            let close_popup = document.createElement("img");
            close_popup.setAttribute("class", "close-popup");
            close_popup.src = "/img/icon.png";
            popup.appendChild(close_popup);
            /*let description = document.createElement("div");
			description.setAttribute('class', 'description-popup')
			description.textContent = "Description: " + data[key].description;
			bookItem.appendChild(description);*/

        }
});


// С этой строки я пыталась сделать pop-up по макету
let newlink = document.createElement('button');
newlink.innerHTML = "Show more";
newlink.setAttribute( 'class', 'open-popup');
document.body.appendChild(newlink);
let popup_bg = document.createElement("div");
popup_bg.setAttribute('class', 'popup_bg');
newlink.appendChild(popup_bg);
let popup = document.createElement("div");
popup.setAttribute('class', 'popup');
popup_bg.appendChild(popup);
let close_popup = document.createElement("img");
close_popup.setAttribute("class", "close-popup");
close_popup.src = "/img/icon.png";
popup.appendChild(close_popup);
let desc = document.createElement("div");
desc.textContent = "You Don't Know JS Yet: Get Started<br>It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!";
popup.appendChild(desc);



let popupBg = document.querySelector('.popup_bg');
let popup1 = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup1.classList.add('active');
    })
});

closePopupButton.addEventListener('click',(e) => {
    e.stopPropagation()
    popupBg.classList.remove('active');
    popup1.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});






