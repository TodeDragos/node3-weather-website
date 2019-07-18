console.log('Client side javascript file is loaded!');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchedLocation = search.value;  // have access to the location only in the EventListener function, when the user press the button
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    fetch(`http://localhost:3000/weather?address=${searchedLocation}`).then( (response) => {
    response.json().then( ({error, location, forecastData}) => {
        if(error)
            return messageOne.textContent = error;
        
        messageOne.textContent = location;
        messageTwo.textContent = forecastData;
    })
})
})
