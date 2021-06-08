Vue.component('mapa-de-fotos', {
  template: 
  `<div>
    <div class="header-section">
    <div class="w-container">
      <a class="blog-home-link w-inline-block" href="../in.html">
        <h1 class="blog-name">RINALDI</h1>
      </a>
      <div class="navigation-bar">
        <a class="nav-link" href="../in.html">textos</a>
        <a class="nav-link" href="fotos-dela.html">fotos dela</a>
        <a class="nav-link" href="eu-com-ela.html">eu com ela</a>
        <a class="nav-link" href="../pages/videos-dela.html">videos dela</a>
        <a class="nav-link" href="../pages/mapa-de-fotos.html">mapa de fotos</a>
      </div>
    </div>
    </div>
    <div class="container">
      <img src="../assets/images/mapa.png" class="d-block mx-auto img-fluid">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
    </div>`,
  data() {
    return {
      
    }
  }
})

var app = new Vue({
  el: '#mapa-de-fotos'
})