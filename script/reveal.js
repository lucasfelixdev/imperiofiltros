window.revelar = ScrollReveal({reset:false})

revelar.reveal('.slideUp',{
    distance: '20px',
    origin: 'bottom',
    duration: 1800,
    delay: 350

})

revelar.reveal('.slideUp2',{
    distance: '10px',
    origin: 'bottom',
    duration: 2500,
    delay: 600

})

revelar.reveal('.slideLeft',{
    distance: '30px',
    origin: 'left',
    duration: 2500,
    delay: 500

})

revelar.reveal('.slideRight',{
    distance: '50px',
    origin: 'right',
    duration: 1800,
    delay: 450

})


revelar.reveal('.slideTop',{
    distance: '50px',
    origin: 'top',
    duration: 1800,
    delay: 450

})



// Configuração para elementos que apenas "aparecem" (slideBottom)
revelar.reveal('.slideBottom', {
    opacity: 0,       // Começa com opacidade 0
    duration: 2500,
    easing: 'ease-in-out',   // Define um easing suave
    reset: true      // Não reaparece ao rolar de volta
});

