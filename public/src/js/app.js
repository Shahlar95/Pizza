let cards = document.querySelector('.cards');
let inc = document.querySelector('.inc');
let dec = document.querySelector('.dec');


const products = [
    {
        name: "HAWAIIAN",
        price: 16.8,
        ingredients:"Tomato sauce, mozzarella, ham & pineapple",
        imgagUrl:"https://assets.nicepagecdn.com/d2cc3eaa/88844/images/56765.jpg"
    },
    {
        name:"CHICKEN",
        price: 17.75,
        ingredients: "Tomato sauce, mozzarella, chicken, pineapple* & bbq sauce",
        imgagUrl:"https://assets.nicepagecdn.com/d2cc3eaa/88844/images/mixed-pizza-with-olive-bell-pepper-tomato_140725-183.jpg"
    },
    {
        name:"SALAMI",
        price:15.55,
        ingredients:"Tomato sauce, mozzarella & mild salami",
        imgagUrl: 'https://assets.nicepagecdn.com/d2cc3eaa/88844/images/123.jpg',


    },
    {
        name:"ORIGINAL",
        price: 18.95,
        ingredients: "Tomato sauce, mozzarella & oregano",
        imgagUrl:'https://assets.nicepagecdn.com/d2cc3eaa/88844/images/56.jpg'
    },
    {
        name:"Carnival",
        price: 34,
        ingredients: "Pizza sauce, Mushrooms, Black Olives, Pepperoni, Mozzarella",
        imgagUrl:'https://www.pizzaiolo.mx/img/blog/pizza-hecha-de-varios-tipos-de-pizza-02%20(1).png',
    },
    {
        name:"American Hot",
        price: 40,
        ingredients: 'Pizza Sauce, Pepperoni, Jalapeno, Mozzarella',
        imgagUrl:'https://media.istockphoto.com/id/1349560847/photo/sausage-and-vegetable-pizza-on-dark-background.jpg?s=612x612&w=0&k=20&c=VjDdBc_WrHh9dqI8jCSEoI1jeWQDVSdXOJJ5LijQoRA='
    }
]




function uiWriter() {
    let writer = '';

products.forEach(product => {
    writer += `
                    <div class=" col-md-12 col-lg-6">
                        <div class="inner">
                            <div class="img">
                                <img src="${product.imgagUrl}" alt="image">
                            </div>
                            <div class="content">
                                <h3>${product.name}</h3>
                                <p>${product.ingredients}</p>
                                <p class=price>$${product.price}</p>
                                <button>VIEW</button>
                            </div>
                        </div>
                    </div>
    
    `
});

cards.innerHTML = writer;
}

uiWriter();


    
function increase(arr) {
    arr.sort(function (a,b) {
    
        return a.price - b.price
    })
    return uiWriter()
}


function decrease(arr) {
    products.sort(function (a,b) {
    
        return b.price - a.price
    })
    return uiWriter()
}



inc.addEventListener('click', function () {
    increase(products)
});

dec.addEventListener('click', function () {
    decrease(products)
});



  



