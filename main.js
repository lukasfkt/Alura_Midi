const teclas = document.querySelectorAll('.tecla')

teclas.forEach(tecla => {
  const instrumento = tecla.classList[1]
  const som = `#som_${instrumento}`
  tecla.addEventListener('click', function () {
    tocaSom(som)
  })
  tecla.addEventListener('keydown', function (evento) {
    if (evento.code == 'Space' || evento.code == 'Enter')
      tecla.classList.add('ativa')
  })
  tecla.addEventListener('keyup', function () {
    tecla.classList.remove('ativa')
  })
})

function tocaSom(som) {
  const elemento = document.querySelector(som)

  if (elemento != null && elemento.localName === 'audio') elemento.play()
  else console.log('Elemento não encontrado')
}
