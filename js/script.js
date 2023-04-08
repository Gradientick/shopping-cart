const products = [
    {
        image: "https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/8/184956_2022.jpg",
        title: "Iphone 14 Pro Max",
        price: 74000,
    },
    {
        image: "https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/8/184956_2022.jpg",
        title: "Iphone 14 Pro Max",
        price: 74000,
    },
    {
        image: "https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/8/184956_2022.jpg",
        title: "Iphone 14 Pro Max",
        price: 74000,
    },
    {
        image: "https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/8/184956_2022.jpg",
        title: "Iphone 14 Pro Max",
        price: 74000,
    },
    {
        image: "https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/8/184956_2022.jpg",
        title: "Iphone 14 Pro Max",
        price: 74000,
    },
];

products.forEach(function(product) {
    const card = document.createElement('div')

    const productImage = document.createElement("div")
    productImage.textContent = product.image

    card.appendChild(productImage);
})