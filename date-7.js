const setLeadingZero = num => {
    return num < 10 ? `0${num}` : num;
};

/**
 * Formattare uno dei seguenti formati:
 * 1. formato `DATETIME` senza carattere `T` e con secondi.   es.: 2019-05-06 08:02:03
 * 2. formato `DATETIME` senza carattere `T` e senza secondi. es.: 2019-05-06 08:02
 * 3. formato `DATETIME` con carattere `T` e con secondi.     es.: 2019-05-06T08:02:03
 * 4. formato `DATETIME` con carattere `T` e senza secondi.   es.: 2019-05-06T08:02:03
 * Nel formato `numerico-abbreviato`. es: 1-6-5-19-08:02
 * Descrizione del formato `numerico-abbreviato`:
 * 1. solo numeri senza lettere
 * 2. senza i zero che precedono i valori delle singole date e
 * 3. con i zero che precedono i valori delle ore e minuti
 * @param {String} datestring
 */
const formatDataInNumericShort = (datestring) => {
    const date = new Date(datestring);
    const dayWeekNum = date.getDay(); // Sunday - Saturday : 0 - 6
    const dayNum = date.getDate(); // Returns the day of the month (1-31)
    const monthNum = date.getMonth() + 1; // (January gives 0)
    const year = date.getFullYear().toString().slice(2); // Returns the year (2 digits for years)

    const hour = setLeadingZero(date.getHours()); // Returns the hour (00-23)
    const minute = setLeadingZero(date.getMinutes()); // Returns the minutes (00-59)

    return `${dayWeekNum}-${dayNum}-${monthNum}-${year}-${hour}:${minute}`
};


/**
 * Formattare una data dal formato `numerico-abbreviato` al
 * formato `italiano-breve` (es: Lun 6/Mag/19 08:02)
 * Descrizione formato `numerico-abbreviato`:
 * codice php: w-j-n-y-H:i
 * codice mysql: %w-%e-%c-%y-%H:%i
 * es.: 1-6-5-19-08:02
 * Dettagli del formato `numerico-abbreviato`:
 * 1. contiene solo numeri
 * 2. senza i zero che precedono i valori delle date (es: aprile = 3 e no 03)
 * 3. con i zero che precedono i valori delle ore e minuti se minori di dieci
 * @param {String} dataNumericShort - data nel formato w-j-n-y-H:i
 */
const formatDataInItalyShort = dataNumericShort => {
    const dataTokens = dataNumericShort.split('-');
    const weekDayNumber = dataTokens[0];
    const shortDayNumber = dataTokens[1];
    const month = dataTokens[2];
    const shortYear = dataTokens[3];
    const time = dataTokens[4];
    const shortDayWeekList = ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'];
    const shortDayWeek = shortDayWeekList[weekDayNumber];
    const shortMonthList = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'];
    const shortMonth = shortMonthList[month - 1];
    return `${shortDayWeek} ${shortDayNumber}/${shortMonth}/${shortYear} ${time}`;
};


document.querySelector('BUTTON').addEventListener('click', () => {
    let datestring = document.querySelector('#toFormat').innerHTML;
    // let datestring = '2019-05-06T08:02:03'; //> 1-6-4-19-08:02
    // let datestring = '2019-05-06T08:02'; //>    1-6-4-19-08:02
    // let datestring = '2019-05-06 08:02:03'; //> 1-6-4-19-08:02
    // let datestring = '2019-05-06 08:02'; //>    1-6-4-19-08:02

    const regex = /[0-9]{4}-[0-9]{2}-[0-9]{2}(\s|T)[0-9]{2}:[0-9]{2}(:[0-9]{2})?/;

    datestring = regex.test(datestring) ? formatDataInNumericShort(datestring) : datestring;

    console.log(datestring);


    const result = document.querySelector('#result');
    result.innerHTML = formatDataInItalyShort(datestring);
});
// </BOX-1>