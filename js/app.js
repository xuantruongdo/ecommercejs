const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')

//Toggle Menu
bar.addEventListener('click', () =>{
    nav.classList.add('active')
})

close.addEventListener('click', () =>{
    nav.classList.remove('active')
})


//Fake API
var listProduct = [
    {
        id: 1,
        brand: "adidas",
        name: "Brilliant Tees",
        descreption: "Commercial Web Services is an innovative website and online marketing services provider exclusively for dealers in the Equipment, Commercial Truck, and Agricultural industries. We work with you to understand your business needs and goals, deliver the best products and services to help meet these needs and goals, then monitor your success and change with you as your business grows. Your success is our success, and we strive to make you successful!",
        rate: 4,
        imageMain: "./plugins/img/products/f1.jpg",
        images: {
            image1: "./plugins/img/products/f1.jpg",
            image2: "./plugins/img/products/f2.jpg",
            image3: "./plugins/img/products/f3.jpg",
            image4: "./plugins/img/products/f4.jpg"
        },
        prices: {
            lastPrice: 12
        }
    },
    {
        id: 2,
        brand: "nike",
        name: "Threaded Bliss",
        descreption: "Commercial Web Services is an innovative website and online marketing services provider exclusively for dealers in the Equipment, Commercial Truck, and Agricultural industries. We work with you to understand your business needs and goals, deliver the best products and services to help meet these needs and goals, then monitor your success and change with you as your business grows. Your success is our success, and we strive to make you successful!",
        rate: 5,
        imageMain: "./plugins/img/products/f2.jpg",
        images: {
            image1: "./plugins/img/products/f5.jpg",
            image2: "./plugins/img/products/f6.jpg",
            image3: "./plugins/img/products/f7.jpg",
            image4: "./plugins/img/products/f8.jpg"
        },
        prices: {
            lastPrice: 18
        }
    },
    {
        id: 3,
        brand: "nike",
        name: "Captivating Tees",
        descreption: "Commercial Web Services is an innovative website and online marketing services provider exclusively for dealers in the Equipment, Commercial Truck, and Agricultural industries. We work with you to understand your business needs and goals, deliver the best products and services to help meet these needs and goals, then monitor your success and change with you as your business grows. Your success is our success, and we strive to make you successful!",
        rate: 2,
        imageMain: "./plugins/img/products/f3.jpg",
        images: {
            image1: "./plugins/img/products/f5.jpg",
            image2: "./plugins/img/products/f6.jpg",
            image3: "./plugins/img/products/f7.jpg",
            image4: "./plugins/img/products/f8.jpg"
        },
        prices: {
            lastPrice: 26
        }
    },
    {
        id: 4,
        brand: "nike",
        name: "Passion Prints",
        descreption: "Commercial Web Services is an innovative website and online marketing services provider exclusively for dealers in the Equipment, Commercial Truck, and Agricultural industries. We work with you to understand your business needs and goals, deliver the best products and services to help meet these needs and goals, then monitor your success and change with you as your business grows. Your success is our success, and we strive to make you successful!",
        rate: 3,
        imageMain: "./plugins/img/products/f4.jpg",
        images: {
            image1: "./plugins/img/products/f5.jpg",
            image2: "./plugins/img/products/f6.jpg",
            image3: "./plugins/img/products/f7.jpg",
            image4: "./plugins/img/products/f8.jpg"
        },
        prices: {
            lastPrice: 34
        }
    },
    {
        id: 5,
        brand: "nike",
        name: "Apparel House",
        descreption: "Commercial Web Services is an innovative website and online marketing services provider exclusively for dealers in the Equipment, Commercial Truck, and Agricultural industries. We work with you to understand your business needs and goals, deliver the best products and services to help meet these needs and goals, then monitor your success and change with you as your business grows. Your success is our success, and we strive to make you successful!",
        rate: 1,
        imageMain: "./plugins/img/products/f5.jpg",
        images: {
            image1: "./plugins/img/products/f5.jpg",
            image2: "./plugins/img/products/f6.jpg",
            image3: "./plugins/img/products/f7.jpg",
            image4: "./plugins/img/products/f8.jpg"
        },
        prices: {
            lastPrice: 38
        }
    },
    {
        id: 6,
        brand: "nike",
        name: "Adorable Tees",
        descreption: "Commercial Web Services is an innovative website and online marketing services provider exclusively for dealers in the Equipment, Commercial Truck, and Agricultural industries. We work with you to understand your business needs and goals, deliver the best products and services to help meet these needs and goals, then monitor your success and change with you as your business grows. Your success is our success, and we strive to make you successful!",
        rate: 5,
        imageMain: "./plugins/img/products/f6.jpg",
        images: {
            image1: "./plugins/img/products/f5.jpg",
            image2: "./plugins/img/products/f6.jpg",
            image3: "./plugins/img/products/f7.jpg",
            image4: "./plugins/img/products/f8.jpg"
        },
        prices: {
            lastPrice: 21
        }
    },
    {
        id: 7,
        brand: "nike",
        name: "Super T-Shirts",
        descreption: "Commercial Web Services is an innovative website and online marketing services provider exclusively for dealers in the Equipment, Commercial Truck, and Agricultural industries. We work with you to understand your business needs and goals, deliver the best products and services to help meet these needs and goals, then monitor your success and change with you as your business grows. Your success is our success, and we strive to make you successful!",
        rate: 4,
        imageMain: "./plugins/img/products/f7.jpg",
        images: {
            image1: "./plugins/img/products/f5.jpg",
            image2: "./plugins/img/products/f6.jpg",
            image3: "./plugins/img/products/f7.jpg",
            image4: "./plugins/img/products/f8.jpg"
        },
        prices: {
            lastPrice: 15
        }
    },
    {
        id: 8,
        brand: "nike",
        name: "Artistic Attire",
        descreption: "Commercial Web Services is an innovative website and online marketing services provider exclusively for dealers in the Equipment, Commercial Truck, and Agricultural industries. We work with you to understand your business needs and goals, deliver the best products and services to help meet these needs and goals, then monitor your success and change with you as your business grows. Your success is our success, and we strive to make you successful!",
        rate: 3,
        imageMain: "./plugins/img/products/f8.jpg",
        images: {
            image1: "./plugins/img/products/f5.jpg",
            image2: "./plugins/img/products/f6.jpg",
            image3: "./plugins/img/products/f7.jpg",
            image4: "./plugins/img/products/f8.jpg"
        },
        prices: {
            lastPrice: 100
        }
    }
    
]
