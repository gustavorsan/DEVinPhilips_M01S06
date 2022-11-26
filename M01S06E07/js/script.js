const status = document.getElementById('status');
const resultado = document.getElementById('resultado');
const URL_BASE = 'https://api.coincap.io/v2/assets/bitcoin'

 async function get (url) {
  try{
    const response = await fetch(url)
    const json = await response.json()
    
  
    return json.data
  }catch(err){
      throw new Error("Falha no processamento : "+ err.message)
  }
}

async function obterMediaIdade(){
  status.innerHTML = "carregando...";
  try {
    const response = await get(URL_BASE);
    resultado.innerHTML = `O preço do Bitcoin - ${response.symbol} em dólares hoje é $ ${ Math.round(response.priceUsd)}`
  } catch (err) {
    resultado.innerHTML = err.message
  }finally{
    status.innerHTML = "Fim do Processamento"
  }
}

obterMediaIdade()

