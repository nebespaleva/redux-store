export default class BookstoreService {

    data = [
        { 
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler', 
            price: 32,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
        },
        {
            id: 2,
            title: 'Release it!',
            author: 'Michael T. Nygard',
            price: 45,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41nMZPJdhsL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
        }
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error(`something doesn't work...`));
                } else {
                    resolve(this.data);
                }
            }, 1500);
        });
    }
};