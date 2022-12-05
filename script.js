let galyasBag = [];
let item = localStorage.getItem("bag");
if(item) {
    let parse = JSON.parse(item);
    galyasBag = parse;
    console.log("! item")
    console.log(galyasBag)
}

let firstdParagraph = document.createElement('p');
firstdParagraph.setAttribute('class', 'first');
let body = document.querySelector('body');
body.appendChild(firstdParagraph);
firstdParagraph.innerText = "Welcome to the BookShop!";


let line = document.createElement('hr');
body.appendChild(line);

let img1 = document.createElement('img');
img1.setAttribute('class', 'book_img');
img1.src = "img/pexels-pixabay-159711.jpg";
body.appendChild(img1);


let orderFormBox = document.createElement('div');
orderFormBox.setAttribute('class', 'orderbox');
body.appendChild(orderFormBox);

let orderForm = document.createElement('div');
orderForm.setAttribute('class', 'order');
orderFormBox.appendChild(orderForm);
orderForm.id = 'order-form'

let yourPurchase = document.createElement('h2')
if(galyasBag.length !== 0) {
    yourPurchase.innerText = "Your Purchase";
}
orderForm.appendChild(yourPurchase)


let total_price = document.createElement("div")

orderFormBox.appendChild(total_price)
total_price.setAttribute('class', 'tot_price');



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
fetch('books.json')
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
            console.log(data[key].imageLink)
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
                data[key].id = 'book' + key;
                galyasBag.push(data[key]);
                let elementById = document.getElementById('bag-div');
                if (elementById) {
                    orderForm.removeChild(elementById)
                }
                displayBag()
                let bagString = JSON.stringify(galyasBag)
                localStorage.setItem("bag", bagString)
                console.log("added in bag")
                console.log(galyasBag)
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

function updatePriceAndCount() {

    let count = 0;
    for (let i = 0; i < galyasBag.length; i++) {
        count += galyasBag[i].price;
    }
    if (count !== 0) {
        total_price.textContent = 'Total price: ' + count;

    } else {
        yourPurchase.textContent = '';
        total_price.textContent = '';
    }

}

function displayBag() {
    yourPurchase.textContent = "Your Purchase";
    let bagdiv = document.createElement("div")
    bagdiv.id = 'bag-div'
    orderForm.appendChild(bagdiv)
    let total = 0;

    for (let i = 0; i < galyasBag.length; i++) {
        total += galyasBag[i].price;
        let bookItem = document.createElement("div");
        let id = 'purchased-book' + i;
        bookItem.id = id;

        let title = document.createElement("div");
        title.setAttribute('class', 'title-self')
        title.textContent = galyasBag[i].title;
        bookItem.appendChild(title);

        let author = document.createElement("div");
        author.textContent = galyasBag[i].author;
        author.setAttribute('class', 'author-self')
        bookItem.appendChild(author);

        let price = document.createElement("div");
        price.textContent = "Price: " + galyasBag[i].price;
        price.setAttribute('class', 'self-price')
        bookItem.appendChild(price);

        let delete_from_bag = document.createElement('button');
        delete_from_bag.setAttribute('id', 'delete-from-bag');
        delete_from_bag.textContent = "X";
        bookItem.appendChild(delete_from_bag);

        let id1 = galyasBag[i].id;
        delete_from_bag.addEventListener('click', e => {
            e.stopPropagation()
            let body = document.getElementById(id)
            bagdiv.removeChild(body)
            galyasBag = galyasBag.filter(it => it.id !== id1)

            console.log(galyasBag)
            console.log(id1)
            let bagString = JSON.stringify(galyasBag)
            localStorage.setItem("bag", bagString)
            console.log("deleted from bag")
            console.log(bagString)

            updatePriceAndCount();
        })

        bagdiv.appendChild(bookItem);
    }
    total_price.textContent = "Total price: " + total;
}

if(galyasBag.length !== 0) {
    displayBag();
}












