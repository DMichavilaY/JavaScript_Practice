var v_width = window.innerWidth;
            var y_height = window.innerHeight;

            var box_top = 0;
            var box_left = 0;


            function mover(e) {
                v_width = window.innerWidth;
                y_height = window.innerHeight;

                switch (e.code) {
                    case 'ArrowLeft':
                        if ((box_left - 10) > 0) {
                            box_left -= 10;
                            cuadrado.style.left = box_left + 'px';
                        } else {
                            cuadrado.style.left = 0 + 'px';
                        }
                        break;
                    case 'ArrowRight':
                        if ((box_left + 110) < v_width) {
                            box_left += 10;
                            cuadrado.style.left = box_left + 'px';
                        } else {
                            cajaCubo.style.top = (v_width -100) + 'px';
                        }
                        break;
                    case 'ArrowDown':
                        if ((box_top + 110) < y_height) {
                            box_top += 10;
                            cuadrado.style.top = box_top + 'px';
                        } else {
                            cuadrado.style.top = (y_height -100) + 'px';
                        }
                        break;
                    case 'ArrowUp':
                        if ((box_top - 10) > 0) {
                            box_top -= 10;
                            cuadrado.style.top = box_top + 'px';
                        } else {
                            cuadrado.style.top = 0 + 'px';
                        }
                        break;
                }
            }

            window.onkeydown = mover;