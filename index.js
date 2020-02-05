// SHOPPING LIST


const list = [
  {
    name: 'banana',
    amount: 10
  },
  {
    name: 'apple',
    amount: 66
  },
  {
    name: 'bread',
    amount: 100
  },
  {
    name: 'beans',
    amount: 50
  },
  {
    name: 'tofu',
    amount: 19
  },
  {
    name: 'peanut butter',
    amount: 10
  },
  {
    name: 'chips',
    amount: 10
  },
]

const buildPage = () => {
  const listTotalElm = document.querySelector('#list');
  listTotalElm.innerHTML = "";
  for (const item of list) {
    const listElm = document.createElement('div');
    listElm.className = "group";
    listElm.innerHTML = ` 
              <div class='items'>${item.name}</div>
              <div class='amount'>${item.amount}</div>
              <img class="img" src="cross.jpg" width="10px" height="10px">
            `;
    const image = listElm.querySelector('.img');
    image.addEventListener('click', () => {
      listElm.style.display = "none";
    });
    listTotalElm.appendChild(listElm); // THIS MAKES SENSE. because it is checking if the image has been clicked WHILE IT IS MAKING THE DIV, like while it is constructing it!! actually idk if that is true, but i think it helps me understand
  }
}

buildPage();
const button = document.querySelector(".button");
let nameOf = document.querySelector(".nameOf");
let amountOf = document.querySelector(".amountOf");
nameOf = nameOf.textContent;

button.addEventListener('click', () => {
  let newName = nameOf.value;
  let newAmount = Number(amountOf.value);
  list.push({
    name: newName,
    amount: newAmount
  });
  buildPage();
});

 
