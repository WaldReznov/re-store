export default class BookstoreService {

    data = [
        {id: 1, name: 'Какая-то книга', author: 'Быдло', price: 123, coverImage: 'https://images-na.ssl-images-amazon.com/images/I/91OME-jyFmL.jpg'}
    ];
    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // if(Math.random() > 0.75){
                    resolve(this.data);
                // }else {
                //     reject(new Error('smth bad happen'))
                // }
            }, 1000);
        })
    }

}