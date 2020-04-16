export default class BookstoreService {

    data = [
        {id: 1, name: 'Программист-прагматик. Путь от подмастерья к мастеру', author: 'Дейв Томас и Энди Хант', price: 49, coverImage: 'https://cdn1.ozone.ru/multimedia/1013930687.jpg'},
        {id: 2, name: 'Какая-то книга', author: 'Быдло', price: 123, coverImage: 'https://images-na.ssl-images-amazon.com/images/I/91OME-jyFmL.jpg'}

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