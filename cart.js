
// let datafromLS = JSON.parse(localStorage.getItem('addToCart'));
let datafromLS;
let sum = [];
const cartDataServer = async () => {
    let res = await fetch(`http://localhost:3000/cartProducts`)
    data = await res.json();
    datafromLS = data
    //console.log(datafromLS)
    append(datafromLS)
    datafromLS.forEach((el) => {
        sum.push(+el.price)
    })

    let total = document.getElementById('total')
    total.innerText = grandtotal(sum).toFixed(2);
}
cartDataServer()
// console.log(datafromLS)
//console.log(sum)


let store = document.getElementById('store');

let nsum = grandtotal(sum);
let total = document.getElementById('total')
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
            removeFun(el.id);
        })

        div.append(img, title, price, div2, subtotal, remove);
        store.append(div);
    })

}
// append(datafromLS);

function grandtotal(s) {
    let nsum = 0;
    for (let i = 0; i < s.length; i++) {
        nsum += s[i];
    }
    return nsum;
}


async function removeFun(i) {
    console.log(i)

    let res = await fetch(`http://localhost:3000/cartProducts/${i}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    let data = await res.json();
    console.log(data);


    //let data = JSON.parse(localStorage.getItem("addToCart")) || [];
    //data.splice(i, 1);
    //localStorage.setItem("addToCart", JSON.stringify(data));
    // append(data);
    // window.location.reload();
}