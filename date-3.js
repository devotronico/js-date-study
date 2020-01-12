// <BOX-3>
/**
 * formattare una data ottenuta dal database in formato `DATETIME`
 * es.: 2019-09-22 20:30:10
 * in una data italiana nel formato: domenica 22-settembre-2019 20:30
 */

const btn3 = document.querySelector('#box-3_btn');

btn3.addEventListener('click', () => {
  const dateFromDatabase = document.querySelector('#box-3_date-database').innerHTML;
  console.log(dateFromDatabase);
  const dataTokens = dateFromDatabase.split(' ');
  console.log(dataTokens);
  const dateFromDatabaseModified = `${dataTokens[0]}T${dataTokens[1]}`;
  console.log(dateFromDatabaseModified);

  const dateHtmlInputValue = (document.querySelector('#box-3_html-input').value = dateFromDatabaseModified);

  const dateHtmlInputBefore = (document.querySelector('#box-3_html-input-before').innerHTML = dateHtmlInputValue);
  const dateHtmlInputAfter = document.querySelector('#box-3_html-input-after');

  if (!dateHtmlInputBefore) {
    dateHtmlInputBefore.innerHTML = null;
    dateHtmlInputAfter.innerHTML = null;
    return;
  }

  const date = new Date(dateHtmlInputValue);
  const dayWeekNum = date.getDay();
  const dayNum = date.getDate();
  const monthNum = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();

  month = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];

  dayWeek = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];

  dateHtmlInputAfter.innerHTML = `${dayWeek[dayWeekNum]} ${dayNum}-${month[monthNum]}-${year} ${hour}:${minute}`;
});
// </BOX-3>
