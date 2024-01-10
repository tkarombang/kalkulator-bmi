const btnHitung = document.querySelector('.btn-hitung');
const beratBadan = document.getElementById('berat');
const umur = document.getElementById('umur');
const tinggiBadan = document.getElementById('tinggi');
const resultBmi = document.querySelector('.result-bmi');
const statusBmi = document.querySelector('.bmi-status');



btnHitung.addEventListener('click', function (event) {
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let calculateBmi;
  let tinggi;
  let kategori = '';

  //Merubah meter ke centimeter(cm) 
  tinggi = tinggiBadan.value / 100;

  // kalkulasi BMI
  calculateBmi = beratBadan.value / (tinggi * tinggi);

  // Kategori BMI dibawah 18 Tahun
  if (umur.value <= 19) {
    // Kategori Gender Pria / Wanita
    if (gender === 'pria') {
      kategori = (calculateBmi < 16) ? 'Kurus' : (calculateBmi <= 19) ? 'Normal' : 'Kelebihan Berat Badan';
      statusBmi.innerHTML = kategori + ' Kategori ' + gender;
    } else if (gender === 'wanita') {
      kategori = (calculateBmi < 15) ? 'Kurus' : (calculateBmi <= 18) ? 'Normal' : 'Kelebihan Berat Badan';
      statusBmi.innerHTML = kategori + ' Kategori ' + gender;
    }
  } else {
    // Kategori BMI diatas 19 Tahun
    // Kategori Gender Pria / Wanita
    if (gender === 'pria') {
      kategori = (calculateBmi < 18.5) ? 'Kekurangan Berat Badan (Kurus)' : (calculateBmi <= 24.9) ? 'IDEAL' : (calculateBmi <= 29.9) ? 'Kegemukan' : 'Obesitas';
      statusBmi.innerHTML = kategori + ' Kategori ' + gender;
    } else if (gender === 'wanita') {
      kategori = (calculateBmi < 17.5) ? 'Kekurangan Berat Badan (Kurus)' : (calculateBmi <= 23) ? 'IDEAL' : (calculateBmi <= 27) ? 'Kegemukan' : 'Obesitas';
      statusBmi.innerHTML = kategori + ' Kategori ' + gender;
    }
  }

  // result-bmi
  resultBmi.innerHTML = calculateBmi.toFixed(1);

  event.preventDefault();
});