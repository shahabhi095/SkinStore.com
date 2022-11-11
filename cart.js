
let store = document.getElementById('store');

let sum = 0;

const append = (data) => {

    store.innerHTML = null;
    data.forEach((el, i) => {
        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = el.image1;

        let title = document.createElement('p');
        title.innerText = el.name;

        let price = document.createElement('h3');
        let s = document.createElement('span');
        s.innerText = '$';
        price.innerHTML = s;
        price.innerText = el.price;


        let div2 = document.createElement('div');

        let sub = document.createElement('span');
        sub.innerHTML = '<i class="fa-solid fa-minus"></i>';
        sub.onclick = () => {
            if (qty.innerText == 1) {
                return;
            } else {
                qty.innerText--;
                subtotal.innerText = Number(price.innerText) * qty.innerText;
                sum += Number(subtotal.innerText);
            }
        }

        let qty = document.createElement('span');
        qty.innerText = 1;

        let plus = document.createElement('span');
        plus.innerHTML = '<i class="fa-solid fa-plus"></i>';
        plus.onclick = () => {
            qty.innerText++;
            subtotal.innerText = Number(price.innerText) * qty.innerText;
            sum += Number(subtotal.innerText);
        }

        div2.append(sub, qty, plus);

        let subtotal = document.createElement('h3');
        subtotal.innerText = price.innerText;
        // sum += Number(subtotal.innerText);

        let remove = document.createElement('span');
        remove.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        remove.addEventListener('click', () => {
            removeFun(i);
        })

        div.append(img, title, price, div2, subtotal, remove);
        store.append(div);
    })

}

let datafromLS = JSON.parse(localStorage.getItem('addToCart'));
append(datafromLS);


let total = document.getElementById('total')
total.innerText = + sum;

function removeFun(i) {
    console.log(i);
}