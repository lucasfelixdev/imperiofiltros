document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target); // Anima apenas uma vez
          }
        });
      },
      { threshold: 0.85 } // Quando 10% do elemento é visível
    );
  
    // Seleciona todos os elementos com a classe swing-in-top-fwd
    const elements = document.querySelectorAll(".swing-in-top-fwd");
    elements.forEach(element => observer.observe(element));
  });