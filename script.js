// Домашнее задание
// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты
// Переменные:years  myDog, guests
// Функции: dogYears,makeTea,secret
// Встроенные функции:console.log,substr,substring slice
// Аргументы:myDog, 4, guests,Earl Grey
// Параметры:dogname, age,cups, tea
//     let years = age * 2;
//     console.log(dogName + ' is ' + years + ' years old');
// }
// let myDog = 'Rex';
// dogYears(myDog, 4);

// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// let guests = 2;
// makeTea(guests, 'Earl Grey');

// function secret(){
//     console.log('The secret of life is 28');
// }
// secret();


// Дана строка 'JS'. Сделайте из нее строку 'js'.


// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).

// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.

// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.

// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.

// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.

// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.


//2
 let txt = 'JS';
  console.log(txt.toLowerCase());

//3
let txt1 = 'я люблю JS!';
console.log(txt.substr(2,6));
console.log(txt.substring(2,7));
console.log(txt.slice(2,7));

//4
let txt2 = 'я люблю JS!';
console.log(txt.indexOf('люблю') )

//6
let txt3 = 'Я-люблю-JS!';
console.log(txt.replace(/-/g, '!'));

//7
let ll = 'я люблю JS';
console.log(ll.split(' '))

//8
let l = 'привет мир';
console.log(l.split(''))