
setScore()

function jawab(correct_answer, next_soal) {
    let answer = document.getElementsByClassName('input-soal')[0].value
    
    document.getElementsByClassName('wrong-answer-notice')[0].style.display = 'none'

    if (correct_answer == answer.toLowerCase()) {
        setScore(100)
        window.location.href = next_soal
    } else {
        setTimeout(function() {
            setScore(-100)
            document.getElementsByClassName('wrong-answer-notice')[0].style.display = 'block'
            document.getElementsByClassName('wrong-answer-notice')[0].innerHTML = 'JAWABAN SALAH!'
        }, 0);
    }
}

function setScore(point = 0) {
    let score = parseInt(localStorage.getItem('score'))
    score += point
    localStorage.setItem('score',score)
    document.getElementById('score').innerHTML = score
}