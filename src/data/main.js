// const request = obj => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open(obj.method, obj.url, true)
//     xhr.send()
  
//     xhr addEventListener('load', () => {
//       if(xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.responseText)
//       } else {
//         reject(xhr.statusText)
//       }
//     })
//   })
//  }

document.addEventListener('click', e=> {
  const el = e.target
  const tag = el.tagName.toLowerCase()

  if(tag === 'a') {
    e.preventDefault()
    carregaPagina(el)
  }
})

function carregaPagina(el) {
  cons href = el.getAttribute('href')

  
    fetch(href)
    .then(response => {
      if(response.status !== 200) throw new Error('ERRO 404!')
     return response.text()
    })
    .then(html => carregaResultado(html))
    .catch(e => console.log(e))
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado')
  resultado.innerHTML = response
}


fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSen22vnTelxrUxgzl5R6iH8JKOdkDhZcPAj8Vh2ZQP945GF5FczLUpwoP1pGH1oKP2nci2HqLL5_mL/pubhtml?gid=665643378&single=true')
  .then(resposta => {
    if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO')
    return resposta.text()
  })
  .then(html => console.log(html))
  .catch(e => console.log(e))
// obj.error({
//   code: xhr.status,
//   msg: xhr.statusText
// })
// https://vonkoln.github.io/race/