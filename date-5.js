// <BOX-5>
/**
 * formattare una data ottenuta dal database in formato `DATETIME`
 * es.: 2019-09-22 20:30:10
 * in una data italiana nel formato: domenica 22-settembre-2019 20:30
 */

const btn5 = document.querySelector('#box-5_btn');

btn5.addEventListener('click', () => {
  const dateDiffer = document.querySelector('#box-5_date-diff');

  const dateInput1 = document.querySelector('#box-5_input-1').value;
  const dateInput2 = document.querySelector('#box-5_input-2').value;

  if (!dateInput1 || !dateInput2) {
    dateDiffer.innerHTML = null;
    return;
  }

  const firstDate = new Date(dateInput1);
  const secondDate = new Date(dateInput2);

  //   const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const oneHour = 60 * 60 * 1000; // minutes*seconds*milliseconds
  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneHour));
  console.log(diffDays);

  dateDiffer.innerHTML = diffDays;
});
// </BOX-5>
