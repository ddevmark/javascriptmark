'use strict';


let money = prompt ("Ваш бюджет на месяц?", ""),
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (let i = 0; i < 2; i++) {
    let q1 = prompt ("Введите обязательную статью расходов в этом месяце", ""),
        q2 = prompt ("Во сколько обойдется?", "");

    if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

        console.log ("Сделано!");

        appData.expenses[a] = b;
    } else {                            
        console.log ("Ошибка");
        i--;
    }

};

/* Цикл While
let i = 0;
 while (i < 2) {
     let q1 = prompt ("Введите обязательную статью расходов в этом месяце", ""),
         q2 = prompt ("Во сколько обойдется?", "");

     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

         console.log ("Сделано!");

         appData.expenses[a] = b;
     } else {
          console.log ("Ошибка");
          i--;
     }

     i++;
 } 
Цикл do/while
  let i = 0;
 do {
     let q1 = prompt ("Введите обязательную статью расходов в этом месяце", ""),
         q2 = prompt ("Во сколько обойдется?", "");

     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

         console.log ("Сделано!");

         appData.expenses[a] = b;
     } else {
          console.log ("Ошибка");
          i--;
     }

     i++;
 }
 while(i < 2); 
 */