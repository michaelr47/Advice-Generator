const advice = document.getElementById('advice');

const adviceAPI = 'https://api.adviceslip.com/advice';

fetch(adviceAPI)
.then(res => res.json())
.then(data => {
    let randomAdviceCall = data.slip;
    advice.innerHTML = randomAdviceCall.advice;
})