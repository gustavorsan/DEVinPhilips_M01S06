# DEVinPhilips_M01S06

## [M1S06] Ex 1 - Sleep
Crie uma função chamada sleep, que recebe como argumento um valor qualquer.

Quando chamada, essa função precisa retornar, após 3 segundos (setTimeout), uma Promise resolvida com o valor que foi passado como argumento.
Chame esta função e confirme o funcionamento dela (lembre-se que o valor do tempo de espera é aproximado!)

## [M1S06] Ex 2 - Timer
Utilizando o setInterval, crie uma função que mostre o horário atual e atualize automaticamente a cada 2 segundos.

O horário deve ser mostrado no formato HH:MM:SS.

## [M1S06] Ex 3 - Promise (all)
Para aprovação de um empréstimo, um banco usa as funções descritas abaixo:
- Aprovação do cadastro pessoal
- Aprovação do valor solicitado
Ambas retornam uma promise para fazer o processamento em segundo plano (no código, este processamento está simulado).

Para o cliente instanciado no código abaixo, foram executadas ambas as funções e criadas variáveis para armazenar este retorno.

Usando o método 'Promise.all()', recupere o resultado de ambas as promises e imprima 'APROVADO' ou 'REPROVADO', conforme os resultados das promises forem resolvidos ou rejeitados.

Por fim, imprima a frase 'Fim do Processamento', qualquer que seja o resultado (resolve ou reject) das promises ('finally').
~~~
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

// continue com o tratamento dos resultados de ambas as promises...
~~~

## [M1S06] Ex 4 - Promise (race)
O sistema de uma empresa, após efetuar a venda, chama funções remotas de duas empresas de entrega dos pedidos, e aquela que responder mais rápido nossa requisição fica responsável pela entrega.

O retorno das chamadas foram adicionados nas constantes abaixo: 'retornoEmpresa1' e 'retornoEmpresa2'.

Usando 'Promise.race()', recupere o valor da promise da empresa vencedora e imprima o resultado.

~~~
const retornoEmpresa1 = new Promise( (resolve, reject) => 
    setTimeout(resolve, 5000, "Empresa 1") ); // 5 segundos
const retornoEmpresa2 = new Promise( (resolve, reject) => 
    setTimeout(resolve, 3000, "Empresa 2") ); // 3 segundos
~~~

## [M1S06] Ex 5 - async-await

Altere as funções abaixo usando async-await para retorno e tratamento de promises:
~~~
function obterClienteNoBancoDeDados(idCliente) {
    return new Promise( (resolve, reject) => {
            const cliente = { nome: 'bruce wayne', id: idCliente };
            resolve(cliente);
    });
}

function processar() {
    obterClienteNoBancoDeDados(7)
        .then(cliente => console.log(cliente));
}

processar();
~~~

## [M1S06] Ex 6 - Fetch
Existe uma API pública que retorna a idade média das pessoas que possuem o nome passado como parâmetro.
Para o cálculo, é usada uma base de dados interna deles, que pode ser subdividida pelo país passado também como parâmetro.

Faça uma chamada para esta API e descubra a idade média das pessoas com seu nome aqui no Brasil, conforme exemplo abaixo.
Imprima o nome e a idade média retornados.
A idade está representada na propriedade 'age' do retorno da API:

https://api.agify.io/?country_id=BR&name=gustavo

Obs.: Se seu nome não constar na base deles (age == null), usar outro nome para os testes.

## [M1S06] Ex 7 - Fetch
Quanto será que está a preço do Bitcoin hoje???
Vamos descobrir!

Obtenha os dados nessa API : https://api.coincap.io/v2/assets/bitcoin, imprima a frase:
'O preço do Bitcoin - <simbolo do bitcoin> em dólares hoje é $ <preço do bitcoin>`.

Dicas:
a) Repare que o retorno desta API encapsula os dados dentro de um objeto 'data'.
b) Use as propriedades 'symbol' e 'priceUsd' do retorno para preencher os valores na frase.