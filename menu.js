
window.addEventListener("scroll", function(){
    let header = document.querySelector('.cabeçalho')
    header.classList.toggle('rolagem', window.scrollY > 350)
})