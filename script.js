const fled = document.getElementById("flex");
const button = document.getElementsByTagName("button")[0];
const checked = document.getElementById("checked");
const chanceAxis = document.getElementById("chance-axis");

const nInput = document.getElementsByTagName("input")[0];
const pInput = document.getElementsByTagName("input")[1];
const error = document.getElementById("overflowError");

const buttons = document.getElementsByClassName("paste");
const numbers = document.getElementsByTagName("span");
error.style.color = "orangered";

const factorialOf = num => {
 let list = []

 for (i = num; i > 0; i--) {
   list.push(i)
 }
 if (num === 0) {
  return 1
 }
 return list.reduce((prev, curr) => {
   return curr * prev
 })
 
}

const C = (n, r) => {
  const C = factorialOf(n) / (factorialOf(r) * factorialOf(n -
   r))
   
  return [C, n, r]
}

const binomial = (C, p, n = C[1], r = C[2]) => {
  const equa = `${(C[0] * p ** (r) * (1 - p) ** (n - r) *
  100).toFixed(0)}`
  
  return equa
}

const showMaxAndMin = () => {
  const range = []
  for (i=0; i<=n; i++) {
     range.push(i)
  }
 const binomialFunc = range.map(r => {
    return binomial(C(n, r), p)
  })
  
const highestChance = Math.max(...binomialFunc).toFixed(0)
const lowestChance = Math.min(...binomialFunc).toFixed(0)

const indexOfMax = binomialFunc.indexOf(highestChance)
const indexOfMin = binomialFunc.indexOf(lowestChance)

return [highestChance, indexOfMax, lowestChance, indexOfMin]
}


let p = 0.50;
let n = 5;
let r = 0;

const B = binomial(C(n, r), p)

const highestOfB = showMaxAndMin(B)[0]
const highAt = showMaxAndMin(B)[1]

const lowestOfB = showMaxAndMin(B)[2]
const lowAt = showMaxAndMin(B)[3]

console.log(B)
console.log(`Highest Chance: ${highestOfB} at ${highAt}`)
console.log(`Lowest Chance: ${lowestOfB} at ${lowAt}`)


const change = () => {
  if (checked.value === "on") {
    checked.value = "off";
  } else if (checked.value === "off") {
    checked.value = "on";
  }

};

const showBars = () => {

  console.log(checked.value)
  if (nInput.value !== "") {
  fled.innerHTML = "";

 
  const range = [];
  for (i=0; i<=Number(nInput.value); i++) {
    range.push(i);
  }
  const binomialFunc = range.map(r => {
    return binomial(C(Number(nInput.value), r), Number(pInput.value))
  });
  
  binomialFunc.map((height, i) => {
    const hint = new Ele("div", "hint").create();
    const div =   new Ele("div", "flex-child").create();
    const megaDiv = new Ele("div", "mega-flex").create();
    const iOfDiv = new Ele("div", "i-div").create();

    hint.innerHTML = `${height}%`;
    if (hint.innerHTML === `${0}%`) {
      hint.innerHTML = `~${height}%`;
    }
    
    
    div.style.backgroundColor = `rgb(255, ${(165 - height).toString()}, 0)`;
    iOfDiv.innerHTML = `${i}`;
    div.style.transition = "1s";
    div.appendChild(iOfDiv);

    megaDiv.appendChild(hint);
    megaDiv.appendChild(div);

    requestAnimationFrame(() =>
     setTimeout(() => {
     div.style.height = `${height}%`;
     })
);
    
  if (nInput.value < 0 || nInput.value > 170) {
    error.innerHTML = "n must be a value between 0 to 170";
  } else if (pInput.value < 0 || pInput.value > 1) {
    error.innerHTML = "p must be a value between 0 to 1";
  } else {
    if (checked.value === "on") {
      fled.appendChild(megaDiv);
    } else {
      if (hint.innerHTML !== `~${height}%`) {
        fled.appendChild(megaDiv);
      }
    }
    
    error.innerHTML = "";
  }
  })
};
}

for (i=100; i >=0; i -= 10) {
  const chance = new Ele("div", "chance").create();
  chance.innerHTML = i;
  chanceAxis.appendChild(chance);
}

const addOne = () => {
  pInput.value = numbers[0].innerHTML;
}
const addTwo = () => {
  pInput.value = numbers[1].innerHTML;
}
const addThree = () => {
  pInput.value = numbers[2].innerHTML;
}

button.setAttribute("onclick", "showBars()");
checked.setAttribute("onclick", "change()");

buttons[0].setAttribute("onclick", "addOne()");
buttons[1].setAttribute("onclick", "addTwo()");
buttons[2].setAttribute("onclick", "addThree()");



















