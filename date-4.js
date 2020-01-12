// <BOX-3>
/**
 * formattare una data ottenuta dal database in formato `DATETIME`
 * es.: 2019-09-22 20:30:10
 * in una data italiana nel formato: domenica Lun 22-Set-19 16:30
 */

const btn4 = document.querySelector('#box-4_btn');

// data da database - formato DATETIME -	(es: 2019-05-06 08:02:00)
// formattata da database - formato %w-%e-%c-%y-%H:%i - (es: 1-6-5-19-08:02)
// formattata con js -(es: Lun 6/Mag/19 08:02)

/**
 * Nel database la data è memorizzata nel formato DATETIME (es: 2019-05-06 08:02:00) ma
 * con il comando mysql DATE_FORMAT la data viene formattata nel formato %w-%e-%c-%y-%H:%i - (es: 1-6-5-19-08:02)
 * <section-a>
 * [a] Quindi lato client si ottiene la data già formattata nel formato %w-%e-%c-%y-%H:%i - (es: 1-6-5-19-08:02)
 * [b] Per creare altri formati con Javascript la data in formato %w-%e-%c-%y-%H:%i - (es: 1-6-5-19-08:02)
 * viene spezzettata alle posizioni del carattere `-` nella seguente lista di valori
 *   [c] Numero del giorno della settimana -> %w -> (es: 0=Domenica, 1=Lunedi, etc.)
 *   [d] Numero del giorno abbreviato -> %e -> (es: 1,2,…,31)
 *   [e] Mese in lettere abbreviato -> %c -> (es: 1,2,…,12)
 *   [f] Anno abbreviato in due cifre - %y - (es: 10,11,...,19)
 *   [h] Orario - %H:%i - (es: 16:32)
 * </section-a>
 * Con i singoli pezzi della data ricavati da <section-a> vengono ricavati i seguenti formati:
 * - <section-b> Lun 6/Mag/19 08:02 - (data italiana abbreviata)
 * - <section-c> Lunedì 06-Maggio-2019 ⌚08:02 (data italiana lunga)
 * - <section-d> 2019-05-06T08:02 (data per elemento <input type="datetime-local">)
 */
btn4.addEventListener('click', () => {
  // <section-a>
  const dateFromDatabaseFormatted = document.querySelector('#box-4_date-db-formatted').innerHTML; // [a]
  const dataTokens = dateFromDatabaseFormatted.split('-'); // [b]
  const weekDayNumber = dataTokens[0]; // [c]
  const shortDayNumber = dataTokens[1]; // [d]
  const month = dataTokens[2]; // [e]
  const shortYear = dataTokens[3]; // [f]
  const time = dataTokens[4]; // [h]
  // </section-a>

  // <section-b>  (2019-05-06 08:02:00 => 1-6-5-19-08:02 => Lun 6/Mag/19 08:02)
  const shortDayWeekList = ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'];
  const shortDayWeek = shortDayWeekList[weekDayNumber];

  const shortMonthList = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'];
  const shortMonth = shortMonthList[month - 1];

  const dateJsFormattedShort = `${shortDayWeek} ${shortDayNumber}/${shortMonth}/${shortYear} ${time}`;

  document.querySelector('#box-4_date-js-formatted-short').innerHTML = dateJsFormattedShort;
  // </section-b>

  // <section-c> (2019-05-06 08:02:00 => 1-6-5-19-08:02 => Lunedì 06-Maggio-2019 ⌚08:02)
  const dayWeekList = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  const dayWeek = dayWeekList[weekDayNumber];

  let dayNumber = shortDayNumber;
  if (dayNumber < 10) {
    dayNumber = `0${dayNumber}`;
  }

  const longMonthList = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  const longMonth = longMonthList[month - 1];

  const longYear = `20${shortYear}`;

  const watch = String.fromCodePoint('0x231A');
  const dateJsFormattedLong = `${dayWeek} ${dayNumber}-${longMonth}-${longYear} ${watch}${time}`;
  document.querySelector('#box-4_date-js-formatted-long').innerHTML = dateJsFormattedLong;
  // </section-c>

  // <section-d>  (2019-05-06 08:02:00 => 1-6-5-19-08:02 => 2019-05-06T08:02)
  let monthNumber = month;
  if (monthNumber < 10) {
    monthNumber = `0${monthNumber}`;
  }
  console.log('monthNumber', monthNumber);

  const dateFormattedForInput = `${longYear}-${monthNumber}-${dayNumber}T${time}`;
  console.log(dateFormattedForInput);
  document.querySelector('#box-4_html-input').value = dateFormattedForInput;
  // </section-d>

  // <section-e>
  dateHtmlInputValue = document.querySelector('#box-4_html-input').value;
  document.querySelector('#box-4_html-input-before').innerHTML = dateHtmlInputValue; // const dateHtmlInputBefore =
  const dateHtmlInputAfter = document.querySelector('#box-4_html-input-after');
  const inputDate = new Date(dateHtmlInputValue);
  const inputWeekNum = inputDate.getDay();
  const inputDayNum = inputDate.getDate();
  const inputMonthNum = inputDate.getMonth();
  const inputYear = inputDate
    .getFullYear()
    .toString()
    .slice(2, 4);

  const inputHour = inputDate.getHours() < 10 ? `0${inputDate.getHours()}` : inputDate.getHours();
  const inputMinute = inputDate.getMinutes() < 10 ? `0${inputDate.getMinutes()}` : inputDate.getMinutes();

  dateHtmlInputAfter.innerHTML = `${shortDayWeekList[inputWeekNum]} ${inputDayNum}/${shortMonthList[inputMonthNum]}/${inputYear} ${inputHour}:${inputMinute}`;
  // </section-e>
});
// </BOX-3>
