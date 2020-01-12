// <BOX-2>
/**
 * formattare una data ottenuta dal database in formato `DATETIME`
 * es.: 2019-09-22 20:30:10
 * in una data italiana nel formato: domenica 22-settembre-2019 20:30
 */

const btnFormatB = document.querySelector('#box-2_btn');

btnFormatB.addEventListener('click', () => {
    const dateHtmlInputBefore = document.querySelector('#box-2_date-before');
    const dateHtmlInputAfter = document.querySelector('#box-2_date-after');

    const dateHtmlInputValue = document.querySelector('#box-2_html-input').value;

    if (!dateHtmlInputValue) {
        dateHtmlInputBefore.innerHTML = null;
        dateHtmlInputAfter.innerHTML = null;
        return;
    }

    dateHtmlInputBefore.innerHTML = dateHtmlInputValue;

    const date = new Date(dateHtmlInputValue);
    const dayWeekNum = date.getDay();
    const dayNum = date.getDate();
    const monthNum = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();

    month = [
        'gennaio', 'febbraio', 'marzo', 'aprile',
        'maggio', 'giugno', 'luglio', 'agosto',
        'settembre', 'ottobre', 'novembre', 'dicembre'
    ];

    dayWeek = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];


    dateHtmlInputAfter.innerHTML = `${dayWeek[dayWeekNum]} ${dayNum}-${month[monthNum]}-${year} ${hour}:${minute}`
});
// </BOX-2>