// <BOX-1>
/**
 * formattare una data ottenuta dal database in formato `DATETIME` 
 * es.: 2019-09-22 20:30:10
 * in una data italiana nel formato: domenica 22-settembre-2019 20:30
 */

const btnFormatA = document.querySelector('#box-1_btn');

btnFormatA.addEventListener('click', () => {
    const datestring = '2019-09-22 20:30:10';
    const date = new Date(datestring);
    const dayWeekNum = date.getDay();
    const dayNum = date.getDate(); // ok
    const monthNum = date.getMonth(); // ok
    const year = date.getFullYear(); //
    const hour = date.getHours(); //
    const minute = date.getMinutes();

    month = [
        'gennaio', 'febbraio', 'marzo', 'aprile',
        'maggio', 'giugno', 'luglio', 'agosto',
        'settembre', 'ottobre', 'novembre', 'dicembre'
    ];

    dayWeek = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];

    const dateFormatted = document.querySelector('#box-1_date-after');
    dateFormatted.innerHTML = `${dayWeek[dayWeekNum]} ${dayNum}-${month[monthNum]}-${year} ${hour}:${minute}`
    // console.log(dayWeekNum);  // Domenica - Sabato : 0 - 6
    // console.log(dayNum);
    // console.log(monthNum); // (Gennaio da 0)
    // console.log(year); //
    // console.log(hour); //
    // console.log(minute); //
});
// </BOX-1>