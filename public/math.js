
let rollNum = 0;
let rollNumStr;
let function1;
let freqNum=0;
let freqNumStr;

//function plot formatting
let width=1400;
let height=500;
let planck = 6.6261e-34;

let frequency = ''; //inputs/displays
let wavelength = '';

let color1 = '---';

const inputColor = document.getElementById('color');
const inputWavelength = document.getElementById('inputWavelength');
const inputFrequency = document.getElementById('inputFrequency');

setInterval(function(){ //animation start
  rollNum += 1;
  rollNumStr = rollNum.toString();
  freqNumStr = freqNum.toString();
  function1 = 'sin' + '(' + freqNumStr + '(x+' + rollNumStr + '))';
  //console.log(function1);
  functionPlot({
    target: '#graph',
    width,
    height,
    data: [{
      fn: function1,
      color: color1,
      //derivative: {
      //  fn: 'cos(x)',
      //  color: 'green',
      //  updateOnMouseMove: true
      //}
    }],
    grid: false,
    title: '',
    yAxis: {domain: [-1, 1]},
    xAxis: {domain: [0, 700]}
  }); //animation end
}, 10);

const varToSettings = document.getElementById('toSettings');
varToSettings.addEventListener('click', transfer);

function transfer(e){
  //e.preventDefault();
  let data = {color: inputColor.value || '', wavelength: inputWavelength.value || '', frequency: inputFrequency.value || '', energy: inputEnergy.value || ''}
  fetch('/apiSettings',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(data),
  })
};

//input color functionality
inputColor.addEventListener('change', updateColor);

let colorDict = {
  'violet': 410,
  'blue': 470,
  'cyan': 510,
  'green': 540,
  'yellow': 575,
  'orange': 600,
  'red': 700,
  '---': 0,
}

function updateColor(nc){
  color1 = nc.target.value;
  freqNum = (1/colorDict[color1]) * 2 * Math.PI;
  inputWavelength.value = colorDict[color1];
  inputFrequency.value = (((3e8 /(colorDict[color1] * 1e-9))/1e9)*1e9).toExponential(3);
  frequency = inputFrequency.value;
  inputEnergy.value = (planck * frequency).toExponential(3);
  if (color1 == '---'){
    inputEnergy.value = '';
    inputWavelength.value = '';
    freqNum = 0;
  }
}

//input wavelength functionality
inputWavelength.addEventListener('input', updateValueW);

function updateValueW(e){
  freqNum = (1/(e.target.value));
  freqNum = 2 * Math.PI * freqNum;
  wavelength = e.target.value;
  inputFrequency.value = (((3e8 /(wavelength * 1e-9))/1e9)*1e9).toExponential(3);
  frequency = inputFrequency.value;
  colorChoose();
  inputEnergy.value = (planck * frequency).toExponential(3);
  if (wavelength == 0){
    inputEnergy.value = '';
  }
}

//input frequency functionality
inputFrequency.addEventListener('input', updateValueF);

function updateValueF(e){
  frequency = e.target.value;
  if (frequency == 0){
    inputEnergy.value = '';
    inputWavelength.value = '';
    wavelength = 0;
    inputColor.value = '---';
    return
  }
  wavelength = Math.round(((3e8 / frequency) * 1e9));
  inputWavelength.value = wavelength;
  colorChoose()
  freqNum = 2 * Math.PI * (1/wavelength);
  inputEnergy.value = (planck * frequency).toExponential(3);
}

//input energy functionality
inputEnergy.addEventListener('input', updateValueE);

function updateValueE(e){
  energy = e.target.value;
  inputFrequency.value = (energy/planck);
  frequency = inputFrequency.value;
  inputWavelength.value = Math.round(((3e8 / frequency) * 1e9));
  colorChoose();
  if (energy == 0){
    inputFrequency.value = '';
    inputColor.value = '---';
    return
  }
}

function colorChoose(){
  if (wavelength > 380 && wavelength <= 435){
    color1 = 'violet';
    inputColor.value = 'violet';
    return
  }
  if (wavelength > 435 && wavelength <= 500){
    color1 = 'blue';
    inputColor.value = 'blue';
    return
  }
  if (wavelength > 500 && wavelength <= 520){
    color1 = 'cyan';
    inputColor.value = 'cyan';
    return
  }
  if (wavelength > 520 && wavelength <= 565){
    color1 = 'green';
    inputColor.value = 'green';
    return
  }
  if (wavelength > 565 && wavelength <= 590){
    color1 = 'yellow';
    inputColor.value = 'yellow';
    return
  }
  if (wavelength > 590 && wavelength <= 625){
    color1 = 'orange';
    inputColor.value = 'orange';
    return
  }
  if (wavelength > 625 && wavelength <= 740){
    color1 = 'red';
    inputColor.value = 'red';
    return
  }
  if (wavelength == 0){
    color1 = '---';
    inputColor.value = '---';
    return
  }
}
