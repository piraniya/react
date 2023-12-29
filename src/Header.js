import './assets/css/style.css';

function Header() {
    return (
      <div className="Header">
        
          <header id="header" class="header fixed-top">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt=""/>
        <span>FlexStart</span>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link scrollto" href="#portfolio">Portfolio</a></li>
          <li><a class="nav-link scrollto" href="#team">Team</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>

          <li class="dropdown megamenu"><a href="#"><span>Mega Menu</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li>
                <a href="#">Column 1 link 1</a>
                <a href="#">Column 1 link 2</a>
                <a href="#">Column 1 link 3</a>
              </li>
              <li> 
                <a href="#">Column 2 link 1</a>
                <a href="#">Column 2 link 2</a>
                <a href="#">Column 3 link 3</a>
              </li>
              <li>
                <a href="#">Column 3 link 1</a>
                <a href="#">Column 3 link 2</a>
                <a href="#">Column 3 link 3</a>
              </li>
              <li>
                <a href="#">Column 4 link 1</a>
                <a href="#">Column 4 link 2</a>
                <a href="#">Column 4 link 3</a>
              </li>
            </ul>
          </li>

          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a class="getstarted scrollto" href="#about">Get Started</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
          
  
      <Hero></Hero>
      <About></About>
      
      </div>
    );
  }

  

  function Hero() {
    return (
      <div className="Hero">
        <section id="hero" class="hero d-flex align-items-center">

<div class="container">
  <div class="row">
    <div class="col-lg-6 d-flex flex-column justify-content-center">
      <h1 data-aos="fade-up">We offer modern solutions for growing your business</h1>
      <h2 data-aos="fade-up" data-aos-delay="400">We are team of talented designers making websites with Bootstrap</h2>
      <div data-aos="fade-up" data-aos-delay="600">
        <div class="text-center text-lg-start">
          <a href="#about" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
            <span>Get Started</span>
            <i class="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
      <img src={require("./assets/img/features-2.png")} class="img-fluid" alt=""/>
    </div>
  </div>
</div>

</section>
         
  
        
      </div>
    );
  }
  
  function About() {
    return (
      <div className="About">
         <section id="about" class="about">

<div class="container" data-aos="fade-up">
  <div class="row gx-0">

    <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
      <div class="content">
        <h3>Who We Are</h3>
        <h2>Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</h2>
        <p>
          Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
        </p>
        <div class="text-center text-lg-start">
          <a href="#" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
            <span>Read More</span>
            <i class="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
    <img src={require("./assets/img/features.png")} class="img-fluid" alt=""/>
    </div>

  </div>
</div>

</section>
         
  
        
      </div>
    );
  }
  
 


  export default Header;
