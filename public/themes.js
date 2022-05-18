let themeDict = {
  'light': ['white', 'black', '#3b3b40' ],
  'dark': ['black', 'white', '#8c8c8c'],
  'moonlight': ['#33353d', '#c7c8c9', '#1e6dbd'],
  'monokai':['#282922', '#c8d66b', '#2cc73b'],
  'strawberry':['#EC6493', 'white', 'yellow'],
  'gator':['#7BED64', '#9164ED', '#d34931'],
  'frutti': ['#ecd0eb', '#6699ff', '#ffff66'],
  'kelli': ['#C3FFB1', '#F959CE', '#C4C1C3'],
  'flesh': ['#ECE9B9', '#454424', '#C21B1B'],
  'mainframe':['#2A2A2A', '#34E825', 'green'],
  'spider':['#0C0C0C', '#68A7FD', '#FF3C3C'],
}

const themeSelector = document.getElementById('themeList');
themeSelector.addEventListener('change', updateTheme);
themeSelector.addEventListener('change', transferBack);

function transferBack(e){
  //e.preventDefault();
  let themeData = {c1: themeDict[theme][0] || '', c2: themeDict[theme][1] || '', c3: themeDict[theme][2] || '', theme: theme}
  //console.log(themeData);
  fetch('/apiIndex',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(themeData),
  })
};

var sectionTitles = document.getElementsByClassName('sectionTitle');

function updateTheme(e){
  theme = e.target.value;
  document.body.style.backgroundColor = themeDict[theme][0];
  document.getElementById('inputWavelength').style.backgroundColor = themeDict[theme][0];
  document.getElementById('inputFrequency').style.backgroundColor = themeDict[theme][0];
  document.getElementById('inputEnergy').style.backgroundColor = themeDict[theme][0];
  document.getElementById('color').style.backgroundColor = themeDict[theme][0];
  document.getElementById('themeList').style.backgroundColor = themeDict[theme][0];
  document.getElementById('one').style.backgroundColor = themeDict[theme][1];
  document.getElementById('two').style.backgroundColor = themeDict[theme][1];
  document.getElementById('three').style.backgroundColor = themeDict[theme][1];
  document.body.style.color = themeDict[theme][1];
  document.getElementById('inputWavelength').style.color = themeDict[theme][2];
  document.getElementById('inputFrequency').style.color = themeDict[theme][2];
  document.getElementById('inputEnergy').style.color = themeDict[theme][2];
  document.getElementById('color').style.color = themeDict[theme][2];
  document.getElementById('themeList').style.color = themeDict[theme][2];
  document.getElementById('link1').style.color = themeDict[theme][2];
  document.getElementById('link2').style.color = themeDict[theme][2];
  document.getElementById('inputWavelength').style.borderColor = themeDict[theme][2];
  document.getElementById('inputFrequency').style.borderColor = themeDict[theme][2];
  document.getElementById('inputEnergy').style.borderColor = themeDict[theme][2];
  document.getElementById('color').style.borderColor = themeDict[theme][2];
  document.getElementById('themeList').style.borderColor = themeDict[theme][2];
  
  for (var i=0, len=sectionTitles.length; i<len; i++){
    sectionTitles[i].style["border-color"] = themeDict[theme][2];
    sectionTitles[i].style["color"] = themeDict[theme][1];
  }
  
}