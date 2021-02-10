Vue.component('index-page', {
  template: 
  `
  <div>
  <div class="header-section">
    <div class="w-container">
      <a class="blog-home-link w-inline-block" href="index.html">
        <h1 class="blog-name">RINALDI</h1>
      </a>
      <div class="navigation-bar">
        <a class="nav-link" href="index.html">textos</a>
        <a class="nav-link" href="pages/fotos-dela.html">fotos dela</a>
        <a class="nav-link" href="pages/eu-com-ela.html">eu com ela</a>
        <a class="nav-link" href="pages/videos-dela.html">videos dela</a>

      </div>
    </div>
  </div>
  <div class="section">
    <div class="w-container">
      <div class="content-wrapper w-dyn-list">
        <div class="w-dyn-items">
          <div class="blog-post w-dyn-item">
            <a class="post-link w-inline-block" href="textos/amor.html">
              <img class="main-image" sizes="(max-width: 767px) 95vw, (max-width: 991px) 728px, 940px" src="assets/images/home.jpg" height="800">
            </a>
            <div class="heading-wrapper">
              <h1 class="post-heading" data-w-expand="category">Carta de amor</h1>
              <div class="byline-wrapper">
                <div class="byline-text">November 05, 2020</div>
              </div>
            </div>
            <p class="blog-content" style="text-align: center;">Esta é uma carta de amor, abaixo você encontrará um relato do começo de uma história, talvez a mais importante da minha vida!</p>
            <a class="link-to-page" href="textos/amor.html">Ler a carta</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <div class="heading-wrapper">
      <div class="byline-wrapper">
        <a class="byline-link" href="https://www.instagram.com/gustavorinaldii/" target="_blank">Instagram</a>
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
  el: '#app'
})