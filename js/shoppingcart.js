const listItem = localStorage.getItem("listItem") ? JSON.parse(localStorage.getItem("listItem")) : []

const sproductBtn = document.getElementById("sproduct-btn")
const name = document.querySelector(".product-name")
const size = document.querySelector(".product-size")
const quantity = document.querySelector(".product-quantity")
const price = document.querySelector("product-price")
const list = JSON.parse(localStorage.getItem('listProduct'))

//Get value add button
const innerHTMLCart = list.map((item)=>{
    getUrlID()
    if(item.id == res){
        sproductBtn.addEventListener("click",()=>{
            let obj = {
                img: item.imageMain,
                name: item.name,
                size: size.value,
                price: item.prices.lastPrice,
                quantity: quantity.value,
                subtotal: item.prices.lastPrice * quantity.value
            }
            listItem.push(obj)
            localStorage.setItem('listItem', JSON.stringify(listItem))
            window.location.href = "cart.html"
        })
    }
})
