import{header,footer} from './component.js';
document.getElementById("header").innerHTML=header();
document.getElementById("footer").innerHTML=footer();







let carousel_div=document.getElementById("carousel");


function carousel(){
   
let images=[ `https://static.thcdn.com/images/xlarge/webp/widgets/121-us/55/Shot6-1180x450-095455.jpeg` ,

    `https://static.thcdn.com/images/xlarge/webp/widgets/121-us/58/SS-Batching-Christmas-Homepage_Banner-EG1180x450_copy_2-060058.jpg` ,

    `https://static.thcdn.com/images/xlarge/webp/widgets/121-us/10/original-New_Project_%283%29-085610.jpg`,

    `https://static.thcdn.com/images/xlarge/webp/widgets/121-us/17/original-1024-STDCRE-42756-SS-WC-Cyber-Waitlist-Site-Assets-1180x450-040317.jpg`
    ]

    let imgElement=document.createElement('img');

    imgElement.src=images[0]
    carousel_div.append(imgElement)

    let i=1;

    setInterval(function(){
        if(i===images.length){
            i=0;
        }
     

    imgElement.src=images[i];
    carousel_div.append(imgElement)
    i++;

    }, 4000);
}

carousel();

// let HomeproductsData =[ 
    
//     {
//     id:"a1",
//   image1: "https://static.thcdn.com/images/small/webp/widgets/121-us/39/17_1009_CucumberExtract_US17_1009_CucumberExtract_US-014239.jpg",
//   name: "Corrective Gel",
//   rating: 4.5,
//   price:  300,
//   brand: "SkinCeuticals ",
//   categories:"SkinCare"
// },
//     {
//     id:"a2",
//   image1: "https://static.thcdn.com/images/small/webp/widgets/121-us/39/0712-STDCRE-38046-SS-MH-Photography-July-22-REMAINING-BATCHING-Shot8-600x600-063639.png",
//   name: "Super Food",
//   rating: 4,
//   price:  350,
//   brand: "Elmis ",
//   categories:"Makeup"
// },
//     {
//     id:"a3",
//   image1: "https://static.thcdn.com/images/small/webp/widgets/121-us/27/SkinStore_Q4_Photography_2022_-_October_-_THG0035163_-_BATCHING_shot8600x600-090227.jpg",
//   name: "Cream",
//   rating: 3,
//   price:  200,
//   brand: "Obagi Medicals ",
//   categories:"HairCare"
// },
//     {
//     id:"a4",
//   image1: "https://static.thcdn.com/images/small/webp/widgets/121-us/10/0224-STDCRE-32153-SS-BME-Skinstore-March-2022-Photography-Batching-Shot_14-600x600-091010.jpg",
//   name: "Preparation Gel",
//   rating: 5,
//   price:  500,
//   brand: "Tripolor",
//   categories:"SkinCare"
// },
//     {
//     id:"a5",
//   image1: "https://static.thcdn.com/images/small/webp/widgets/121-us/42/best_selling-064442.jpg",
//   name: "Firm Riche",
//   rating: 3,
//   price:  100,
//   brand: "Neocutis",
//   categories:"Makeup"
// },
//     {
//     id:"a6",
//   image1: "https://static.thcdn.com/images/small/webp/widgets/121-us/54/original-original-original-500x500-085431-083903-064454.jpg",
//   name: "Lumere",
//   rating: 1,
//   price:  800,
//   brand: "Robin",
//   categories:"HairCare"
// },
//     {
//     id:"a7",
//   image1: "https://static.thcdn.com/images/small/webp/widgets/121-us/28/original-Screenshot_2022-03-07_141739-065628.png",
//   name: "Cleanser",
//   rating: 5.5,
//   price:  250,
//   brand: "Estee louder",
//   categories:"selfCare"
// },
//     {
//     id:"a8",
//   image1: "https://static.thcdn.com/images/small/webp/widgets/121-us/34/original-dhc.ss-061734.jpg",
//   name: "Face Wash",
//   rating: 5,
//   price:  600,
//   brand: "DHC",
//   categories:"Bath&Body"
// },
//     {
//     id:"a9",
//   image1: "https://static.thcdn.com/images/small/webp/widgets/121-us/23/original-perricone.ss-013423.jpg",
//   name: "Hair Gel",
//   rating: 3.8,
//   price:  180,
//   brand: "Periccon MD",
//   categories:"SelfCare"
// },
// ]



console.log()

let searchBtn = document.getElementById("sricon");
//search functionality
searchBtn.onclick = function () {
  SearchProduct(searchBtn);
};

const SearchProduct = async () => {
  document.getElementById("shopCat").innerHTML =null;
  document.getElementById("carousel").innerHTML=null;
  let SearchValue = document.getElementById("srch").value;
  try {
    let res = await fetch(
      `https://skincare03.onrender.com/productsData?q=${SearchValue}`
    );
    let data = await res.json();
    console.log(data);
    appendData(data);
  } catch (error) {
    console.log("Searched Item not Found", error);
  }
};

const pData =async()=>{
try{
let res = await fetch(` https://skincare03.onrender.com/HomeproductsData`)
let data = await res.json()
let arrmin=[]
for(let i=0;i<9;i++){
  arrmin.push(data[i]);
}
appendData(arrmin);


}
catch(err){
  console.log(err)
}

}
pData()
const appendData =(arr)=>{

    let productsInfo=document.getElementById("details");
productsInfo.innerHTML =null;
    arr.forEach(function(el){
     let div= document.createElement('div');

     let productImg = document.createElement('img');
     productImg.src=el.image1;

     let productName=document.createElement('h2');
     productName.innerText=el.name;

     let brandName=document.createElement('h3');
     brandName.innerText=el.brand;

     let productCat=document.createElement('p');
     productCat.innerText=el.categories;

     let productRatings=document.createElement('p')
     productRatings.innerText=`Ratings: ${el.rating}`

     let prices = document.createElement('p');
     prices.innerText= `$${el.price}` ;

     let btn1 = document.createElement('button');
     btn1.innerText="Shop Now"
     btn1.className = "ShopNowBtn"
     btn1.addEventListener("click", function() {
      
      mybtn1(el) 
    
    } )

    //  let btn =document.createElement('button');
    //  btn.innerText="Add to Cart"
    //  btn.addEventListener("click",addCart);
     


     div.append(productImg,productName,brandName,productCat,productRatings,prices,btn1)

     productsInfo.append(div);
    })
}
// appendData();

let cartArr=JSON.parse(localStorage.getItem("cart_items"))||[]

let cartNumber=document.getElementById("cart")
cartNumber.innerText=cartArr.length


function mybtn1(el){
  cartNumber.innerText = null;
cartArr.push(el);

localStorage.setItem("cart_items", JSON.stringify(cartArr));
cartNumber.innerText = cartArr.length;
window.location.href = "./cart.html"
}

//cartProducts;
// console.log(cartArr);
//const mybtn1 = (el)
// let cartNumber=document.getElementById("cart")
// cartNumber.innerText=cartArr.length

// const mybtn1 = async(el)=>{
//   // let cartArr=JSON.parse(localStorage.getItem("cart_items"))||[]
//   // cartArr.push(el);
//   // localStorage.setItem("cart_items",JSON.stringify(cartArr))
//   // console.log(cartArr);
//   let res = await fetch(`https://skincare03.onrender.com/cartProducts`, {
//     method: "POST",
//     body: JSON.stringify(el),
//     headers: {
//       "Content-Type": " application/json",
//     },
//   });
//     let data = await res.json();
//     console.log("data", data);
//      window.location.href = "products.html";
//   }

 

// window.onload = () =>{

//   // let cartArr=JSON.parse(localStorage.getItem("cart_items"))||[];
//   // let cartNumber=document.getElementById("cart");
// //cartNumber.innerText=cartArr.length;
// }


// const ItemsInCart = async ()=>{
//   try{
// let res = await fetch(`https://skincare03.onrender.com/cartProducts`);
// let data = await res.json();
// let cartNumber = document.getElementById("cart");
// cartNumber.innerText = data.length;
// console.log(data)
//   }catch(error){
//     console.log(error)
//   }
// }
// ItemsInCart();


