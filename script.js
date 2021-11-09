const guessGhibliApp = {};

// Get Characters and Display in Drop Down
guessGhibliApp.getCharacters = () => {
    fetch('https://ghibliapi.herokuapp.com/species')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            
            data.forEach((item) => {
                const selectEL = document.querySelector('select');

                const classification = item.name;
                const formValue = document.createElement('option');

                selectEL.appendChild(formValue);
                formValue.textContent = classification;
                formValue.value = classification;
            })
        })
}

// Get Random Computer Choice
guessGhibliApp.randomChar = (userChoice) => {
    fetch('https://ghibliapi.herokuapp.com/species')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const computerChoice = data.map((arrayItem) => {
                const { name } = arrayItem
                // console.log(arrayItem);
                const classification = arrayItem.name;
                // console.log(`randomChar:`, classification);

                if (classification === userChoice) {

                    console.log(arrayItem)

                const peopleArray = arrayItem.people;
                // console.log(peopleArray)

                let randomChar = peopleArray[Math.floor(Math.random() * peopleArray.length)];

                console.log(`random char`, randomChar);

                // console.log(`this is the random Character:`, randomChar);
                guessGhibliApp.getCharacterDetails(randomChar);
                }
            })

        })

}

guessGhibliApp.getCharacterDetails = (charURL) => {
    fetch(`${charURL}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(`this is character details:`, data);
        }

    )}


guessGhibliApp.init = () => {
    // Get Characters and Display in Drop Down
    guessGhibliApp.getCharacters();

    // Get User Choice through Event Listener
    const selectValue = document.getElementById('characterType');

    selectValue.addEventListener('change', (event) => {
        event.preventDefault();

        const userChoice = selectValue.value;
        console.log(userChoice);

        guessGhibliApp.randomChar(userChoice);

    })


}

guessGhibliApp.init();



    

    