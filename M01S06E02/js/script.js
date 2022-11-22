const hora = document.getElementById('hora');

function updateHour(){
  let data = new Date();
  var seconds = data.getSeconds();
  var minutes = data.getMinutes();
  var hour = data.getHours();
  hora.innerHTML = `${hour}:${minutes}:${seconds}`;
}

setInterval(updateHour,2000)