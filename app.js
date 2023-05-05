let advice = document.getElementById("advice");
let adviceNumber = document.getElementById('adviceNum');
const adviceAPI = "https://api.adviceslip.com/advice";
const adviceBtn = document.getElementById('adviceBtn');

const fetchNewAdviceQuote = () => {
  return fetch(adviceAPI)
    .then((res) => res.json())
    .then((data) => {
      let randomAdviceCall = data.slip;
      advice.innerText = `"${randomAdviceCall.advice}"`;
      adviceNumber.innerText = randomAdviceCall.id;
    });
};

// onload event to invoke fetch api data to return advice and id on screen load.
window.onload = fetchNewAdviceQuote();
// click event to fetch advice 
adviceBtn.addEventListener('click', fetchNewAdviceQuote);
