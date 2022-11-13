const header =()=>{
    return `<header>
        
    <nav>
        <div id="nav1">
            
            <a href="index.html"><img src="./Dani MartinezEdited.png" alt=""></a>
            
           <div id="srchbox"><input type="text" id="srch" placeholder="Search">
            <i id="sricon" class="fa-solid fa-magnifying-glass"></i>
        
        </div> 

           <div >

            <div id="acnt"> <a href=""><h3><i class="fa-regular fa-user"></i> Account</h3></a>
            
                <div class="account_menu1">
                    <ul>
                        <div class="btn2"> <a href="login.html"><li> <button id="lgn" >LOGIN</button></li> </a>
                           <a href="register.html"> <li><button>REGISTER</button></a> 
                        </div>
    
                 
                        
                        </li>
                        <li><a href="#">Wish List</a></li>
                        <li><a href="#">Your Order</a></li>
                        <li><a href="#">Your Referrals</a></li>
                    </ul>
                </div>
            </div>
           
           
            
        
        </div>


        <div class="cartnumber">
            <div id="cart">
            
            </div>
            <a href="cart.html"><h3> <i class="fa-solid fa-cart-shopping"></i>Cart</h3></a>
        </div>
           
            
           
            
         
        </div>
        
        <ul>
           <li> <a href="">Brands</a> </li>
           <li> <a href="">Holiday</a> 
            <div class="dropdown_menu">
                <ul>
                    <li><a href="#">SkinCare's Holiday</a></li>
                    <li><a href="#">Shop All Holiday</a>
                    
                    </li>
                    <li><a href="#">Holiday Edits</a></li>
                </ul>
            </div>
        
        </li>
           <li> <a href="">Sale</a>
        
            <div class="dropdown_menu">
                <ul>
                    <li><a href="#">Clearance</a></li>
                    <li><a href="#">Gifts</a>
                    
                    </li>
                    <li><a href="#">Coupons</a></li>
                    <li><a href="#">Discounts</a></li>
                    <li><a href="#">Offers</a></li>
                </ul>
            </div>
        
        </li>


           <li> <a href="">skinCare</a> 
        
            <div class="dropdown_menu">
                <ul>
                    <li><a href="#">Serum</a></li>
                    <li><a href="#">Masks</a>
                    
                    </li>
                    <li><a href="#">Gels</a></li>
                    <li><a href="#">Moustiorisers</a></li>
                    <li><a href="#">Scrubs</a></li>
                    <li><a href="#">Face Wash</a></li>
                </ul>
            </div>
        </li>
           <li> <a href="">Hair</a> </li>
           <li> <a href="">Makup</a> </li>
           <li> <a href="">Bath & Beauty</a> </li>
           <li> <a href="">Fregrance</a>

            <div class="dropdown_menu">
                <ul>
                    <li><a href="#">Personal Fregrance</a></li>
                    <li><a href="#">Home Fregrance</a></li>
                    <li><a href="#">Top Brands</a></li>
                    <li><a href="#">Top Catagory</a></li>
                </ul>
                </div>
        
        </li>
           <li> <a href="">Self-Care</a> 
        
            <div class="dropdown_menu">
                <ul>
                    <li><a href="#">Skin</a></li>
                    <li><a href="#">Hair</a></li>
                    <li><a href="#">Immunity Boosters</a></li>
                    <li><a href="#">Devices</a></li>
                    <li><a href="#">Tablets</a></li>
                </ul>
                </div>
         
        </li>
           <li> <a href="">Tools</a> </li>
           <li> <a href="">News&Trending</a>
        
            <div class="dropdown_menu">
                <ul>
                    <li><a href="#">New Skin care</a></li>
                    <li><a href="#">New Hair</a></li>
                    <li><a href="#">New Cosmatics</a></li>
                    <li><a href="#">New Devices</a></li>
                    <li><a href="#">New Tablets</a></li>
                </ul>
                </div>
        
        </li>
           <li> <a href="">Build & Beauty</a> </li>
           <li> <a href="">Blog</a> </li>
           
           
        </ul>

    </nav>
</header>

`;
}

const footer =()=>{
    return `<footer>
    <hr id="line">
    <div class="t">
        <h4>Sign up to our email list and receive 20% off your next order</h4>
        <h4>Connect with us</h4>
    </div>
    <div class="img">

     <div id="fspbtn">

     <a href="register.html"><button><p>SIGN UP</p></button></a> 
     </div>
        <div id="sslogo">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-pinterest"></i>
            <i class="fa-brands fa-snapchat"></i>
        </div>
    </div>
    <div class="container">
        <div>
            <hr id="l">
            <h4>Help & Information</h4>
            <p><span><i class="fa-solid fa-phone"></i></span> Customer Service</p>
            <p><span><i class="fa-solid fa-truck"></i></span> Delivery Information</p>
            <p><span><i class="fa-solid fa-arrow-rotate-left"></i></span> Returns & Refunds</p>
            <p><span><i class="fa-solid fa-question"></i></span> Help Center</p>
            <p><span><i class="fa-solid fa-location-crosshairs"></i></span> Track my order</p>
            <p>Accessibility</p>
            <p><span><i class="fa-solid fa-cookie"></i></span> Cookie Settings</p>
        </div>
        <div>
            <hr id="l">
            <h4>About SkinStore</h4>
            <p>Key Workers Discount</p>
            <p>About Us</p>
            <p>Affiliate Program</p>
            <p>Brand Directory</p>
            <p>Coupon Codes</p>
            <p>Refer A Friend</p>
            <p>Student Discount</p>
            <p>Join SkinStore Experts</p>
        </div>
        <div>
            <hr id="l">
            <h4>Legal</h4>
            <p>Cookie Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Modern Slavery Statements</p>
        </div>
        <div>
            <hr id="l">
            <h4>How To Contact Us</h4>
            <p>Message Us</p>
            <p>Free Beauty Consultations</p>
        </div>
    </div>
    <hr id="line">
    <div class="last">
        <div>
            <h1>THG</h1>
            <p>2022 &copy; The Hut.com Ltd.</p>
            <a href="./create.html"><button id="prdts" >Add Products</button></a>
        </div>
        <div>
            <h4>Pay securely with</h4>
            <img src="https://www.orderuganda.com/images/paypal1.png" alt="">
        </div>
    </div>
    </footer>`;
}

export{header , footer}

