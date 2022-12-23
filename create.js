// api 840c70324c92713a98f65184eef682b5

let create_btn = document.getElementById('create_btn')
create_btn.onclick = () => {
  createPost()
}

// let inp_image = document.getElementById('image1')
// inp_image.onchange = () => {
//     handleImage()
// }


const createPost = async () => {

  let id = document.getElementById('id').value;
  let image1 = document.getElementById('image1').value;
  let image2 = document.getElementById('image2').value;
  let name = document.getElementById('name').value;
  let rating = document.getElementById('rating').value;
  let price = document.getElementById('price').value;
  let brand = document.getElementById('brand').value;
  let brand_imag = document.getElementById("brand_imag").value;
  let category = document.getElementById('category').value;

  let send_this_data = {
    id,
    image1,
    image2,
    name,
    rating,
    price,
    brand,
    brand_imag,
    category

  }

  let res = await fetch(`https://skincare03.onrender.com/productsData`, {
    method: "POST",
    body: JSON.stringify(send_this_data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await res.json()
  console.log('data', data);

}
