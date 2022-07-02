var CarModel, name2, age, pocode, result, ChironPrice, DivoPrice, VeyronPrice, my_60Plus, my_60PlusDivo, my_60PlusChiron;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

// Describe this function...
function estimate() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (CarModel.slice(-1)[0] == 'Veyron') {
    if (age.slice(-1)[0] > 60) {
      let element_result2 = document.getElementById('result');
      element_result2.innerText = 'Your estimated price is: ';
      let new_span4 = document.createElement('span');
      new_span4.innerText = my_60Plus;

      element_result2.appendChild(new_span4);
    } else {
      let element_result3 = document.getElementById('result');
      element_result3.innerText = 'Your estimated price is: ';
      let new_span5 = document.createElement('span');
      new_span5.innerText = VeyronPrice;

      element_result3.appendChild(new_span5);
    }
  } else if (CarModel.slice(-1)[0] == 'Divo') {
    if (age.slice(-1)[0] > 60) {
      let element_result4 = document.getElementById('result');
      element_result4.innerText = 'Your estimated price is: ';
      let new_span6 = document.createElement('span');
      new_span6.innerText = my_60PlusDivo;

      element_result4.appendChild(new_span6);
    } else {
      let element_result5 = document.getElementById('result');
      element_result5.innerText = 'Your estimated price is: ';
      let new_span7 = document.createElement('span');
      new_span7.innerText = VeyronPrice;

      element_result5.appendChild(new_span7);
    }
  } else if (CarModel.slice(-1)[0] == 'Chiron') {
    if (age.slice(-1)[0] > 60) {
      let element_result6 = document.getElementById('result');
      element_result6.innerText = 'Your estimated price is: ';
      let new_span8 = document.createElement('span');
      new_span8.innerText = my_60PlusChiron;

      element_result6.appendChild(new_span8);
    } else {
      let element_result7 = document.getElementById('result');
      element_result7.innerText = 'Your estimated price is: ';
      let new_span9 = document.createElement('span');
      new_span9.innerText = ChironPrice;

      element_result7.appendChild(new_span9);
    }
  }
}


CarModel = ['Veyron', 'Divo', 'Chiron'];

name2 = [];
age = [];
pocode = [];
result = [];
ChironPrice = ['£3000 per year'];
DivoPrice = ['£5000 per year'];
VeyronPrice = ['£10000 per year'];
my_60Plus = ['£20000 per year'];
my_60PlusChiron = ['£6000 per year'];
my_60PlusDivo = ['£10000 per year'];


document.getElementById('submit').addEventListener('click', (event) => {
  let element_name = document.getElementById('name');
  name2.push(getNumberOrString(document.getElementById('name').value));
  let element_age = document.getElementById('age');
  age.push(getNumberOrString(document.getElementById('age').value));
  let element_po = document.getElementById('po');
  pocode.push(getNumberOrString(document.getElementById('po').value));
  let element_model = document.getElementById('model');
  CarModel.push(getNumberOrString(document.getElementById('model').value));
  let element_info = document.getElementById('info');
  element_info.innerText = 'Thank you ';
  let new_span = document.createElement('span');
  new_span.innerText = name2.slice(-1)[0];

  element_info.appendChild(new_span);
  let element_info2 = document.getElementById('info2');
  element_info2.innerText = 'Based on your age ';
  let new_span2 = document.createElement('span');
  new_span2.innerText = age.slice(-1)[0];

  element_info2.appendChild(new_span2);
  let element_info3 = document.getElementById('info3');
  element_info3.innerText = 'and post code  ';
  let new_span3 = document.createElement('span');
  new_span3.innerText = pocode.slice(-1)[0];

  element_info3.appendChild(new_span3);
  if (age.slice(-1)[0] < 25) {
    let element_result = document.getElementById('result');
    element_result.innerText = 'Unfortunately are not able to insure you on your chosen car.';
    element_result.style.color = '#ff0000';
  } else {
    estimate();
  }

});