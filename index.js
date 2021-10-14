// Add your code here
// fetch(destinationURL, configurationObject);

// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   })
// });

//body with the name and email passed in as arguments to submitData. 
// These should be assigned to name and email keys within an object. 
// This object should then be stringified.

function submitData(name, email){
    const formData = {
        name: `${name}`,
        email: `${email}`
    };
    const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };
    return fetch("http://localhost:3000/users", configObj)
    // Use a then() call to access the Response object and use its built-in json()
    //  method to parse the contents of the body property.
    //  Use a second then() to access this newly converted object. 
    // From this object, find the new id and append this value to the DOM
    .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        document.body.innerHTML = object[ "id" ]
    })
    .catch(function(error) {
        alert("Unauthorized Access");
        document.body.innerHTML = error.message;
      });
};