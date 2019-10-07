/*let  personModule = require('./person');//тут йде запрос інфа  та віддає до person.
//console.log('Hello From app');
//console.log(person);
personModule.callMeLater(4,5,7,6);
//кожен js файл називається модулем
//exports по дефолту дорівнює пустому обєкту
//exports.xxx = false; рекваір буде дорівнювати обєкту у якого буде значення фолс , значить дописує в обєкті (ххх та фолс)
//module.exports (який дорівнює обєкту іншого) = 5; тоді рекваір буде дорівнювати 5, значить цей варіант повністю заміняє обєкт
*/

/*
//від класу з person.js
let person = require('./person');
let personArr = new person();
personArr.print([4,7,5,6,2]);
*/

/*
//як виводити в консолі пінг після деякий час, один раз або декілька раз

let EventEmitter = require('events').EventEmitter;
let eventEmitter = new EventEmitter();
eventEmitter.on('ping', () => {  //якщо треба виконання один раз замість 'оn' пишемо 'once' та забираємо 'setTimeout'
    console.log('pong');
})
setTimeout(() =>{
    eventEmitter.emit('ping');
    eventEmitter.emit('ping');
    eventEmitter.emit('ping');
    eventEmitter.emit('ping');
}, 2000);
*/


//як считувати з файлу текст
// const fs = require('fs');
// fs.readFile('./file.txt', {}, (err, data) => {
//     console.log(data.toString());
// });
//
//
//
// //флажок 'a'  використовується тоді коли хочеш створити новий файл
// let data = 'Hello';
// fs.writeFile('./text.txt', data,  {flags: 'a'}, (err) => {
//     if(!err) {
//         console.log('ok');
//



//
// //для того щоб текст якого додаємо почалося з нової стрічки треба використати \n
// fs.appendFile('./text.txt', '\nwrite something Hello World Chica', {}, (err) => {
//     if(!err) {
//         console.log('ok');
//     }
// });
//
//
//  //можна дізнатися інфо про файл, розмір, час коли створено
// fs.stat('./text.txt', {}, function(err, info) {
//     console.log(info);
// })
//
//
// //видалить усе крім 10 сімволів
// fs.truncate('./ file.txt', 10, (err) => {
//     if (!err) {
//         console.log('ok');
//     }
// })
//
//
//повністю видалити файл
// fs.unlink('./text.txt', (err) => {
//     if (!err) {
//         console.log("ok");
//     }
// })






//? = квеєрі параметр (імперсант)



// як читати файл
// const fs = require('fs');
// fs.readFile('./file.txt', {}, (err, data) => {
// console.log(data.toString());
//     });

//ЩОБ СТВОРИТИ НОВИЙ ФАЙЛ
// let data = 'PRIVETIKI';
// fs.writeFile('./text.txt', data, {flags:'a'}, (err) => {
//    if (!err) {
//     console.log('ok')
//
//     }
// });

//щось дописувати в їснуючий файл , якщо треба з нової строчки тоді пишемо \n
// fs.appendFile('./file.txt','\nwrite something', {}, (err) => {
//     if(!err) {
//         console.log('ok');
//     }
// })



//--y  підтверджувати усе коли нпм стартуєш



//HTTP  МОДУЛЬ
const http = new ProxyHttp("/proxy");
const http = require('http');
const server = http.createServer((req, res) => {
    console.log('req');
    res.end('hello')//виддає в фронт
})
server.listen(3000, (err) => {
    if(!err) {
        console.log('errrror')
    } else {
        console.log('listen 3000')
    }
})