const product = [
    {
        id: 0,
        image: 'img/1.jpg',
        title: 'Chaussure 1',
        price: 2000
    },
    {
        id: 1,
        image: 'img/2.jpg',
        title: 'Chaussure 2',
        price: 4000
    },
    {
        id: 2,
        image: 'img/3.jpg',
        title: 'Chaussure 3',
        price: 1000
    },
    {
        id: 3,
        image: 'img/4.jpg',
        title: 'Chaussure 4',
        price: 7000
    },
];

const categories = [...new Set(product.map((item) =>
    {return item}))]

    let i = 0;

    document.getElementById('root').innerHTML = categories.map((item) =>
    {
        var {image, title, price} = item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>${price}.00</h2>` +
            "<button onclick='addtocart("+(i++)+")'>Ajouter au panier</button>"+`<div>
            </div>`
        )
    }).join('')

    var cart = [];

    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }

    function delElement(a){
        cart.splice(a,1);
        displaycart();
    }

    function displaycart(a){
        let j = 0;
        if(cart.length == 0){
            document.getElementById('cartItem') .innerHTML = "Votre panier est vide";
        }
        else{
            document.getElementById("cartItem").innerHTML = cart.map((items) =>
            {
                var {image, title, price} = items;
                return(
                    `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px'>$ ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
                );
            }).join('');
        }
    }