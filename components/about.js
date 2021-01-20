Vue.component('about', {
  template: 
  `<div>
    <div class="header-section">
      <div class="w-container">
        <a class="blog-home-link w-inline-block" href="../index.html">
          <h1 class="blog-name">RINALDI</h1>
        </a>
        <div class="navigation-bar">
          <a class="nav-link" href="../index.html">textos</a>
          <a class="nav-link" href="about.html">about</a>
          <a class="nav-link" href="fotos-dela.html">fotos dela</a>
          <a class="nav-link" href="eu-com-ela.html">eu com ela</a>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="about-content">
        <img class="about-photo" src="../assets/images/IMG_4990.jpeg"/>
        <div class="profile-text w-richtext">
          <h2>Olá!</h2>
          <p>Nada pensado! &nbsp;</p>
        </div>
      </div>
    </div>
    <div class="center footer">
      <div class="heading-wrapper">
        <div class="byline-wrapper">
          <a class="byline-link" href="https://www.instagram.com/gustavorinaldii/" target="_blank">Instagram</a>
          <a class="byline-link" href="https://www.linkedin.com/in/gustavo-pimentel-rinaldi/" target="_blank">LinkedIn</a>
        </div>
      </div>
    </div>
  </div>`,
  data() {
    return {
      
    }
  }
})

var app = new Vue({
  el: '#about'
})