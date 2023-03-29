function currentTime() {
    setInterval(function() {
    $('#timer').text(dayjs().format('MMM DD, YYYY hh:mm:ss A'))
    }, 1000)
    
}
currentTime()