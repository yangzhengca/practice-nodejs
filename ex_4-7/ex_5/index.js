const Logger=require('logplease');
const numbers=require('./numbers');

const logger = Logger.create('utils');


const str=[2,3,101,201,202,100];

for (let i=0;i<str.length;i++){
    let num1=str[i];
    (numbers(num1))?logger.info(`${num1} is even`):logger.error(`${num1} is odd`);
}


// 2021-05-18T18:04:22.606Z [INFO]  utils: 2 is even
// 2021-05-18T18:04:22.612Z [ERROR] utils: 3 is odd
// 2021-05-18T18:04:22.612Z [ERROR] utils: 101 is odd
// 2021-05-18T18:04:22.612Z [ERROR] utils: 201 is odd
// 2021-05-18T18:04:22.613Z [INFO]  utils: 202 is even
// 2021-05-18T18:04:22.613Z [INFO]  utils: 100 is even