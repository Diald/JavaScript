document.getElementById("postForm").addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    
    const formData = new FormData(event.target);
    const jsonData = {};

    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    axios.post('https://www.kuchbhi.com', jsonData)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
});

// The HTML FORM 
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>POST Request Example</title>
// </head>
// <body>
//   <h1>POST Request Example</h1>
//   <form id="postForm">
//     <label for="firstName">First Name:</label>
//     <input type="text" id="firstName" name="firstName"><br><br>
//     <label for="lastName">Last Name:</label>
//     <input type="text" id="lastName" name="lastName"><br><br>
//     <button type="submit">Submit</button>
//   </form>

//   <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
//   <script src="script.js"></script>
// </body>
// </html>

