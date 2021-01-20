Vue.component('fotos-dela', {
  template: 
  `<div>
    <div class="header-section">
    <div class="w-container">
      <a class="blog-home-link w-inline-block" href="index.html">
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
    <div class="container">
      <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
          <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"></li>
          <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="../assets/images/ela/0926A7AD-906A-44D3-817F-D6D3742D0F86.jpg" class="d-block mx-auto img-fluid">
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="../assets/images/ela/0AD951AA-8642-426B-9482-706DD1E82213.jpg" class="d-block mx-auto img-fluid">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/ela/0FBA9DF5-1D31-4DFE-A58C-2E29B74F3A1C.jpg" class="d-block mx-auto img-fluid">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/ela/135E45FA-E09D-4F26-BCEB-E9A423E59E22.jpg" class="d-block mx-auto img-fluid">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/ela/18989258-52B5-48C2-A5AF-0E0EEFC3C792.jpg" class="d-block mx-auto img-fluid">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/ela/268B3BB2-CD1D-4BF8-999C-3E31E323A576.jpg" class="d-block mx-auto img-fluid">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/ela/42B430E6-F946-40BA-975A-677ECE1D10F0.jpg" class="d-block mx-auto img-fluid">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/ela//54AA4F62-82D3-462B-A32A-530CD68C71A1.jpg" class="d-block mx-auto img-fluid">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/ela/80CB7526-2AC3-4F96-AF52-1BE99D46CE10.jpg" class="d-block mx-auto img-fluid">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/ela/CFB6861E-C783-49FA-A7AE-28A62779278F.JPG" class="d-block mx-auto img-fluid">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/ela/DA0B72CD-A11F-48BC-85CC-B5DB5D27186C.JPG" class="d-block mx-auto img-fluid">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/ela/DD130A09-416E-45E8-AD71-D6533B6705EA.jpg" class="d-block mx-auto img-fluid">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/ela/IMG_6039.PNG" class="d-block mx-auto img-fluid">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/ela/IMG_6052.PNG" class="d-block mx-auto img-fluid">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/ela/IMG_6156.PNG" class="d-block mx-auto img-fluid">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/ela/IMG_7490.PNG" class="d-block mx-auto img-fluid">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/ela/IMG_7589.PNG" class="d-block mx-auto img-fluid">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/ela/IMG_7592.PNG" class="d-block mx-auto img-fluid">
          </div>
          <div class="carousel-item">
            <img src="../assets/images/ela/IMG_7916.jpeg" class="d-block mx-auto img-fluid">
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
    </div>`,
  data() {
    return {
      
    }
  }
})

var app = new Vue({
  el: '#fotos-dela'
})