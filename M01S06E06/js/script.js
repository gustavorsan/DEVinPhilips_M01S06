const status = document.getElementById('status');
const resultado = document.getElementById('resultado');
const URL_BASE = 'https://api.agify.io'

 async function get (url, params) {
  try{
    const response = await fetch(url + '?' + new URLSearchParams(params))
    const data = await response.json()
  
    return data
  }catch(err){
      throw new Error("Falha no processamento : "+ err.message)
  }
}

async function obterMediaIdade(name,country){
  status.innerHTML = "carregando...";
  try {
    const response = await get(URL_BASE,{country,name});
    if(response.age === null ){
      throw new Error("Falha no processamento : Nome não encontrado")
    }
    resultado.innerHTML = `nome : ${response.name} || idade-media : ${response.age}`
  } catch (err) {
    resultado.innerHTML = err.message
  }finally{
    status.innerHTML = "Fim do Processamento"
  }
}

obterMediaIdade('Gustavo',"BR")

