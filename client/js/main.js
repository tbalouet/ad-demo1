//Main file served by the application
(function(){
  "use strict";

  //Samsung VR browser background
  if ('SamsungChangeSky' in window) {
    window.SamsungChangeSky({ sphere: '/public/samsung_background.jpg' });
  }

  window.onload = function(){
    function onSceneLoaded(){
      document.querySelector("#loaderDiv").classList.remove('make-container--visible');
    }
    (document.querySelector("a-scene").hasLoaded ? onSceneLoaded() : document.querySelector("a-scene").addEventListener("loaded", onSceneLoaded));
  };

  console.log("David by Michelangelo(https://sketchfab.com/models/8f4827cf36964a17b90bad11f48298ac) by jerryfisher(https://sketchfab.com/jerryfisher) is licensed under CC Attribution(http://creativecommons.org/licenses/by/4.0/)");
  console.log("Landscape gallery by @stoneysteiner(https://sketchfab.com/models/3702735762544e5796be4740cb6d5efc) by stoneysteiner(https://sketchfab.com/stoneysteiner) is licensed under CC Attribution(http://creativecommons.org/licenses/by/4.0/)");
  console.log("Ikea Συρταριέρα Tarva(https://sketchfab.com/models/dac06400bc854401a03751d7745796d0) by Kostas Kyrsanidis(https://sketchfab.com/3Dreamer) is licensed under CC Attribution(http://creativecommons.org/licenses/by/4.0/)");
  console.log("Huawei Y560 4G Mobile Phone(https://sketchfab.com/models/45c813a9fac4458ead1f90280826c0a4) by Amir Olphat(https://sketchfab.com/amirolfat) is licensed under CC Attribution(http://creativecommons.org/licenses/by/4.0/)");
  console.log("Bench(https://sketchfab.com/models/2df6520aaaaf4387b73b1d9deb1d122b) by Natalie Hirst(https://sketchfab.com/NatalieHirst) is licensed under CC Attribution(http://creativecommons.org/licenses/by/4.0/)");
  console.log("Free Hololens Model + Textures(https://sketchfab.com/models/778725c25ea94055ac330436be76c8df) by EdgeFlow Studio(https://sketchfab.com/edgeflowstudio) is licensed under CC Attribution(http://creativecommons.org/licenses/by/4.0/)");
  console.log("Tablet Display Stands(https://sketchfab.com/models/f4ee331f1a694a56932f15b94daa79fc) by YouniqueĪdeaStudio(https://sketchfab.com/sinnervoncrawsz) is licensed under CC Attribution(http://creativecommons.org/licenses/by/4.0/)");
})();
