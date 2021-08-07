const jokePara = document.querySelector('#jokePara')
const jokeBtn = document.querySelector('#jokeBtn')


const jokeFun = () => {

    const setHeader = {
        headers: {
            Accept: 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com/', setHeader)
        .then((res) => res.json())
        .then((data) => {
            jokePara.innerHTML = data.joke;
        }).catch((err) => {
            console.log(err);
        })
}
jokeBtn.addEventListener('click', jokeFun);
jokeFun();
