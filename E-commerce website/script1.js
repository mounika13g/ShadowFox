// 🔷 Product Data

const products = [

    {
        id: 1,
        name: "Phone",
        price: 15000,
        category: "Electronics",
        image: "https://th.bing.com/th/id/OIP.HLC78vac-yC3McjNDTqyKAHaJT?w=800&h=1000&rs=1&pid=ImgDetMain"
    },

    {
        id: 2,
        name: "Laptop",
        price: 55000,
        category: "Electronics",
        image: "https://m.media-amazon.com/images/I/81NEQTxNyeL._SL1500_.jpg"
    },

    {
        id: 3,
        name: "Headphones",
        price: 2500,
        category: "Electronics",
        image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._SL1500_.jpg"
    },

    {
        id: 4,
        name: "Smart Watch",
        price: 4500,
        category: "Electronics",
        image: "https://m.media-amazon.com/images/I/71Swqqe7XAL._SL1500_.jpg"
    },

    {
        id: 5,
        name: "Gaming Mouse",
        price: 1200,
        category: "Electronics",
        image: "https://m.media-amazon.com/images/I/61mpMH5TzkL._SL1500_.jpg"
    },

    {
        id: 6,
        name: "T-Shirt",
        price: 1500,
        category: "Clothing",
        image: "https://tse3.mm.bing.net/th/id/OIP.wQVbdJezFjSHtANRFGwZ6gHaJE?rs=1&pid=ImgDetMain"
    },

    {
        id: 7,
        name: "Men Shirt",
        price: 1800,
        category: "Clothing",
        image: "https://tiimg.tistatic.com/fp/1/008/336/mens-plain-dark-brown-colored-cotton-full-sleeve-formal-shirt--782.jpg"
    },

    {
        id: 8,
        name: "Jeans",
        price: 2200,
        category: "Clothing",
        image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1736527960-untitled-3-67815035563fa.jpg?crop=0.774xw:0.830xh;0.111xw,0.0871xh&resize=980:*"
    },

    {
        id: 9,
        name: "Jacket",
        price: 3500,
        category: "Clothing",
        image: "https://m.media-amazon.com/images/I/71li-ujtlUL._UY695_.jpg"
    },

    {
        id: 10,
        name: "Bodycon",
        price: 2800,
        category: "Clothing",
        image: "https://www.anemoslosangeles.com/cdn/shop/files/Plunging_Bias-Cut_Dress_Taupe_Marine_in_Stretch_Twill_800x.jpg?v=1760542615"
    },

    {
        id: 11,
        name: "Sneakers",
        price: 4000,
        category: "Footwear",
        image: "https://img.magnific.com/free-photo/new-pair-white-sneakers-isolated-white_93675-133039.jpg?semt=ais_hybrid&w=740&q=80"
    },

    {
        id: 12,
        name: "Sandals(men)",
        price: 3200,
        category: "Footwear",
        image: "https://img.magnific.com/free-photo/beautiful-men-sandal_1203-7638.jpg?semt=ais_hybrid&w=740&q=80"
    },

    {
        id: 13,
        name: "Sandals(women)",
        price: 2000,
        category: "Footwear",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/4/303109171/XK/PI/TW/151158092/san173-bg-5--500x500.jpg"
    },

    {
        id: 14,
        name: "Backpack",
        price: 2100,
        category: "Accessories",
        image: "https://www.fgear.in/cdn/shop/files/1_06a8d208-f39b-464a-b31b-1ffb172fc1d5.png?v=1759921010&width=1946"
    },

    {
        id: 15,
        name: "Cap",
        price: 700,
        category: "Accessories",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3w7xqKlnScLOK-REU6BecAascjnRViXLQw&s"
    },

    {
        id: 16,
        name: "Sunglasses",
        price: 1500,
        category: "Accessories",
        image: "https://i.pinimg.com/736x/e6/00/ba/e600ba75e51830b7f9089fa0ba8b6abb.jpg"
    },

    {
        id: 17,
        name: "Mixer Grinder",
        price: 3500,
        category: "Home Appliances",
        image: "https://orpatgroup.com/wp-content/uploads/2024/01/1-SUPERBLEND-WHITE-FRONT-white-background-900x900.jpg"
    },

    {
        id: 18,
        name: "Vacuum Cleaner",
        price: 6500,
        category: "Home Appliances",
        image: "https://img.magnific.com/free-vector/realistic-vector-icon-illustration-vacuum-cleaner-house-hold-appliances_134830-2424.jpg?semt=ais_hybrid&w=740&q=80"
    },

    {
        id: 19,
        name: "Novel Book",
        price: 499,
        category: "Books",
        image: "https://m.media-amazon.com/images/I/81iqZ2HHD-L.jpg"
    },

    {
        id: 20,
        name: "Beauty Set",
        price: 5999,
        category: "Beauty",
        image: "https://previews.123rf.com/images/kubais/kubais1205/kubais120501072/13815239-makeup-set-isolated-on-white-background.jpg"
    }

];

function displayProducts(items) {

    const container =
        document.getElementById("productList");

    container.innerHTML = "";

    if (items.length === 0) {

        container.innerHTML = `
            <div class="no-product">
                No Such Product Found ❌
            </div>
        `;

        return;
    }

    items.forEach(product => {

        container.innerHTML += `

            <div class="card">

                <img 
                    src="${product.image}" 
                    alt="${product.name}"
                >

                <h3>${product.name}</h3>

                <p class="price">
                    ₹${product.price}
                </p>

                <button onclick="addToCart(${product.id})">
                    Add To Cart
                </button>

            </div>

        `;
    });
}

function filterCategory(category) {

    const filteredProducts =
        products.filter(product =>
            product.category === category
        );

    displayProducts(filteredProducts);
}

function sortPrice(type) {

    let sortedProducts = [...products];

    if (type === "low") {

        sortedProducts.sort((a, b) =>
            a.price - b.price
        );

    } else {

        sortedProducts.sort((a, b) =>
            b.price - a.price
        );
    }

    displayProducts(sortedProducts);
}

function showSuggestions() {

    const input =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const suggestions =
        document.getElementById("suggestions");

    suggestions.innerHTML = "";

    if (input === "") {

        displayProducts(products);

        return;
    }

    const matchedProducts =
        products.filter(product =>
            product.name
            .toLowerCase()
            .includes(input)
        );

    matchedProducts.forEach(product => {

        const div =
            document.createElement("div");

        div.innerText = product.name;

        div.onclick = function () {

            document.getElementById(
                "searchInput"
            ).value = product.name;

            displayProducts([product]);

            suggestions.innerHTML = "";
        };

        suggestions.appendChild(div);
    });
}

function searchButton() {

    const input =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const matchedProducts =
        products.filter(product =>
            product.name
            .toLowerCase()
            .includes(input)
        );

    displayProducts(matchedProducts);

    document.getElementById(
        "suggestions"
    ).innerHTML = "";
}

function addToCart(id) {

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    const existingProduct =
        cart.find(item => item.id === id);

    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({
            id: id,
            quantity: 1
        });
    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    document.getElementById(
        "cartPopup"
    ).classList.add("active");

    displayCart();
}

function toggleCart() {

    const cartPopup =
        document.getElementById("cartPopup");

    cartPopup.classList.toggle("active");

    displayCart();
}

function displayCart() {

    const cartContainer =
        document.getElementById("cartItems");

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    cartContainer.innerHTML = "";

    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <div class="empty-cart">
                Cart Is Empty 🛒
            </div>
        `;

        return;
    }

    let total = 0;

    cart.forEach(item => {

        const product =
            products.find(p => p.id === item.id);

        total +=
            product.price * item.quantity;

        cartContainer.innerHTML += `

            <div class="cart-item">

                <img 
                    src="${product.image}" 
                    alt="${product.name}"
                >

                <div class="cart-details">

                    <h4>${product.name}</h4>

                    <p>₹${product.price}</p>

                </div>

                <div class="quantity-box">

                    <button 
                        onclick="decreaseQuantity(${item.id})"
                    >
                        -
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button 
                        onclick="increaseQuantity(${item.id})"
                    >
                        +
                    </button>

                </div>

            </div>

        `;
    });

    cartContainer.innerHTML += `

        <div class="cart-total">

            <h2>
                Total: ₹${total}
            </h2>

        </div>

    `;
}

function increaseQuantity(id) {

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    const item =
        cart.find(product => product.id === id);

    item.quantity += 1;

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}

function decreaseQuantity(id) {

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    const item =
        cart.find(product => product.id === id);

    item.quantity -= 1;

    if (item.quantity <= 0) {

        cart =
            cart.filter(product =>
                product.id !== id
            );
    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}

function goHome() {

    document.getElementById(
        "searchInput"
    ).value = "";

    document.getElementById(
        "suggestions"
    ).innerHTML = "";

    displayProducts(products);
}

displayProducts(products);

displayCart();