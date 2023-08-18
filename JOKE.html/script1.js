const joke = document.querySelector('#joke');
const btnjoke = document.querySelector('#btnjoke');

const generateJoke = () => {
    const headers = {
        headers: {
            Accept: "application/json"
        }
    };
    fetch('https://icanhazdadjoke.com', headers)
    .then(res => res.json())
    .then(data => {
        joke.innerHTML = data.joke;
    })
    .catch(error => {
        console.log(error);
    });
};
btnjoke.addEventListener('click', generateJoke);