function getExercices() {
  fetch("https://api.api-ninjas.com/v1/exercises?type=stretching&offset=" + offset, {
    method: 'GET',
    headers: { 'X-Api-Key': 'YOUR_KEY' },
    contentType: 'application/json',
  })
    .then(response => response.json())
    .then(data => {
      listExercises = data
    })
    .catch(error => console.log(error))

}
getExercices()