// import {navbar} from "./navbar.js"

// let nav_div = document.getElementById("navbar")
// nav_div.innerHTML = navbar()
import { header, footer } from "./component.js";
document.getElementById("header").innerHTML = header();
document.getElementById("footer").innerHTML = footer();

//Read More less button
var moreText = document.getElementById("more");
moreText.style.display = "none";

let readMoreLess_btn = document.getElementById("myBtn");
readMoreLess_btn.onclick = () => {
  ReadMoreLess();
};
dots.style.display = "none";
const ReadMoreLess = () => {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
    btnText.style = "border: 2px solid black; width:100%;  text-align: left;";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
    btnText.style = "border: 2px solid black;";
    btnText.style = "border: 2px solid black; width:100%;  text-align: left;";
  }
};

let InitialData;

let productsData = [
  {
    id: "1",
    image1:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13516546-2844930071318699.jpg",
    image2:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13516546-1514932677894190.jpg",
    name: "Brightening Treatment 1 fl. oz",
    rating: 4.5,
    price: 105.0,
    brand: "SkinCeuticals",
    brand_imag:
      "https://s1.thcdn.com/design-assets/images/logos/shared-brands/colour/skinceuticals.gif",
    categories: "SkinCeuticals Cleansers",
  },
  {
    id: "2",
    image1:
      "https://static.thcdn.com/images/small/webp//productimg/130/130/11289627-5464870985854209.jpg",
    image2:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289627-6904866614636649.jpg",
    brand_imag:
      "https://s1.thcdn.com/design-assets/images/logos/shared-brands/colour/skinceuticals.gif",
    name: "SkinCeuticals Physical Eye UV Defense SPF 50",
    rating: 4,
    price: 30.0,
    brand: "SkinCeuticals",
    categories: "SkinCeuticals Cleansers",
  },
  {
    id: "3",
    image1:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289609-1174892770940184.jpg",
    image2:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289609-8744892770898772.jpg",
    brand_imag:
      "https://s1.thcdn.com/design-assets/images/logos/shared-brands/colour/skinceuticals.gif",
    name: "SkinCeuticals C E Ferulic with 15% L-Ascorbic Acid Vitamin C Serum 30ml",
    rating: 3.4,
    price: 169.0,
    brand: "SkinCeuticals",
    categories: "SkinCeuticals Cleansers",
  },
  {
    id: "4",
    image1:
      "https://static.thcdn.com/images/small/webp//productimg/130/130/11294635-1994892768429109.jpg",
    image2:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11294635-6514892768465172.jpg",
    brand_imag:
      "https://s1.thcdn.com/design-assets/images/logos/shared-brands/colour/skinceuticals.gif",
    name: "SkinCeuticals A.G.E. Interrupter",
    rating: 4.2,
    price: 168.0,
    brand: "SkinCeuticals",
    categories: "SkinCeuticals Cleansers",
  },
  {
    id: "5",
    image1:
      "https://static.thcdn.com/images/small/webp//productimg/130/130/12635425-2054893266456808.jpg",
    image2:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12635425-1514884719372601.jpg",
    brand_imag:
      "https://s1.thcdn.com/design-assets/images/logos/shared-brands/colour/christopherobin.gif",
    name: "Hydrating Leave-in Mist with Aloe Vera 150ml",
    rating: 4.6,
    price: 27.3,
    brand: "Christophe Robin",
    categories: "Hair Cleansers",
  },
];

let A = 0;
const productData = async () => {
  try {
    let response = await fetch("https://skincare03.onrender.com/productsData");

    let data = await response.json();
    A = data;
    DisplayTable(data);
    //console.log(data);
  } catch (error) {
    console.log(error);
  }
};

console.log("datafind", A);
productData();

// function for Appending data to container//

const DisplayTable = (Array) => {
  let total_items = document.getElementById("total_items");
  total_items.innerText = Array.length + " " + "results";
  let table = document.getElementById("product_grid");
  table.innerHTML = null;

  Array.forEach((el) => {
    // div to append data with all details
    let div = document.createElement("div");

    div.className = "product_details";
    // dive to store both image

    let Image_div = document.createElement("div");
    Image_div.className = "product_img";

    // first image which will show on loading of website
    let Image1 = document.createElement("img");
    Image1.src = el.image1;
    Image1.className = "Image1";

    // second image which will shhow when hover
    let Image2 = document.createElement("img");
    Image2.src = el.image2;
    Image2.className = "Image2";

    // append both image in image div
    Image_div.append(Image1, Image2);

    let div_name = document.createElement("div");
    div_name.className = "NmaeDiv";

    let Name = document.createElement("p");
    Name.innerHTML = el.name;
    div_name.append(Name);

    //gift pop-up option
    let Gift = document.createElement("p");
    Gift.innerHTML = "Select your Gift";
    Gift.className = "Gift_option";
    Gift.onclick = () => {
      ShowPopUp();
    };

    //rating
    let Rating = document.createElement("p");
    Rating.innerHTML = "rating:" + " " + el.rating;
    Rating.className = "RatingA";
    //price
    let Price = document.createElement("h3");
    Price.className = "Price";
    Price.innerText = "MSRP:" + " " + "$" + el.price;

    //buy button
    let Quick_Buy_btn = document.createElement("button");
    Quick_Buy_btn.innerHTML = "QUICK BUY";
    Quick_Buy_btn.className = "Buy_btn";
    // buy button onclick
    Quick_Buy_btn.onclick = function () {
      BuyProduct(el);
    };
    // appending all data to details div
    div.append(Image_div, div_name, Gift, Rating, Price, Quick_Buy_btn);

    table.append(div);
  });
};

//for filter of data from navbar
let filter = document.getElementById("filter");
filter.addEventListener("click", function () {
  filterData();
});
const filterData = async () => {
  try {
    let response = await fetch(
      `https://skincare03.onrender.com/productsData?categories=Cleansers`
    );
    let data = await response.json();

    DisplayTable(data);
  } catch (error) {
    console.log(error);
  }
};

// function for sort by relevence
let SortData = document.getElementById("select");

sortBy.onclick = function () {
  SortByRelevance();
};

const SortByRelevance = async () => {
  let value = SortData.value;

  if (value == "") {
    let res = await fetch(`https://skincare03.onrender.com/productsData`);
    let data = await res.json();
    DisplayTable(data);
  } else if (value == "Popularity") {
    let res = await fetch(
      `https://skincare03.onrender.com/productsData?_sort=rating&_order=desc`
    );
    let data = await res.json();
    DisplayTable(data);
  } else if (value == "Lowtohigh") {
    let res = await fetch(
      `https://skincare03.onrender.com/productsData?_sort=price&_order=asc`
    );
    let data = await res.json();
    DisplayTable(data);
  } else if (value == "hightoLow") {
    let res = await fetch(
      `https://skincare03.onrender.com/productsData?_sort=price&_order=desc`
    );
    let data = await res.json();
    DisplayTable(data);
  } else if (value == "A-Z") {
    let res = await fetch(
      `https://skincare03.onrender.com/productsData?_sort=name&_order=asc`
    );
    let data = await res.json();
    DisplayTable(data);
  } else if (value == "Z-A") {
    let res = await fetch(
      `https://skincare03.onrender.com/productsData?_sort=name&_order=desc`
    );
    let data = await res.json();
    DisplayTable(data);
  }
};

// Filter from check Box
// 1. For product type
let CheckBox = document.getElementsByClassName("ABC");
let count = 0;
for (let i = 0; i < CheckBox.length; i++) {
  CheckBox[i].onchange = function () {
    let value1 = CheckBox[i].value;
    console.log(value1);

    if (CheckBox[i].checked) {
      FilterFromCheckBox(value1);
      CheckBox[i].style = "background-color: black;";
    }
  };
}

let NewArr = [];
const FilterFromCheckBox = async (value1) => {
  let clearecheck = document.getElementById("clearecheck");
  clearecheck.innerHTML = null;
  let clearbtn = document.createElement("button");
  clearbtn.className = "clearbtn";
  clearecheck.append(clearbtn);
  clearbtn.innerText = "Clear Filter";
  clearbtn.onclick = () => {
    ReloadPage();
  };

  try {
    let response = await fetch(
      `https://skincare03.onrender.com/productsData?categories=${value1}`
    );
    let data = await response.json();
    for (let j = 0; j < data.length; j++) {
      NewArr.push(data[j]);
    }
    console.log(value1);
    console.log(NewArr);
    DisplayTable(NewArr);
  } catch (error) {
    console.log("Product not Available", error);
  }
};

//this function will call when buy button will be clicked

// const BuyProduct = async (el) => {
//   // let cartArr=JSON.parse(localStorage.getItem("cart_items"))||[]
//   // cartArr.push(el);
//   // localStorage.setItem("cart_items",JSON.stringify(cartArr))

//   // console.log(cartArr);
//   let res = await fetch(`https://skincare03.onrender.com/cartProducts`, {
//     method: "POST",
//     body: JSON.stringify(el),
//     //hello
//     headers: {
//       "Content-Type": " application/json",
//     },
//   });

//   let data = await res.json();
//   console.log("data", data);
//   window.location.href = "products.html";
// };

// // claer checked box;
// function ReloadPage() {
//   window.location.reload();
// }
let cartArr = JSON.parse(localStorage.getItem("cart_items")) || [];
let cartNumber = document.getElementById("cart");
cartNumber.innerText = cartArr.length;

const BuyProduct = (el)=>{
cartArr.push(el);
localStorage.setItem("cart_items", JSON.stringify(cartArr));
cartNumber.innerText = cartArr.length;
window.location.reload();
}

// display pop up on click on select your gift

const ShowPopUp = () => {
  document.querySelector(".bg-modal").style.display = "flex";
};

//close fumction for closing popup
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
});

// when click on shop now button of popup it shoul go to products page and heading should be updated with discount
document.getElementById("shop-now").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
  let heading = document.getElementById("heading");
  heading.innerText = null;
  console.log(heading);
  console.log(heading);
  heading.innerHTML = "15% off with code SS15";
  // window.location.href = "products.html";
});

//search functionality
let searchBtn = document.getElementById("sricon");

searchBtn.onclick = function () {
  SearchProduct();
};

const SearchProduct = async () => {
  let SearchValue = document.getElementById("srch").value;
  try {
    let res = await fetch(
      `https://skincare03.onrender.com/productsData?q=${SearchValue}`
    );
    let data = await res.json();
    DisplayTable(data);
  } catch (error) {
    console.log("Searched Item not Found", error);
  }
};

// import { footer } from "./footer.js";

// let footer_div = document.getElementById("footer");
// footer_div.innerHTML = footer();
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

// let FindFromNav = document.getElementsByClassName("FindProductA");

// let count1 = 0;
// for (let i = 0; i < FindFromNav.length; i++) {
//   FindFromNav[i].onclick = function () {
//     let value2 = FindFromNav[i].innerText;
//     console.log("value2",value2);

//     // if (CheckBox[i].checked) {
//     //   FilterFromCheckBox(value1);
//     //   CheckBox[i].style = "background-color: black;";
//     // }
//   };
// }
