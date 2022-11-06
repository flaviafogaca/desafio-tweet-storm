<h1 align="center"> Desafio Zenklub: Tweet Storm </h1>

## 💻 Descrição do Projeto

Esse projeto consiste em criar uma função que recebe um texto qualquer e o transforme em
um tipo de tweet storm.

### 📝 Requisitos

<ul>
  <li>O projeto deve ser elaborado com Typescript :heavy_check_mark:</li> 
  <li>O projeto deve quebrar o texto em blocos menores de até 140 caracteres considerando a paginação como parte do texto :heavy_check_mark:</li>
  <li>O projeto deve quebrar o texto em blocos menores de até 140 caracteres considerando a paginação como parte do texto para qualquer tamanho de texto :x:</li>
  <li>O projeto deve colocar paginação em todos os seus tweets, indicando sempre no seguinte formato: [PÁGINA ATUAL]/[TOTAL DE PÁGINAS] :heavy_check_mark:</li>
  <li>O projeto não deve cortar palavras ao realizar a quebra do texto :heavy_check_mark:</li> 
  <li>O projeto deve ser validado por testes automatizados :x:</li>
</ul>

### ✍ Sugestão de melhoria

O projeto criado funciona para posts comuns de usuários, limitando as frases em 130 caracteres e reservando 10 caracteres para a paginação. Para atender posts que tenham grande número de páginas, será necessário a criação de uma função que possa reservar espaço para textos maiores. 

### 🚀 Tecnologias utilizadas 

<ul>
    <li>Typescript
</ul>

### 📣 Utilização

1. No terminal do editor de código utilizado, rodar o comando `npm install`
2. Entrar no arquivo raiz do projeto: `src/index.ts`
3. No arquivo, inserir no campo `const text = ' '` o texto desejado e salvar a modificação:

```json
  "const text = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'"
```

4. No terminal do editor de código utilizado, rodar o comando `npm run start:dev`
5. Saída esperada no terminal: 

```json 
  [
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 [1/2]",
    "BC, making it over 2000 years old.[2/2]"
  ]
```
</br>
<p align="center">
  <a href="https://github.com/flaviafogaca">Criado por Flávia Fogaça<img src="https://github.githubassets.com/images/icons/emoji/octocat.png"></a>
</p>