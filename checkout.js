let x = async () => {
  let res = await fetch("http://localhost:3000/productsData");
  let data = await res.json();
  // console.log(data);
  order_data(data);
};
x();

let order_data = (data) => {
  let arr = [];
  for (i = 3; i < 10; i++) {
    arr.push(data[i]);
  }
  // console.log(arr);
  append_orderr_summary(arr);
};

// append data in order box (right)
let count = 0;
let total = 0;
let append_orderr_summary = (data) => {
  data.forEach((el) => {
    count++;
    let order_container = document.createElement("div");
    order_container.id = "order_container";

    let img_div = document.createElement("div");
    img_div.id = "img_div";
    let img = document.createElement("img");
    img.src = el.image1;

    let descripton_div = document.createElement("div");
    descripton_div.id = "descripton_div";

    let name = document.createElement("p");
    name.innerText = el.Name;

    let quantity = document.createElement("p");
    quantity.innerText = `Quantity:${1}`;

    let price = document.createElement("p");
    price.innerText = `$ ${el.price}`;
    total += el.price;

    img_div.append(img);
    descripton_div.append(name, quantity, price);
    order_container.append(img_div, descripton_div);
    document.getElementById("order_data_card").append(order_container);
  });
  other_order_detail();
  // console.log(count);
  console.log(total);
};

let other_order_detail = () => {
  let x = Math.floor(Math.random() * 100001);
  // console.log(x);
  document.getElementById("order_number").innerText = `Order Number: ${x}`;
  document.getElementById("item_no").innerText = `${count} items`;
  document.getElementById("order_pay").innerText = `$${total + 15}`;
};

// popup
let popup = () => {
  let checkout_btn = document.getElementById("checkout_submit");
  checkout_btn.onclick = () => {
    // console.log("hi");
    window.location.replace = "checkout.html";
    let popup = document.getElementById("popup");
    popup.classList.add("open_popup");
  };
};
popup();
let close_popup = () => {
  let close = document.getElementById("close_popup");
  close.onclick = () => {
    let popup = document.getElementById("popup");
    popup.classList.remove("open_popup");
  };
};
close_popup();
