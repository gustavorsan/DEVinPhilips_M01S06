const status = document.getElementById('status');
const resultado = document.getElementById('resultado');

function obterClienteNoBancoDeDados(idCliente) {
  return new Promise( (resolve, reject) => {
          const cliente = { nome: 'bruce wayne', id: idCliente };
          resolve(cliente);
  });
}

async function processar() {
  status.innerHTML = "carregando...";
  try{
    const response = await obterClienteNoBancoDeDados(7);
    resultado.innerHTML = `nome : ${response.nome} || id : ${response.id}`
  }catch(err){
    status.innerHTML = err.message
  }finally{
    status.innerHTML = "Fim do Processamento"
  }
}

processar();