const shops = [{ oil: 100 }, { butter: 400 }, { milk: 300 }];

const budgets = [1000, 1500, 1300];

const map = new Map([[{ paper: 200 }, 300]]);

shops.forEach((shop, i) => {
  map.set(shop, budgets[i]);
});

const allGoods = [];

// for (let goods of map.keys()) {
//   allGoods.push(Object.keys(goods).join(''));
// }

// console.log(allGoods);

const totalBudget = [...map.values()].reduce((acc, cur) => acc + cur, 0);
console.log(totalBudget);
