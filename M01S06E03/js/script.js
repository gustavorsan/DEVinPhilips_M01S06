const status = document.getElementById('status');
const resultado = document.getElementById('resultado');

function aprovarDadosCadastrais( cliente ) {
  return new Promise( (resolve, reject) => {
      if (cliente.cpf === 11111111111)
          resolve(true);
      else 
          reject(false);
  });
}

function aprovarValorSolicitado( cliente, valor ) {
  return new Promise( (resolve, reject) => {
      if (cliente.margem >= valor)
          resolve(true);
      else 
          reject(false);
  });
}

const cliente = { cpf: 11111111111, nome: 'Calleri', margem: 1000.0 };
const aprovacaoCadastro = aprovarDadosCadastrais(cliente);
const aprovacaoValor = aprovarValorSolicitado(cliente, 300.0);

status.innerHTML = "carregando...";
Promise.all([aprovarDadosCadastrais(cliente),aprovarValorSolicitado(aprovacaoValor)])
            .then(result => setResult(result))
            .catch(error => setResult(error))
            .finally( ()=> status.innerHTML = "Fim do Processamento")

function setResult(retorno){

  if(retorno){
    resultado.innerHTML = "APROVADO"
    resultado.style.color = "green"
  }else{
    resultado.innerHTML = "REPROVADO"
    resultado.style.color = "red"  
  }
}
// continue com o tratamento dos resultados de ambas as promises...