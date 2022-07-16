'use strict';

// alert('hello');
// const result = confirm('are your here?');
// console.log(result);
// const answer = prompt('Вам есть 18?', '');
// console.log(answer);

// const answer = [];
// answer[0] = prompt('what is you name', '');
// answer[1] = prompt('what is last name', '');
// answer[2] = prompt('how old are you', '');
// console.log(answer);

// const user = 'Ivan';
// alert(`привет - ${user}`);
// console.log(!1 && 2 || !3);

// console.log(5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//     console.log('Done!');
// }

// let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }
// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let k = 0; k < 3; k++) {
//         console.log(k);
//     }
// };


// let result1 = '';

// for (let i = 1; i < 8; i++) {
//     for (let k = 0; k < i; k++) {
//         result1 += ' *';
//     }
//     result1 += '\n';
// }
// console.log(result1);


// let out = document.getElementById('out');
// // !вывести от 4 до 400
// // let tmp = "";
// // for (let i = 4; i < 400; i++) {
// //     tmp = tmp + i + " ";
// // }
// // !вывести от 654 до 0

// first: for (let i = 0; i < 3; i++) {
//     console.log(`first level: ${i}`);
//     for (let k = 0; k < 3; k++) {
//         console.log(`second level: ${k}`);
//         for (let n = 0; n < 3; n++) {
//             if (n === 2) {
//                 continue first;
//             }
//             console.log(`third level: ${n}`);
//         }
//     }
// }
// out.innerHTML = tmp;

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i < data.length; i++) {
//     if (typeof (data[i]) === 'number') {
//         data[i] *= 2;
//     } else {
//         data[i] += ' - done';
//     }
// }
// console.log(data);

// const data1 = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for (let i = 0; i <= data1.length - 1; i++) {

//     result[i] = data1[(data1.length - 1) - i];
// }
// console.log(result);

//  


// function getMathResult(num, times) {
//     if (typeof (times) !== 'number' || times <= 0) {
//         console.log(num);
//         return;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }
//     console.log(str);
//     return;
// }
// getMathResult(5, 7);

// const logger = 'i sometimes went at home ';

// console.log(logger.slice(2, 11));
// console.log(logger.slice(12, 17));
// console.log(logger.slice(17, 20));
// console.log(logger.slice(20, 25));
// console.log(logger.substr(20, 4));
// console.log(logger.substr(17, 2));



// function calculateVolumeAndArea(num) {
//     if (isNaN(num) /*  typeof (num) == 'string' || !Number.isInteger(num) */ || num < 0) {
//         console.log('При вычислении произошла ошибка');
//     } else {
//         const S = 6 * (num * num);
//         const V = num * num * num;
//         console.log(`Объем куба: ${V}, площадь всей поверхности: ${S}`);

//     }
// }
// calculateVolumeAndArea(6);

// function getCoupeNumber(vagNum) {
//     if (isNaN(vagNum) || !Number.isInteger(vagNum) || vagNum < 0) {
//         console.log("Ошибка. Проверьте правильность введенного номера места");
//         return;
//     } else if (vagNum <= 0 || vagNum > 36) {
//         console.log('Таких мест в вагоне не существует');
//         return;
//     }
//     for (let i = 1; i < vagNum; i++) {
//         if (vagNum <= 4) {
//             console.log(1);
//             return;
//         } else if (vagNum > 4 && vagNum <= 8) {
//             console.log(2);
//             return;
//         } else
//         if (vagNum > 8 && vagNum <= 12) {
//             console.log(3);
//             return;
//         } else
//         if (vagNum > 12 && vagNum <= 16) {
//             console.log(4);
//             return;
//         } else
//         if (vagNum > 16 && vagNum <= 20) {
//             console.log(5);
//             return;
//         } else
//         if (vagNum > 20 && vagNum <= 24) {
//             console.log(6);
//             return;
//         } else
//         if (vagNum > 24 && vagNum <= 28) {
//             console.log(7);
//             return;
//         } else
//         if (vagNum > 28 && vagNum <= 32) {
//             console.log(8);
//             return;
//         } else {
//             console.log(9);
//             return;
//         }

//     }
// }
// getCoupeNumber(34);



// function getTimeFromMinutes(minutesTotal) {
//     if (typeof (minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//         return "Ошибка, проверьте данные";
//     }

//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;

//     let hoursStr = '';

//     switch (hours) {
//         case 0:
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }

//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }


// function findMaxNumber(a, b, c, d) {
//     let arr = [a, b, c, d];
//     let num = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof (arr[i]) !== 'number' || arr.length < 4) {
//             console.log(0);
//         } else if (num < arr[i]) {
//             num = arr[i];
//         }
//     }
//     console.log(num);

// }
// findMaxNumber(7, 12.8, 6, 9);


// function findMaxNumber(a, b, c, d) {
//     if (typeof (a) !== 'number' || typeof (b) !== 'number' || typeof (c) !== 'number' || typeof (d) !== 'number' || findMaxNumber.length < 4) {
//         console.log(0);
//         return;
//     } else {
//         for (let i = 0; i < 4; i++) {
//             if (a < b) {
//                 a = b;
//                 b = c;
//                 c = d;
//             }
//         }
//     }
//     console.log(a);
// }
// findMaxNumber(7, 12.8, 4);



// function fib(num) {
//     let str = '';

//     for (let i = 2; i <= num; i++) {
//         str += `${(i - 1) + (i - 2)} `;
//     }
//     console.log(str);
// }
// fib(6);

// function learnJS(lang, callback) {
//     console.log(`Я учу язык: ${lang}`);
//     callback();
// };

// function done() {
//     console.log(`Я выучил: язык`);

// }

// learnJS("java script", done);

// const options = {
//     name: 'test',
//     width: '1024',
//     height: '1024',
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }

//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }

// }

// const obj = {
//     long: '2345',
//     power: '890',
//     speed: '455',
//     start: '45',
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// console.log(Object.keys(obj).length);

// const {
//     border,
//     bg
// } = obj.colors;
// console.log(border);


// const arr = [1, 4, 5, 7, 2];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function (item, i, arr) {
//     console.log(`${i} : ${item} внутри массива ${arr}`);
// });



// const obj1 = {
//     a: 4,
//     b: 3,
//     c: {
//         x: 3,
//         y: 6
//     }
// };

// function copy(maimObj) {
//     let copyObj = {};
//     let key;
//     for (let key in maimObj) {
//         copyObj[key] = maimObj[key];
//     }
//     return copyObj;
// }


// const newObj = copy(obj1);
// newObj.b = 10;
// console.log(newObj);
// console.log(obj1);
// const all = {
//     r: 6,
//     s: 9
// };
// const add = {};
// console.log(Object.assign(add, all));
// console.log(add);


// const oldArray = ['a', 't', 'r', 'q'];
// const newArray = oldArray.slice();
// console.log(newArray);





// // function showExperience(plan) {

// //     const {
// //         exp
// //     } = plan.skills;
// //     console.log(exp);
// // };
// // showExperience(personalPlanPeter);





// const array = [23, 34, 56, 67];
// let [s1, s2, , s4] = array;
// console.log(s1);
// console.log(s2);
// console.log(s4);


// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },

//     showAgeAndLangs: function (plan) {
//         const {
//             age
//         } = plan;
//         const {
//             languages
//         } = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;
//         languages.forEach(function (lang) {
//             str += `${lang.toUpperCase()} `;
//         });
//         console.log(str);
//         return str;
//     }

// };
// personalPlanPeter.showAgeAndLangs(personalPlanPeter);


// /* function showProgrammingLangs(plan) {
//     let str = '';
//     const {
//         programmingLangs
//     } = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }
//     console.log(str);
//     return str;
// }

// showProgrammingLangs(personalPlanPeter); */

// function showProgrammingLangs(plan) {
//     let str = '';
//     for (let key in plan.skills.programmingLangs) {
//         if (key == 0) {
//             return ('');
//         } else {
//             str += `Язык ${key} изучен ${plan.skills.programmingLangs[key]}\n`;
//         }
//     }

//     return str;
// }
// showProgrammingLangs(personalPlanPeter);


// let descr = 'dont,worry,i need to buy';
// console.log(descr.split(' '));

// let ln = [2, 3, 4, 4, 7];
// console.log(ln.join(' '));


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str;
//     if (arr === 0) {
//         str = 'Семья пуста';
//     } else {
//         str = `Семья состоит из: ${arr.join(' ')} `;
//     }
//     return str;
// }
// showFamily(family);


// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {

//     arr.forEach(function (index) {
//         console.log(index.toLowerCase());

//     });

// }
// standardizeStrings(favoriteCities);




// const someString = 'This is some strange string';

// function reverse(str) {
//     /* let s = str.split('');
//     let r = s.reverse();
//     let j = r.join('');
//     console.log(j);
//  */
//     if (typeof (str) === 'string') {
//         let s = '';
//         for (let i = str.length - 1; i >= 0; i--) {
//             s += str[i];
//         }
//         console.log(s);
//         return s;
//     } else {
//         console.log('Ошибка!');
//         return 'Ошибка!';
//     }

// }
// reverse(someString);


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    arr = [...baseCurrencies, ...additionalCurrencies];
    let str = 'Доступные валюты:\n';
    // const access = `Доступные валюты:\n`;
    if (arr.length === 0) {
        // console.log('Нет доступных валют');
        return 'Нет доступных валют';
    } else {
        for (let value of arr) {
            if (value === missingCurr) {
                continue;
            } else {
                str += `${value}\n`;
            }
        }

    }
    return str;
}
availableCurr(baseCurrencies, 'CNY');




const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },

    showAgeAndLanlgs: function (plan) {
        const {
            age
        } = plan;
        const {
            languages
        } = plan.skills;
        let str = `Мне ${age} и я владею языками: `;
        languages.forEach(function (key) {
            str += `${key.toUpperCase()} `;
        });
        console.log(str);
        return str;

    }
};
personalPlanPeter.showAgeAndLanlgs(personalPlanPeter);

const personalPlan = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        const {
            age
        } = plan;
        const {
            languages
        } = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function (lang) {
            str += `${lang.toUpperCase()} `;
        });
        console.log(str);
        return str;
    }
};

personalPlan.showAgeAndLangs(personalPlan);


// function showExperience(plan) {
//     const {
//         exp
//     } = plan.skills;
//     return exp;
// }
// showExperience(personalPlanPeter);


// function showProgrammingLangs(plan) {
//     let str = '';
//     for (let key in plan.skills.programmingLangs) {

//         str += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`;
//     }


//     return str;
// }


// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function (plan) {
//         const {
//             age
//         } = plan;
//         const {
//             languages
//         } = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function (lang) {
//             str += `${lang.toUpperCase()} `;
//         });
// con
//         return str;
//     }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);