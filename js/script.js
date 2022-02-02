
const submitForm = (event) => {
    event.preventDefault();

    let nameFirst = document.querySelector('[name="fname"]');

    let nameLast = document.querySelector('[name="lname"]');

    console.log(`Imię: ${nameFirst.value}, Nazwisko: ${nameLast.value}`);
}

let form = document.getElementById('form');

form.addEventListener('submit', submitForm);
