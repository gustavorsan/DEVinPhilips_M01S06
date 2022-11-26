const status = document.getElementById('status');
const resultado = document.getElementById('resultado');


const retornoEmpresa1 = new Promise( (resolve, reject) => 
    setTimeout(resolve, 5000, "Empresa 1") ); // 5 segundos
const retornoEmpresa2 = new Promise( (resolve, reject) => 
    setTimeout(resolve, 3000, "Empresa 2") ); // 3 segundos

// ... continue daqui ....
status.innerHTML = "carregando...";
Promise.race([retornoEmpresa1,retornoEmpresa2])
  .then(retorno => setResult(retorno))
  .finally( ()=> status.innerHTML = "Fim do Processamento");

  function setResult(retorno){
    resultado.innerHTML = retorno
    resultado.style.color = "green"
  }