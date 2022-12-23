


import { header, footer } from "./component.js";
document.getElementById("header").innerHTML = header();
document.getElementById("footer").innerHTML = footer();


let sum = [];
let datafromLS = JSON.parse(localStorage.getItem("cart_items")) || [];
console.log(datafromLS)
 let total = document.getElementById("total");
 total.innerText = grandtotal(sum).toFixed(2);


     datafromLS.forEach((el) => {
        sum.push(+el.price)
    })
// const cartDataServer = async () => {
//     let res = await fetch(`https://skincare03.onrender.com/cartProducts`)
//     let data = await res.json();
//     datafromLS = data
//     //console.log(datafromLS)
    


   
// }
//cartDataServer()
// console.log(datafromLS)
//console.log(sum)


let store = document.getElementById('store');

let nsum = grandtotal(sum);
 total = document.getElementById('total')
total.innerText = nsum.toFixed(2);

const append = (data) => {

    store.innerHTML = null;
    data.forEach((el, i) => {
        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = el.image1;

        let title = document.createElement('p');
        title.innerText = el.name;

        let price = document.createElement('h3');
        price.innerText = `$ ${el.price}`;


        let div2 = document.createElement('div');

        let sub = document.createElement('span');
        sub.innerHTML = '<i class="fa-solid fa-minus"></i>';
        sub.onclick = () => {
            total.innerText = null;
            if (qty.innerText == 1) {
                nsum = grandtotal(sum);
                total = document.getElementById('total')
                total.innerText = nsum.toFixed(2);
                return;
            } else {
                qty.innerText--;
                subtotal.innerText = +el.price * qty.innerText;
                sum.pop(+el.price);
                nsum = grandtotal(sum);
                total = document.getElementById('total')
                total.innerText = nsum.toFixed(2);
            }
        }

        let qty = document.createElement('span');
        qty.innerText = 1;

        let plus = document.createElement('span');
        plus.innerHTML = '<i class="fa-solid fa-plus"></i>';
        plus.onclick = () => {
            total.innerText = null;
            qty.innerText++;
            subtotal.innerText = +el.price * qty.innerText;
            sum.push(+el.price);
            nsum = grandtotal(sum);
            total = document.getElementById('total')
            total.innerText = nsum.toFixed(2);
        }

        div2.append(sub, qty, plus);

        let subtotal = document.createElement('h3');
        subtotal.innerText = +el.price;

        let remove = document.createElement('span');
        remove.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        remove.addEventListener('click', () => {
            removeFun(i);
        })

        div.append(img, title, price, div2, subtotal, remove);
        store.append(div);
    })

}
 append(datafromLS);
console.log(datafromLS);


function grandtotal(s) {
    let nsum = 0;
    for (let i = 0; i < s.length; i++) {
        nsum += s[i];
    }
    return nsum;
}

 
function removeFun(i) {
    // console.log(i)

    // let res = await fetch(`https://skincare03.onrender.com/cartProducts/${i}`, {
    //     method: 'DELETE',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    // });
    // let data = await res.json();
    // console.log(data);



    datafromLS = JSON.parse(localStorage.getItem("cart_items")) || [];
    datafromLS.splice(i, 1);
    localStorage.setItem("cart_items", JSON.stringify(datafromLS));
    append(datafromLS);
    window.location.reload();
}

// const ItemsInCart = async () => {
//     try {
//         let res = await fetch(`https://skincare03.onrender.com/cartProducts`);
//         let datafromLS = await res.json();
//         let cartNumber = document.getElementById("cart");
//         cartNumber.innerText = data.length;
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// };
// ItemsInCart();
