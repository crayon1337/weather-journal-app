// Personal API Key for OpenWeatherMap API
const apiKey = '124e10c3c63a51cd59f7a6c15edab0a6';
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
        .then(updateUI());
    else
        alert('Please write a zip code...');
}

/* Function to GET Web API Data*/
const getWebApiData = async (zip) => {
    const response = await fetch(openWeatherURL+zip+'&appid='+apiKey)

    try {
        return response.json();
    } catch(error) {
        new Error('Could not get Openwebweather API results');
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
        return response.json();
    } catch(error) {
        new Error('Could not post project data @ app.js');
    }
};

/* Function to GET Project Data */
const getProjectData = async () => {
    const response = await fetch('/all');

    try {
        return response.json();
    } catch(error) {
        new Error('Could not get project data @ app.js');
    }
};

/* Function to update the UI */
const updateUI = async() => {
    const response = await getProjectData();

    if(Object.keys(response).length > 0) {
        document.getElementById('date').innerHTML = `Date: ${response.date}`;
        document.getElementById('temp').innerHTML = `Temperature: ${response.temperature}`;
        document.getElementById('content').innerHTML = `Content: ${response.content}`;
    } else 
        alert('Could not get the projectData');
}