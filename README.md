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