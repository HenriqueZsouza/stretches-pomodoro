function getExercices() {
  fetch("https://api.api-ninjas.com/v1/exercises?type=stretching&offset=" + offset, {
    method: 'GET',
    headers: { 'X-Api-Key': 'ZWDzi4IVZuLs/fKrBR9hSA==GIwHdKtSuWsGt7I6' },
    contentType: 'application/json',
  })
    .then(response => response.json())
    .then(data => {
      listExercises = data
      console.log(listExercises)
    })
    .catch(error => console.log(error))

}
getExercices()