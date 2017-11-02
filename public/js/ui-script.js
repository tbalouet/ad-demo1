(function(){
  window.onload = function(){
    function onSceneLoaded(){
      document.querySelector("#loaderDiv").classList.remove('make-container--visible');
    }
    (document.querySelector("a-scene").hasLoaded ? onSceneLoaded() : document.querySelector("a-scene").addEventListener("loaded", onSceneLoaded));
  };
})();
