function calculate() {



  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100;
  const bmi = weight / (height * height);
  const needle = document.getElementById('needle');
  const result =  document.getElementById('result')
  const output = document.getElementById('output');
  const stage = document.getElementById('stage');
  const todotext = document.getElementById('todotext');

  let degree = (bmi / 40) * 180;
  if (degree > 180) degree = 180;
  degree = degree - 90 ;


  let message;
  if (bmi < 18.5) {
      message = 'Underweight';
      todo = 'Focus on nutrient-dense foods to gain weight gradually. Regular exercise can help build muscle mass.'
      needle.style.transform = 'rotate(' + -60  + 'deg)';
  } else if (bmi < 25) {
      message = 'Normal weight';
      needle.style.transform = 'rotate(' + -30  + 'deg)';
      todo = 'Maintain a balanced diet and regular physical activity to sustain overall health.'
  } else if (bmi < 30) {
      message = 'Overweight';
      needle.style.transform = 'rotate(' + 30  + 'deg)';
      todo = 'Adopt healthy eating habits, increase physical activity, and consider consulting a healthcare professional for guidance.'
  } else if (bmi < 35) {
      message = 'Obese';
      needle.style.transform = 'rotate(' + 60  + 'deg)';
      todo = 'Focus on gradual weight loss through a combination of diet changes, increased exercise, and professional support.'
  } else {
      message = 'Morbid obesity';
      needle.style.transform = 'rotate(' + 90  + 'deg)';
      todo = 'Focus on healthy lifestyle changes, including mindful eating, portion control, and incorporating more fruits and vegetables into your diet12. Remember, small steps can make a big difference!'
  }

  result.style.opacity = 1;

  output.textContent = `Your BMI is ${bmi.toFixed(2)}`;
  stage.textContent = message ;
  todotext.textContent = todo;

  const msg = new SpeechSynthesisUtterance(output.textContent +", and you have "+ stage.textContent +", so "+ todotext.textContent);
  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 2) {
      msg.voice = voices[2];
  }
  msg.pitch = 1.8;
  msg.rate = 0.7;
  window.speechSynthesis.speak(msg);
};

// Wait for voices to be loaded before configuring the SpeechSynthesisUtterance
window.speechSynthesis.onvoiceschanged = function() {
  document.getElementById('bmiForm').dispatchEvent(new Event('submit'));
};