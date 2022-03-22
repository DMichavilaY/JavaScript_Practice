function animate(options) {

    var start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      var timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) timeFraction = 1;
  
      var progress = options.timing(timeFraction)
      
      options.draw(progress);
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }