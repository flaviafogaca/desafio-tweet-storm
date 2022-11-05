// Desaio Zenklub: Tweet Storm

// Passo 1: Declarar o texto (tweet)
const text = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'

// Passo 2: Criar função para criar array que separa a cada 140 caracteres sem cortar as palavras
function textTweet(value: string): RegExpMatchArray | null {
  const finalValue = value.match(/.{1,130}(\s|$)/g)
  console.log(finalValue)
  return finalValue
}

textTweet(text)

// Passo 3:Criar função para gerenciar paginação
const textPagination = textTweet(text)
const textFinal = textPagination!.map(function (e, i) {
  return (`${e}[${i + 1}/${textPagination!.length}]`)
})

console.log(textFinal)

// Sugestão de melhoria - Passo 4: fazer o array respeitar 140 caracteres após paginação