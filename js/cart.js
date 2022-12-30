const list = JSON.parse(localStorage.getItem('listItem'))
const buyItems = document.getElementById("buyItem")

//Display product in Cart.html
function getCartItem(){
    const inner = list.map((item)=>{
        return `
        <tr>
            <td><a id="deleteItem" href="#" onclick="handleDeleteItem(${item.index})"><i class="fa-solid fa-xmark"></i></a></td>
            <td><img src="${item.img}" alt=""></td>
            <td>${item.name}</td>
            <td>${item.size}</td>
            <td>$ ${item.price}</td>
            <td><input class="product-quantity" type="number" value="${item.quantity}"></td>
            <td>$ ${item.subtotal}</td>
        </tr>
        `
    })
    buyItems.innerHTML = inner.join(" ")
}
getCartItem()

//Delete Product
const deleteItem = document.getElementById("deleteItem")
function handleDeleteItem(index){
    list.splice(index,1)
    getCartItem()
    localStorage.setItem('listItem', JSON.stringify(list))
    getSubTotal()
}

//Display Bill
const cartTotal = document.getElementById("cart-total")
function getSubTotal(){
    var arrPrice = []
    const inner = list.map((item)=>{
        arrPrice.push(item.subtotal)
    })
    var sum =0
    for(var i = 0; i < arrPrice.length; i++){
        sum += arrPrice[i]
    }
    var discount = 0
    if(sum > 500){
        discount = sum / 10
    }else{
        discount = 0
    }
    cartTotal.innerHTML = 
        `
        <tr>
                        <td>Cart Subtotal</td>
                        <td>$ ${sum}</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>$ ${discount}</td>
                    </tr>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td><strong>$ ${sum - discount}</strong></td>
        </tr>
        `
      
}

getSubTotal()