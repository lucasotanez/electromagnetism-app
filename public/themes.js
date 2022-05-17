let themeDict = {
  'light': ['white', 'black', '#3b3b40' ],
  'dark': ['black', 'white', '#8c8c8c'],
  'moonlight': ['#33353d', '#c7c8c9', '#1e6dbd'],
  'monokai':['#282922', '#c8d66b', '#2cc73b'],
  'strawberry':['#EC6493', 'white', 'yellow'],
}

let theme;

const themeSelector = document.getElementById('themeList');
themeSelector.addEventListener('change', updateTheme);

function transferBack(e){
  //e.preventDefault();
  let themeData = {c1: themeDict[theme][0], c2: themeDict[theme][1], c3: themeDict[theme][2],}
  fetch('/apiIndex',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(data),
  })
};

function updateTheme(e){
  theme = e.target.value;
  document.body.style.backgroundColor = themeDict[theme][0];
  document.getElementById('inputWavelength').style.backgroundColor = themeDict[theme][0];
  document.getElementById('inputFrequency').style.backgroundColor = themeDict[theme][0];
  document.getElementById('inputEnergy').style.backgroundColor = themeDict[theme][0];
  document.getElementById('color').style.backgroundColor = themeDict[theme][0];
  document.getElementById('themeList').style.backgroundColor = themeDict[theme][0];
  document.body.style.color = themeDict[theme][1];
  document.getElementById('inputWavelength').style.color = themeDict[theme][2];
  document.getElementById('inputFrequency').style.color = themeDict[theme][2];
  document.getElementById('inputEnergy').style.color = themeDict[theme][2];
  document.getElementById('color').style.color = themeDict[theme][2];
  document.getElementById('themeList').style.color = themeDict[theme][2];
}