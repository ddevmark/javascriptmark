'use strict'
 
 var money = prompt("Ваш бюджет на месяц?", "");
 var todayDate = new Date().toISOString().slice(0, 10);
 var optionalExpense;
 var income;
 var question1 = prompt("Введите обязательную статью расходов в этом месяце", "");
 var question2 = prompt("Во сколько обойдется?");
 var expenses = {
         question1, question2
      };

 /* 
  console.log(money);
  console.log(todayDate);
  console.log(expenses); */

 var appData = {
 	Money: money,
 	Date: todayDate,
    Expenses: expenses,
    OptionalExpense: optionalExpense,
    Income: income,
    Saving: false
 };

 console.log(appData);

 var oneDay = ((money - question2) / 30);

 console.log(oneDay);
 alert("Бюджет на один день " + oneDay + " рублей");
 