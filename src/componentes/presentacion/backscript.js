addEventListener('DOMContentLoaded', ()=>{


  function randomValues(iterationCount) {
    // Verificar si se alcanzó el número deseado de iteraciones
    if (iterationCount >= 2) {
      return;
    }
    anime({
      targets: '.square, .circle, .triangle',
      translateX: function() {
        return anime.random(-500, 500);
      },
          translateY: function() {
        return anime.random(-300, 300);
      },
          rotate: function() {
              return anime.random(0, 360);
          },
          scale: function() {
              return anime.random(.2, 2);
          },
      duration: 1250,
      easing: 'easeInOutQuad',
      complete: function() {
        // Llamar recursivamente con la siguiente iteración
        randomValues(iterationCount + 1);
      },
      });
  }
  
  randomValues(0);
})