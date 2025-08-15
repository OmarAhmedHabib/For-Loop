// const { createElement } = require("react");

// const names = [
//     "Omar",
//     "Ahmed",    
//     "Habib",
//     "El",
//     "Full",
//     "Stack",
//     "Developer"
// ];

// for (let i = 0; i <= 10; i++) {
//     console.log(`Hello ${names[i % names.length]}!`);
// }


const cardProducts = {
    "card1": { name: "Product 1", price: 100, quantity: 1, img: "https://picsum.photos/300/200?random=1" },
    "card2": { name: "Product 2", price: 200, quantity: 2, img: "https://picsum.photos/300/200?random=2" },
    "card3": { name: "Product 3", price: 150, quantity: 3, img: "https://picsum.photos/300/200?random=3" },
    "card4": { name: "Product 4", price: 250, quantity: 4, img: "https://picsum.photos/300/200?random=4" },
    "card5": { name: "Product 5", price: 300, quantity: 5, img: "https://picsum.photos/300/200?random=5" },
    "card6": { name: "Product 6", price: 350, quantity: 6, img: "https://picsum.photos/300/200?random=6" },
    "card7": { name: "Product 7", price: 400, quantity: 7, img: "https://picsum.photos/300/200?random=7" },
    "card8": { name: "Product 8", price: 450, quantity: 8, img: "https://picsum.photos/300/200?random=8" },
    "card9": { name: "Product 9", price: 500, quantity: 9, img: "https://picsum.photos/300/200?random=9" },
    "card10": { name: "Product 10", price: 550, quantity: 10, img: "https://picsum.photos/300/200?random=10" },
    "card11": { name: "Product 11", price: 600, quantity: 11, img: "https://picsum.photos/300/200?random=11" },
    "card12": { name: "Product 12", price: 650, quantity: 12, img: "https://picsum.photos/300/200?random=12" },
    "card13": { name: "Product 13", price: 700, quantity: 13, img: "https://picsum.photos/300/200?random=13" },
    "card14": { name: "Product 14", price: 750, quantity: 14, img: "https://picsum.photos/300/200?random=14" },
    "card15": { name: "Product 15", price: 800, quantity: 15, img: "https://picsum.photos/300/200?random=15" },
    "card16": { name: "Product 16", price: 850, quantity: 16, img: "https://picsum.photos/300/200?random=16" },
    "card17": { name: "Product 17", price: 900, quantity: 17, img: "https://picsum.photos/300/200?random=17" },
    "card18": { name: "Product 18", price: 950, quantity: 18, img: "https://picsum.photos/300/200?random=18" },
    "card19": { name: "Product 19", price: 1000, quantity: 19, img: "https://picsum.photos/300/200?random=19" },
    "card20": { name: "Product 20", price: 1050, quantity: 20, img: "https://picsum.photos/300/200?random=20" },
    "card21": { name: "Product 21", price: 1100, quantity: 21, img: "https://picsum.photos/300/200?random=21" },
    "card22": { name: "Product 22", price: 1150, quantity: 22, img: "https://picsum.photos/300/200?random=22" },
    "card23": { name: "Product 23", price: 1200, quantity: 23, img: "https://picsum.photos/300/200?random=23" },
    "card24": { name: "Product 24", price: 1250, quantity: 24, img: "https://picsum.photos/300/200?random=24" }
};



const container = document.getElementById('cards-container'); // تأكد أن عندك عنصر فيه id ده

for (const [key, product] of Object.entries(cardProducts)) {
    // إنشاء العمود
    const col = document.createElement('div');
    col.className = 'col-md-3';
    col.style.marginBottom = '20px'; // إضافة مسافة بين الكروت

    // إنشاء الكارت
    const card = document.createElement('div');
    card.className = 'card p-2 shadow  rounded'; 

    // محتوى الكارت
    card.innerHTML = `
        <img src="${product.img}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">Price: $${product.price}</p>
            <p class="card-text">Quantity: ${product.quantity}</p>
        </div>
    `;

    col.appendChild(card);
    container.appendChild(col);
}
