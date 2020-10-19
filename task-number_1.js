// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
//     то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет
// в консоль текст заголовка элемента(тега h2) и количество элементов в
// категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const list = document.querySelectorAll("ul#categories>li");


console.log(`В списке ${list.length} категории.`);
const fn =arr=>arr.forEach(el=> {


let title=el.querySelector('h2').innerHTML 
let items = el.querySelectorAll('li').length

console.log(`Категории ${title}\nКолличество элементов:${items}`);});
fn(list)

