        //Display product
        const prodetails = document.getElementById("prodetails")
        localStorage.setItem('listProduct', JSON.stringify(listProduct))
        const u = JSON.parse(localStorage.getItem('listProduct'))

        //Get 3 last char URL
        var res = ''
        function getUrlID(){
            var urlID = window.location.href;
            res = urlID.slice(-3)
        }
        getUrlID()

        var productDetail = u.map((item) =>{
            var d = ``
            if(item.id == res){
                return d +=  `
                    <div class="single-pro-image">
                        <img src="${item.imageMain}" width="100%" id="MainImg" alt="">
                        <div class="small-img-group d-flex justify-content-between">
                            <div class="small-img-col">
                                <img src="${item.images.image1}" width="100%" class="small-img" alt="">
                            </div>
                            <div class="small-img-col">
                                <img src="${item.images.image2}" width="100%" class="small-img" alt="">
                            </div>
                            <div class="small-img-col">
                                <img src="${item.images.image3}" width="100%" class="small-img" alt="">
                            </div>
                            <div class="small-img-col">
                                <img src="${item.images.image4}" width="100%" class="small-img" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="single-pro-details">
                        <h6>${item.brand}</h6>
                        <h4 class="product-name">${item.name}</h4>
                        <h2 class="product-price" class="font-weight-bold">${item.prices.lastPrice} $</h2>
                        <select class="product-size">
                            <option>Select Size</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                            <option value="Small">Small</option>
                            <option value="Large">Large</option>
                        </select>
                        <input class="product-quantity" type="number" value="1">
                        <button id="sproduct-btn" class="btn btn-primary">Add To Cart</button>
                        <h4 class="font-weight-bold">Product Details</h4>
                        <span>Commercial Web Services is an innovative website and online marketing services provider exclusively for dealers in the Equipment, Commercial Truck, and Agricultural industries. We work with you to understand your business needs and goals, deliver the best products and services to help meet these needs and goals, then monitor your success and change with you as your business grows. Your success is our success, and we strive to make you successful!</span>
                    </div>
                    `
            }
        })
        prodetails.innerHTML = productDetail.join(" ")

        // Switch img
        const MainImg = document.getElementById("MainImg")
        const smallImgs = document.getElementsByClassName("small-img")
        smallImgs[0].onclick = function(){
            MainImg.src = smallImgs[0].src
        }
        smallImgs[1].onclick = function(){
            MainImg.src = smallImgs[1].src
        }
        smallImgs[2].onclick = function(){
            MainImg.src = smallImgs[2].src
        }
        smallImgs[3].onclick = function(){
            MainImg.src = smallImgs[3].src
        }