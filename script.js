

let firstdParagraph = document.createElement('p');
firstdParagraph.setAttribute('class', 'first');
let body = document.querySelector('body');
body.appendChild(firstdParagraph);
firstdParagraph.innerText = "Welcome to the BookShop!";


let line = document.createElement('hr');
body.appendChild(line);

//body.getElementsByClassName('first')[0].style = "margin-left: 600px; font-size: 24px; font-style: bold";
let img1 = document.createElement('img');
img1.setAttribute('class', 'book_img');
img1.src = "/img/pexels-pixabay-159711.jpg";
body.appendChild(img1);


let orderFormBox = document.createElement('div');
orderFormBox.setAttribute('class', 'orderbox');
body.appendChild(orderFormBox);

let orderForm = document.createElement('p');
orderForm.setAttribute('class', 'order');
orderFormBox.appendChild(orderForm);
orderForm.innerText = "Your Purchase";

let delete_item_button = document.createElement('button');
delete_item_button.setAttribute('class', 'delete_item');
delete_item_button.textContent = "x";
orderForm.appendChild(delete_item_button);
delete_item_button.onclick = function(item) {
   bag.remove(item);
}

let total_price = document.createElement("array");
total_price.setAttribute('class', 'tot_price');
total_price.textContent = " ";
orderForm.appendChild(total_price);

/*let plus_item_button = document.createElement('button');
plus_item_button.setAttribute('class', 'plus_button');
plus_item_button.textContent = "+";
orderForm.appendChild(plus_item_button);

let minus_item_button = document.createElement('button');
minus_item_button.setAttribute('class', 'minus_button');
minus_item_button.textContent = "-";
orderForm.appendChild(minus_item_button);*/

let bag = document.createElement('array');
bag.setAttribute('id', 'bag');
bag.textContent = "";
orderForm.appendChild(bag);


let boxWithOrder = document.createElement('div');
boxWithOrder.setAttribute('class', 'whatordered');
orderFormBox.appendChild(boxWithOrder);


let butt = document.createElement('button');
butt.innerText = "Make an order";
butt.setAttribute('id', 'submit');

butt.onclick = function () {
	window.location = "./order page/order.html";
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
            title.textContent = data[key].title;
            bookItem.appendChild(title);
            listOfBooks.appendChild(bookItem);
			let price = document.createElement("div");
            price.textContent = "Price: " + data[key].price;
			price.setAttribute('class', 'self-price')
            bookItem.appendChild(price);
            bookItem.appendChild(showMoreBtn('show-more-btn-'+ key, data[key].description, data[key].title))
            let add_to_bag = document.createElement('button');
            add_to_bag.setAttribute('id', 'add-to-bag');
            add_to_bag.textContent = "Add to bag";
            bookItem.appendChild(add_to_bag);
            add_to_bag.onclick = function () {
                bag.append("Book: " + data[key].title + " " + "Author: " + data[key].author + " " + "Price: " + data[key].price);
            }

        }
});

function showMoreBtn(id, description, title) {
    let showMoreBtn = document.createElement('button')
    showMoreBtn.classList.add('show-more-open')
    showMoreBtn.innerText = 'Show more'

    let popup = document.createElement('div')
    popup.id = id
    popup.classList.add('show-more-popup')

    let showMoreBody = document.createElement('div')
    showMoreBody.classList.add('show-more-body')

    let closeBtn = document.createElement('div')
    closeBtn.classList.add('show-more-close')

    let showMoreTitle = document.createElement('p')
    showMoreTitle.textContent = title

    let showMoreText = document.createElement('p')
    showMoreText.textContent = description

    showMoreBody.appendChild(closeBtn)
    showMoreBody.appendChild(showMoreTitle)
    showMoreBody.appendChild(showMoreText)
    popup.appendChild(showMoreBody)
    showMoreBtn.appendChild(popup)

    showMoreBtn.addEventListener('click', e => {
        if (e.target === showMoreBtn) {
            let body = document.getElementById(id)
            body.classList.toggle('active')
        }
    })

    closeBtn.addEventListener('click', e => {
        e.stopPropagation()
        let body = document.getElementById(id)
        body.classList.remove('active')
    })

    return showMoreBtn
}












