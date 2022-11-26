/*
Existe a API 'Random User Generator', que gera usuários fakes para fins de testes e protótipos.
Vamos usá-la para praticar e consumir APIs com promises.

A URL da API é esta abaixo, onde o argumento 'results' representa a quantidade de resultados que queremos retornar:
https://randomuser.me/api/?results=4

Verifique a documentação e exemplo de retorno em:
Random User Generator | Documentation, ou
faça uma chamada para a API (no navegador ou console) para verificar um exemplo de resultado.

Com base no json de retorno, monte uma página web com layout semelhante ao anexo, contendo dados de usuários de sistema com
foto, título, nome, sobrenome, e-mail e endereço completo.
O layout (css) é livre, desde que apresente as informações solicitadas.

Dicas:
a) Perceba que os resultados ficam dentro do campo 'results' do json de retorno;
b) Para a foto, use a versão grande do campo 'picture': 'large' (grande);
c) Para o nome, use os campos de 'name': 'title' (título), 'first' (nome), 'last' (sobrenome);
d) Para o endereço, use os campos de 'location': 'street' (rua), 'city' (cidade), 'state' (estado), 'country' (país);
e) Como é uma chamada remota para o serviço, o resultado pode demorar alguns segundos para retornar.

extra:
Adicione um campo para que o usuário selecione a quantidade de itens que deseja exibir
 */

const status = document.getElementById('status');
const lista = document.getElementById('list');
const URL_BASE = 'https://randomuser.me/api/'

async function get (url, params) {
  try{
    const response = await fetch(url + '?' + new URLSearchParams(params))
    const data = await response.json()
    return data.results
  }catch(err){
      throw new Error("Falha no processamento : "+ err.message)
  }
}

function createCard(nome,email,img,endereco){
  const div = document.createElement('li');
  div.className = "card"
  const image = document.createElement('img');
  const innerDiv = document.createElement('div');
  const name = document.createElement('h4');
  const mail = document.createElement('p');
  const address = document.createElement('span');

  image.src = img;
  image.alt = "Foto do usuário";

  name.innerHTML = nome;
  mail.innerHTML = email;
  address.innerHTML = endereco;

  innerDiv.appendChild(name);
  innerDiv.appendChild(mail);
  innerDiv.appendChild(address);

  div.appendChild(image);
  div.appendChild(innerDiv);

  lista.appendChild(div);
}




async function obterUsuarios(results = {results:4}){
  status.innerHTML = "carregando..."; 
  try {
    const response = await get(URL_BASE,results);
    
    response.forEach(result => { 
      console.log(result)
      let nome = `${result.name.title} ${result.name.first} ${result.name.last}`;
      let {email} = result
      let {large:img} = result.picture
      let endereco = `${result.location.street.name} - ${result.location.number} ${result.location.state} - ${result.location.city} - ${result.location.country}`
      createCard(nome,email,img,endereco);
    });

   // lista.innerHTML = `O preço do Bitcoin - ${response.symbol} em dólares hoje é $ ${ Math.round(response.priceUsd)}`
  } catch (err) {
    lista.innerHTML = err.message
  }finally{
    status.innerHTML = "Fim do Processamento"
  }
}

obterUsuarios()

