//Display product

const proContainer = document.querySelector(".pro-container")
localStorage.setItem('listProduct', JSON.stringify(listProduct))
const u = JSON.parse(localStorage.getItem('listProduct'))

const listProductItem = u.map(function(item, index){
    const starsTotal = 5
    var starPercentage = `${(item.rate / 5) * 100}%`
    return `
    <div class="pro cursor-pointer my-3 position-relative">
                <img class="w-100" src="${item.imageMain}" alt="">
                <div class="des py-2">
                    <span>${item.brand}</span>
                    <h5 class="pt-2">${item.name}</h5>
                    <div class="star-outer">
                        <div class="star-inner" style="width: ${starPercentage};">
                        </div>
                    </div>
                    <h4 class="pt-2">${item.prices.lastPrice} $</h4>
                </div>
                <a class="cart position-absolute" href="sproduct.html?id=000${item.id}"><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
    `
})
proContainer.innerHTML = listProductItem.join(" ")