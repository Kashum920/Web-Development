/*=== first typing script ===*/
const openShoping = document.querySelector(".shopping");
const closeShoping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");

openShoping.addEventListener('click', () => {
    body.classList.add('active');
});

closeShoping.addEventListener('click', () => {
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name:"Watch",
        images:"p1.png",
        price:2000,
    },
    {
        id: 2,
        name:"Watch",
        images:"p2.png",
        price:2000,
    },
    {
        id: 3,
        name:"Watch",
        images:"p3.png",
        price:800,
    },
    {
        id: 4,
        name:"Watch",
        images:"p4.png",
        price:900,
    },
    {
        id: 5,
        name:"Watch",
        images:"p5.png",
        price:1200,
    },
    {
        id: 7,
        name:"Watch",
        images:"p6.png",
        price:2500,
    },
]

let listCards = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
            <img src = "images/${value.images}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>
        `;

        list.appendChild(newDiv);
    });
}

initApp();


/*=== second typing script ===*/
const addToCard = (key) => {
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }

    reloadCard();
}

const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if (value != null){
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src="images/${value.images}"></div>
                <div class="cardTitle">${value.name}</div>
                <div class="cardPrice">${value.price.toLocaleString()}</div>

                <div>
                    <button style="background-color:#560bad;" class="cardButton" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>

                    <div class="count">${count}</div>

                    <button style="background-color:#560bad;" class="cardButton" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>

                </div>
            `;
            listCard.appendChild(newDiv)
        }

        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    });
}

const changeQuantity = (key, quantity) => {
    if(quantity == 0) {
        delete listCards[key];      
    }
    else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }

    reloadCard();
}