(function(){
  window.addEventListener("load", function load(event){
    window.removeEventListener("load", load, false); //remove listener, no longer needed

    function onSceneLoaded(){
      document.querySelector("#loaderDiv").classList.remove('make-container--visible');
    }
    (document.querySelector("a-scene").hasLoaded ? onSceneLoaded() : document.querySelector("a-scene").addEventListener("loaded", onSceneLoaded));

    document.querySelector("#butOK").addEventListener("click", function(){
      document.querySelector("#amazingGrace2011").play();
    });
  },false);
})();
