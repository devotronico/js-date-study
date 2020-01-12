// <BOX-1>
/**
 * Formattare una data in formato `DATETIME` es.: 2019-05-06 08:02:00
 * o anche dal formato 2019-05-06T08:02:00 con la T tra data e ora
 * Nel formato
 * 1. solo numerico e
 * 2. senza i zero che precedono i valori delle singole date e
 * 3. con i zero che precedono i valori delle ore e minuti:
 * es: 1-6-5-19-08:02
 */


const setLeadingZero = num => {
    return num < 10 ? `0${num}` : num;
};



/**
 * Formattare una data in formato `DATETIME` es.: 2019-05-06 08:02:00
 * o anche dal formato 2019-05-06T08:02:00 con la T tra data e ora
 * Nel formato
 * 1. solo numerico e
 * 2. senza i zero che precedono i valori delle singole date e
 * 3. con i zero che precedono i valori delle ore e minuti:
 * es: 1-6-5-19-08:02
 */
const formatDataInNumericShort = (datestring) => {
    const date = new Date(datestring);
    const dayWeekNum = date.getDay(); // Sunday - Saturday : 0 - 6
    const dayNum = date.getDate(); // Returns the day of the month (1-31)
    const monthNum = date.getMonth(); // (January gives 0)
    const year = date.getFullYear().toString().slice(2); // Returns the year (2 digits for years)

    const hour = setLeadingZero(date.getHours()); // Returns the hour (00-23)
    const minute = setLeadingZero(date.getMinutes()); // Returns the minutes (00-59)

    return `${dayWeekNum}-${dayNum}-${monthNum}-${year}-${hour}:${minute}`
};



document.querySelector('BUTTON').addEventListener('click', () => {
    let datestring = document.querySelector('#toFormat').innerHTML;

    datestring = '2019-05-06T08:02:00'; // debug


    const result = document.querySelector('#result');
    result.innerHTML = formatDataInNumericShort(datestring);
    // result.innerHTML = `${dayWeekNum}-${dayNum}-${monthNum}-${year}-${hour}:${minute}`
});
// </BOX-1>