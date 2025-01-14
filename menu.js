
window.addEventListener("scroll", function(){
    let header = document.querySelector('.cabeçalho')
    header.classList.toggle('rolagem', window.scrollY > 350)
})

let boxbuscar = document.querySelector('.btn-pesquisa')
let lupa = document.querySelector('.img-pesquisa')
let fechar = document.querySelector('.btn-fechar')

lupa.addEventListener('click', ()=> {
    boxbuscar.classList.add('expanção')
})
fechar.addEventListener('click', ()=> {
    boxbuscar.classList.remove('expanção')
})