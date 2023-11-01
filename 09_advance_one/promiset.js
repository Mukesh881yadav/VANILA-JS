function fetchData(url) {
    return new Promise((resolve, reject) => {
        const fetch = require('node-fetch');
        fetch(url)
            .then(response => {
                // Check if the request was successful
                if (response.ok) {
                    // Parse the JSON response
                    return response.json();
                }
                // If there was an error with the request, reject the Promise
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                // Resolve the Promise with the parsed data
                resolve(data);
            })
            .catch(error => {
                // If there was any error during the process, reject the Promise with the error
                reject(error);
            });
    });
}

// Example usage
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
fetchData(apiUrl)
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
