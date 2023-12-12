const products = [
    {
        id:'1',
        name:'Iphone 12',
        price: 1000,
        category: 'celular',
        img:'',
        stock: 25,
        description:'Description de iphone 12'
    }
];
{id: '2', name;'Iphone 13', price; 1000, category;'celular', img;''}
{id: '3', name;'Ipadd 9 generacion', price; 1200, category;'tablet', img;''}

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)

    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod=>prod.id === productId))
        },500)
    })
}