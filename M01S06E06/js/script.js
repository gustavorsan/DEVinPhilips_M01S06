/*Existe uma API pública que retorna a idade média das pessoas que possuem o nome passado como parâmetro.
Para o cálculo, é usada uma base de dados interna deles, que pode ser subdividida pelo país passado também como parâmetro.

Faça uma chamada para esta API e descubra a idade média das pessoas com seu nome aqui no Brasil, conforme exemplo abaixo.
Imprima o nome e a idade média retornados.
A idade está representada na propriedade 'age' do retorno da API:

https://api.agify.io/?country_id=BR&name=thais

Obs.: Se seu nome não constar na base deles (age == null), usar outro nome para os testes.*/
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

