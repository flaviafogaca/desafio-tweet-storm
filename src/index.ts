/* Roteiro
- criar mensagem ok!
- função para criar array que separa a cada 140 caracteres ok!
- função para separar array pra não cortar palavras ok!
- função para gerenciar paginação ok!
- função para a numeração da paginação contar dentro dos 140 caracteres
*/

// Passo 1: Declarar a mensagem (tweet)
const msg = 'Um resumo é uma apresentação concisa de pontos relevantes de um conteúdo. O resumo simples é um texto que não ultrapassa uma página, destacando os assuntos principais do documento original. Já um resumo expandido é uma versão mais longa, que pode ter entre 4 e 5 páginas, contando com os vários aspectos do conteúdo de origem.'

// Passo 2: Criar função para criar array que separa a cada 140 caracteres sem cortar as palavras
function msgTw(value: string): RegExpMatchArray | null {
  const finalValue = value.match(/.{1,130}(\s|$)/g)
  console.log(finalValue)
  return finalValue
}

msgTw(msg)

// Passo 3:função para gerenciar paginação
const msgPag = msgTw(msg)
const msgPagAt = msgPag!.map(function (e, i) {
  return (`${e}[${i + 1}/${msgPag!.length}]`)
})

console.log(msgPagAt)

// Passo 4: fazer o array respeitar 140 caracteres após paginação