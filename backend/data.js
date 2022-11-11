import bcrypt from 'bcryptjs'
const data = {
    users: [
        {
          name: 'Mohamed',
          email: 'admin@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: false,
        },
      ],
 products:[
        {
            name:'nike shirt',
            slug:'nike-shirt',
            category:'shirts',
            image:'/images/p1.jpg',
            price:120,
            countInStock:10,
            brand:'nike',
            rating:4.5,
            numReviews:10,
            description:'high quality shirt',
        },
        {
           
            name:'Adidas Fit Shirt',
            slug:'adidas-fit-shirt',
            category:'shirts',
            image:'/images/p2.jpg',
            price:100,
            countInStock:10,
            brand:'Adidas',
            rating:4.0,
            numReviews:10,
            description:'high quality product',
        },
        {
            name:'nike slim Pant',
            slug:'nike-slim-pant',
            category:'Pants',
            image:'/images/p3.jpg',
            price:45,
            countInStock:0,
            brand:'nike',
            rating:4.5,
            numReviews:14,
            description:'high quality product',
        },
        {
            name:'Adidas Fit Pant',
            slug:'adidas-fit-pant',
            category:'Pants',
            image:'/images/p4.jpg',
            price:65,
            countInStock:5,
            brand:'Adidas',
            rating:4.5,
            numReviews:10,
            description:'high quality Product',
        },
    ], 
};

export default data ;