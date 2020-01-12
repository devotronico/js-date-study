// <BOX-0>
const dateOrigin = document.querySelector('#box-0_date-title');

const dateA = document.querySelector('#date-a');
const dateB = document.querySelector('#date-b');
const dateC = document.querySelector('#date-c');
const dateD = document.querySelector('#date-d');
const dateE = document.querySelector('#date-e');
const dateF = document.querySelector('#date-f');
const dateG = document.querySelector('#date-g');
const dateH = document.querySelector('#date-h');
const dateI = document.querySelector('#date-i');
const dateL = document.querySelector('#date-l');
const dateM = document.querySelector('#date-m');
const dateN = document.querySelector('#date-n');
const dateO = document.querySelector('#date-o');
const dateP = document.querySelector('#date-p');

const btnA = document.querySelector('#btn-a');
const btnB = document.querySelector('#btn-b');
const btnC = document.querySelector('#btn-c');
const btnD = document.querySelector('#btn-d');

const fn = datestring => {
  dateOrigin.innerHTML = datestring;
  const date = new Date(datestring); // [a]
  const formatted_DateString = date.toDateString(); // [b]
  const formatted_ISOString = date.toISOString(); // [c]
  const formatted_JSON = date.toJSON(); // [d]
  const formatted_GMTString = date.toGMTString(); // [e]
  const formatted_LocalDateString = date.toLocaleDateString(); // [f]
  // const formatted_LocalFormat = date.toLocaleFormat(); // [g]
  const formatted_LocalString = date.toLocaleString(); // [h]
  const formatted_LocalTimeString = date.toLocaleTimeString(); // [i]
  // const formatted_Source = date.toSource(); // [l]
  const formatted_String = date.toString(); // [m]
  const formatted_TimeString = date.toTimeString(); // [n]
  const formatted_UTCString = date.toUTCString(); // [o]
  const formatted_ValueOf = date.valueOf(); // [p]

  dateA.innerHTML = date; // [a]
  dateB.innerHTML = formatted_DateString; // [b]
  dateC.innerHTML = formatted_ISOString; // [c]
  dateD.innerHTML = formatted_JSON; // [d]
  dateE.innerHTML = formatted_GMTString; // [e]
  dateF.innerHTML = formatted_LocalDateString; // [f]
  dateG.innerHTML = 'non funziona'; // [g]
  dateH.innerHTML = formatted_LocalString; // [h]
  dateI.innerHTML = formatted_LocalTimeString; // [i]
  dateL.innerHTML = 'non funziona'; // [l]
  dateM.innerHTML = formatted_String; // [m]
  dateN.innerHTML = formatted_TimeString; // [n]
  dateO.innerHTML = formatted_UTCString; // [o]
  dateP.innerHTML = formatted_ValueOf; // [p]
};

btnA.addEventListener('click', () => {
  const datestring = '2019-09-22 20:30:10';
  fn(datestring);
});

btnB.addEventListener('click', () => {
  const datestring = '2019-09-22T20:30:10';
  fn(datestring);
});

btnC.addEventListener('click', () => {
  const datestring = '2019-09-22T20:30:10Z';
  fn(datestring);
});

btnD.addEventListener('click', () => {
  const datestring = '2019-09-22T20:30:10.000+00:00';
  fn(datestring);
});
// </BOX-0>
