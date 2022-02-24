// Personal API Key for OpenWeatherMap API
const apiKey = '124e10c3c63a51cd59f7a6c15edab0a6&units=imperial';
const openWeatherURL = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip='

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', handleClick);

/* Function called by event listener */
function handleClick(e) {
    e.preventDefault();

    // Get the zip input value
    let zip = document.getElementById('zip').value;

    // Check if the zip has a value.
    if(zip)
        /**
         * Here we chain the promises to accomplish the given task.
         * First we get the web api data
         * Then we get the feeling input value 
         * POST the combined data
         * Update the UI
         */
        getWebApiData(zip)
        .then(function(result) {
            
            // If the API returns cod with 404 return an alert with the message
            if(result.cod == '404')
                Promise.reject(result.message);
            else {
                let feeling = document.getElementById('feelings').value;

                postData('/post', {
                    temperature: result.main.temp,
                    date: new Date().toLocaleDateString('en-US'),
                    content: feeling
                });
            }
        })
        .then(function(result) {
            getProjectData();
        });
    else {
        alert('Please write a zip code...');
        throw new Error('Could not get the zip code from the input. It might not be added yet!');
    }
}

/* Function to GET Web API Data*/
const getWebApiData = async (zip) => {
    const response = await fetch(openWeatherURL+zip+'&appid='+apiKey)

    try {
        const data = await response.json();
        return data;
    } catch(error) {
        throw new Error('Could not get Openwebweather API results');
    }
}

/* Function to POST data */
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify(data),
    })

    try {
        const data = await response.json();

        return data;
    } catch(error) {
        throw new Error('Could not post project data @ app.js');
    }
};

/* Function to GET Project Data */
const getProjectData = async () => {
    const response = await fetch('/all');

    try {
        const data = await response.json();
        
        document.getElementById('date').innerHTML = `Date: ${data.date}`;
        document.getElementById('temp').innerHTML = `Temperature: ${Math.round(data.temperature)} degrees`;
        document.getElementById('content').innerHTML = `Content: ${data.content}`;

    } catch(error) {
        throw new Error('Could not get data @ app.js');
    }
};