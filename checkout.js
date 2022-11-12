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
    price.innerText = el.price;

    total += Number(el.price);

    img_div.append(img);
    descripton_div.append(name, quantity, price);
    order_container.append(img_div, descripton_div);
    document.getElementById("order_data_card").append(order_container);
  });
  other_order_detail();
  // console.log(count);
  // console.log(total);
};

let other_order_detail = () => {
  let x = Math.floor(Math.random() * 100001);
  // console.log(x);
  document.getElementById("order_number").innerText = `Order Number: ${x}`;
  document.getElementById("item_no").innerText = `${count} items`;
  document.getElementById("order_pay").innerText = `$${total + 15}`;
};

// popup;

let popup = () => {
  let checkout_btn = document.getElementById("checkout_submit");
  checkout_btn.onclick = () => {
    // console.log("hi");
    GetAddress();

    // window.location.replace = "checkout.html";
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

// address data to object
let GetAddress = () => {
  let country = document.getElementById("country").value;
  let f = document.getElementById("full_name").value;
  let z = document.getElementById("zipcode").value;
  let cn = document.getElementById("company_name").value;
  let add1 = document.getElementById("address1").value;
  let add2 = document.getElementById("address2").value;
  let hn = document.getElementById("house_no").value;
  let c = document.getElementById("city").value;
  let s = document.getElementById("state").value;
  let mn = document.getElementById("mobile_no").value;

  let x = Math.floor(Math.random() * 100001);

  if (
    country == "" ||
    f == "" ||
    z == "" ||
    add1 == "" ||
    add2 == "" ||
    hn == "" ||
    c == "" ||
    s == "" ||
    mn == ""
  ) {
    alert("Please Fill required areas");
    // window.location.reload;
  } else {
    let obj = new address(country, f, z, cn, add1, add2, hn, c, s, mn, x);
    send(obj);
  }
};

function address(country, f, z, cn, add1, add2, hn, c, s, mn, x) {
  this.country = country;
  this.fullname = f;
  this.zipcode = z;
  this.companyname = cn;
  this.address1 = add1;
  this.address2 = add2;
  this.houseno = hn;
  this.city = c;
  this.state = s;
  this.mobileno = mn;
  this.orderno = x;
}

// data send to server

let send = async (obj) => {
  let res = await fetch("http://localhost:3000/address", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: { "Content-Type": "application/json" },
  });
};
