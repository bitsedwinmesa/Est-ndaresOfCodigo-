// standard ES5
(function () {
'use strict';

  class PersonaGreat {
    constructor(name, career, language) {
      this.name = prompt('Cual es tu nombre?');
      this.career = prompt('Cual es tu carrera?');
      this.language = prompt('Que lenguanje te gusta?');
    }

    getBiografia() {
      // Declaration of var
      var messange = 'Gracias ' +
                    PERS_LEARNING.name + ' por leer este documento eres '+ // make line break for large text.
                    PERS_LEARNING.career + ' eso es genial y te gusta '+// make line break for large text.
                    PERS_LEARNING.language + ' es estupendo vamos a mejorar. :)';// make line break for large text.
      // Insert in the DOM
      document.getElementById("insert-dom").innerHTML = messange;
    }
  }

  // Used UPPERCASE.
  const PERS_LEARNING = new PersonaGreat('Ana', 'Administradora', 'python');
  PERS_LEARNING.getBiografia();

  //Example of Ifwith space after and before of condition.
  if (PERS_LEARNING.language == "Drupal") {
    console.log('Es el mejor cms');
  }

}());
