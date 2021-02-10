Vue.component('videos-dela', {
  template: 
  `
  <div>
    <div class="header-section">
    <div class="w-container">
      <a class="blog-home-link w-inline-block" href="../index.html">
        <h1 class="blog-name">RINALDI</h1>
      </a>
      <div class="navigation-bar">
        <a class="nav-link" href="../index.html">textos</a>
        <a class="nav-link" href="fotos-dela.html">fotos dela</a>
        <a class="nav-link" href="eu-com-ela.html">eu com ela</a>
        <a class="nav-link" href="../pages/videos-dela.html">videos dela</a>
      </div>
    </div>
    </div>
    <div class="container">
      <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
          <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"></li>
          <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <iframe class="embed-responsive-item" src="../assets/videos/video1.mp4" allowfullscreen></iframe>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <iframe class="embed-responsive-item" src="../assets/videos/video2.mp4" allowfullscreen></iframe>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <iframe class="embed-responsive-item" src="../assets/videos/video3.mp4" allowfullscreen></iframe>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <iframe class="embed-responsive-item" src="../assets/videos/video4.mp4" allowfullscreen></iframe>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <iframe class="embed-responsive-item" src="../assets/videos/video5.mp4" allowfullscreen></iframe>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <iframe class="embed-responsive-item" src="../assets/videos/video6.mp4" allowfullscreen></iframe>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <iframe class="embed-responsive-item" src="../assets/videos/video7.mp4" allowfullscreen></iframe>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <iframe class="embed-responsive-item" src="../assets/videos/video8.mp4" allowfullscreen></iframe>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <iframe class="embed-responsive-item" src="../assets/videos/video9.mp4" allowfullscreen></iframe>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <iframe class="embed-responsive-item" src="../assets/videos/video10.mp4" allowfullscreen></iframe>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <iframe class="embed-responsive-item" src="../assets/videos/video11.mp4" allowfullscreen></iframe>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <iframe class="embed-responsive-item" src="../assets/videos/video12.mp4" allowfullscreen></iframe>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <iframe class="embed-responsive-item" src="../assets/videos/video13.mp4" allowfullscreen></iframe>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <iframe class="embed-responsive-item" src="../assets/videos/video14.mp4" allowfullscreen></iframe>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <iframe class="embed-responsive-item" src="../assets/videos/video15.mp4" allowfullscreen></iframe>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <iframe class="embed-responsive-item" src="../assets/videos/video16.mp4" allowfullscreen></iframe>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <iframe class="embed-responsive-item" src="../assets/videos/video17.mp4" allowfullscreen></iframe>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <iframe class="embed-responsive-item" src="../assets/videos/video18.mp4" allowfullscreen></iframe>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <iframe class="embed-responsive-item" src="../assets/videos/video19.mp4" allowfullscreen></iframe>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"ria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon"ria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
    </div>
    <div class="text-center mt-5 mb-5">
        <h3>Talvez um dia eu tenha sensação de merecimento, mesmo sabendo que não teria esse mérito nunca! &hearts;</h3>
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
    </div>
  </div>
  `,
  data() {
    return { 
      
    }
  }
})

var app = new Vue({
  el: '#videos-dela'
})