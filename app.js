let advice = document.getElementById("advice");
let adviceNumber = document.getElementById('adviceNum');
const adviceAPI = "https://api.adviceslip.com/advice";
const adviceBtn = document.getElementById('adviceBtn');

const fetchNewAdviceQuote = () => {
  return fetch(adviceAPI)
    .then((res) => res.json())
    .then((data) => {
      let randomAdviceCall = data.slip;
      console.log(randomAdviceCall);
      advice.innerText = `"${randomAdviceCall.advice}"`;
      adviceNumber.innerText = randomAdviceCall.id;
    });
};

window.onload = fetchNewAdviceQuote();
adviceBtn.addEventListener('click', fetchNewAdviceQuote);
