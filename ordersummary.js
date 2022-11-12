// get address from server

let getorderdetails = async () => {
  let res = await fetch("http://localhost:3000/address");
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
let x = async () => {
  let res = await fetch("http://localhost:3000/productsData");
  let data = await res.json();
  // console.log(data);
  order_data(data);
};
x();

let order_data = (data) => {
  let arr = [];
  for (i = 3; i < 5; i++) {
    arr.push(data[i]);
  }
  // console.log(arr);
  checkoutItems(arr);
};
// get data from cart page
let count = 0;
let total = 0;
let checkoutItems = (data) => {
  data.forEach((el) => {
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

    img_div.append(img);
    name_div.append(name);
    price_div.append(price);
    card.append(img_div, name_div, price_div);
    document.getElementById("order_summary_products").append(card);
  });
  document.getElementById("total_item").innerHTML = `Total Item: ${count}`;
  document.getElementById("total_price").innerHTML = `Total : ${total}`;
};

//

// document.getElementById("btn6").onclick = async ()=>{

//   try{
//     let res = await fetch ("")

//   }

// }
