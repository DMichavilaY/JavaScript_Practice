pared.onclick = function() {

    let ended = false;

    pared.addEventListener('transitionend', function() {
      if (!ended) {
        ended = true;
        alert('Imagen ampliada!');
      }
    });

    pared.classList.add('growing');
  }