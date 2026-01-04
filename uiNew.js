function startUp(){
    const daysWeek = document.getElementById('daysWeek');
    const calendar = document.getElementById('calendarBody');
    daysWeek.addEventListener('scroll', e => {
        calendar.scrollLeft = daysWeek.scrollLeft;
    });

    calendar.addEventListener('scroll', e => {
        daysWeek.scrollLeft = calendar.scrollLeft;
    });
}

