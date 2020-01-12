// <BOX-3>
/**
 * formattare una data ottenuta dal database mongodb
 * es: 2019-09-22T20:30:10.000+00:00
 * in una data italiana nel formato: domenica 22-settembre-2019 20:30
 */

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  const dateFromMongo = document.querySelector('#date-mongodb').innerHTML;
  console.log(dateFromMongo);

  const date = new Date(dateFromMongo);

  const dateISOString = date.toISOString();

  const dateFromMongoFormatted = dateISOString.split('.')[0];
  console.log(dateFromMongoFormatted);

  document.querySelector('#date-formatted').innerHTML = dateFromMongoFormatted;
  document.querySelector('#html-input').value = dateFromMongoFormatted;
});
// </BOX-3>
