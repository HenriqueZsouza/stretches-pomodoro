function getExercices() {
  fetch("https://api.api-ninjas.com/v1/exercises?type=stretching&offset=10" + offset, {
    method: 'GET',
    headers: { 'X-Api-Key': 'ZWDzi4IVZuLs/fKrBR9hSA==GIwHdKtSuWsGt7I6' },
    contentType: 'application/json',
  })
    .then(response => response.json())
    .then(data => {
      listExercises = data
    })
    .catch(error => console.log(error))

}
getExercices()