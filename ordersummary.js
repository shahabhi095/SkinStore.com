//header & footer
let cartArr = JSON.parse(localStorage.getItem("orderplaced")) || [];


import { header, footer } from "./component.js";
document.getElementById("header").innerHTML = header();
document.getElementById("footer").innerHTML = footer();

// get address from server

let getorderdetails = async () => {
  let res = await fetch("https://skincare03.onrender.com/address");
  let data = await res.json();
  console.log(data);
  appendAddress(data);
};
getorderdetails();

// append address from server

let appendAddress = (data) => {
  let n = data.length - 1;
  document.getElementById("client_name").innerText = data[n].fullname;
  document.getElementById("client_house_no").innerText = data[n].houseno;
  document.getElementById("client_house_area1").innerText = data[n].address1;
  document.getElementById("client_house_area2").innerText = data[n].address2;
  document.getElementById("city").innerText = data[n].city;
  document.getElementById("state").innerText = data[n].state;
  document.getElementById("country").innerText = data[n].country;
  document.getElementById(
    "client_mobile_no"
  ).innerText = `Mobile No. ${data[n].mobileno}`;
  document.getElementById(
    "order_no"
  ).innerText = `Order No.: ${data[n].orderno}`;
};

// sample data from db.jspn
// sample data from db.jspn
// sample data from db.jspn
// sample data from db.jspn
// let x = async () => {
//   let res = await fetch("https://skincare03.onrender.com/productsData");
//   let data = await res.json();
//   // console.log(data);
//   order_data(data);
// };
// x();

// let order_data = (data) => {
//   let arr = [];
//   for (i = 3; i < 5; i++) {
//     arr.push(data[i]);
//   }
//   // console.log(arr);
//   checkoutItems(arr);
// };

// let x = async () => {
//   let res = await fetch("https://skincare03.onrender.com/cartProducts");
//   let data = await res.json();
//   // console.log(data);
//   // order_data(data);
//   checkoutItems(data);
// };
// x();
// get data from cart page
let count = 0;
let total = 0;
let checkoutItems = (data) => {
let order_summary_products = document.getElementById("order_summary_products");
order_summary_products.innerHTML = null;
  data.forEach((el,i) => {
    count++;

    let card = document.createElement("div");
    card.className = "card";

    let img_div = document.createElement("div");
    img_div.className = "img_div";
    let img = document.createElement("img");
    img.src = el.image1;

    let name_div = document.createElement("div");
    name_div.className = "name_div";
    let name = document.createElement("p");
    name.innerText = el.name;

    let price_div = document.createElement("div");
    price_div.className = " price_div";
    let price = document.createElement("p");
    price.innerText = el.price;
    total += Number(el.price);

    let cancel_div = document.createElement("div");
    let cancel_btn = document.createElement("button");
    cancel_div.className = "cancel_btn";
    cancel_btn.innerText = "Cancel";
    //for removing
    cancel_btn.onclick = () => {
      removeFun(i);
    };

    cancel_div.append(cancel_btn);
    img_div.append(img);
    name_div.append(name);
    price_div.append(price);
    card.append(img_div, name_div, price_div, cancel_div);
    document.getElementById("order_summary_products").append(card);
  });
  document.getElementById("total_item").innerHTML = `Total Item: ${count}`;
  document.getElementById("total_price").innerHTML = `Total : ${total}`;
};

//
checkoutItems(cartArr);
// document.getElementById("btn6").onclick = async ()=>{

//   try{
//     let res = await fetch ("")

//   }

// }

//delete order or cencel order

function removeFun(i) {
  // let res = await fetch(`https://skincare03.onrender.com/cartProducts/${i}`, {
  //   method: "DELETE",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  //let data = await res.json();
     cartArr = JSON.parse(localStorage.getItem("orderplaced")) || [];
     cartArr.splice(i, 1);
     localStorage.setItem("orderplaced", JSON.stringify(cartArr));
    checkoutItems(cartArr);
     window.location.reload();
}
// const ItemsInCart = async () => {
//   try {
//     let res = await fetch(`https://skincare03.onrender.com/cartProducts`);
//     let data = await res.json();
//     let cartNumber = document.getElementById("cart");
//     cartNumber.innerText = data.length;
//     console.log(data);
//   } catch (error) {
//     console.log("error find", error);
//   }
// };
// ItemsInCart();
