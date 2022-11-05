// Desaio Zenklub: Tweet Storm

// Passo 1: Declarar o texto (tweet)
const msg = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'

// Passo 2: Criar função para criar array que separa a cada 140 caracteres sem cortar as palavras
function msgTw(value: string): RegExpMatchArray | null {
  const finalValue = value.match(/.{1,130}(\s|$)/g)
  console.log(finalValue)
  return finalValue
}

msgTw(msg)

// Passo 3:Criar função para gerenciar paginação
const msgPag = msgTw(msg)
const msgPagAt = msgPag!.map(function (e, i) {
  return (`${e}[${i + 1}/${msgPag!.length}]`)
})

console.log(msgPagAt)

// Sugestão de melhoria - Passo 4: fazer o array respeitar 140 caracteres após paginação