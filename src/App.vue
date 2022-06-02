<template>
  <div id="app" class="app">
    <!--HEADER-->
    <div class="header">
      <nav class="header-nav">
        <div class="nav-logo">
          <router-link to="/">
            <a href="#"><h1>Rotary</h1></a>
          </router-link>
        </div>

        <div class="nav-menu">
          <ul>
            <li class="buttons">
              <a href="#">Acerca de nosotros</a>
            </li>
            <li class="buttons">
              <a href="#">Ayuda</a>
            </li>
            <li class="buttons">
              <a href="#">Quienes somos</a>
            </li>
            <li class="buttons">
              <a href="#">Politica</a>
            </li>
          </ul>
        </div>

        <div class="nav-buttons-right">
          <ul>
            <li class="buttons">
              <router-link to="/logIn">
                <a href="#" class="btn">Ingresar</a>
              </router-link>
            </li>
            <li class="buttons">
              <router-link to="/signUp">
                <a href="#" class="btn">Registrarse</a>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="body">
      <router-view />
    </div>

    <footer>
      <div class="footer-info">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat id,
          incidunt esse voluptates officia, perspiciatis quia quae debitis
          aliquid modi porro quos! Et, rem suscipit dolore explicabo iste
          dignissimos architecto.
        </p>
      </div>
      <div class="social-media-links">
        <ul>
          <li>
            <a href="#">
              <img
                src="src\assets\facebook-circle-50.png"
                alt="facebook"
                width="50"
                height="50"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="src\assets\instagram-circle-50.png"
                alt="instagram"
                width="50"
                height="50"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="src\assets\twitter-circle-50.png"
                alt="twitter"
                width="50"
                height="50"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  box-sizing: border-box;
}

body {
  margin: 0 0 0 0;
  font-family: "Montserrat", sans-serif;
}

a {
  text-decoration: none;
}

ul {
  list-style: outside none none;
}

/*HEADER STYLES*/
.header {
  background-color: #fff;
  height: 120px;
  margin: 0;
  text-align: center;
}

.header-nav {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.nav-logo a h1 {
  font-size: 30px;
  color: #0093ab;
  margin: 10px auto 0;
  width: 120px;
  transition: all 0.6s ease-in-out;
}

.nav-menu {
  width: 100%;
  height: 0;
  margin: 10px 10px;
  font-size: 12px;
  transform: translateX(-700px);
  transition: all 0.6s ease-in-out;
}
.nav-menu ul {
  display: flex;
  gap: 15px;
}

.nav-menu ul li a {
  color: #0093ab;
}

.nav-menu ul li a:hover {
  font-weight: bold;
}

.nav-buttons-right ul {
  display: flex;
  gap: 20px;
  margin: 0 auto;
  padding-inline-start: 0px;
  padding-inline-end: 0px;
  width: 260px;
}

.nav-buttons-right ul li .btn {
  border: 1px solid #0093ab;
  border-radius: 35px;
  color: #0093ab;
  display: block;
  font-size: 12x;
  font-weight: bold;
  padding: 10px 0;
  width: 120px;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;
}

.nav-buttons-right ul li .btn:hover {
  border: 1px solid #fff;
  background-color: #0093ab;
  color: #fff;
}

@media only screen and (min-width: 700px) {
  .header {
    height: 70px;
    margin: 0 10px;
  }

  .header-nav {
    flex-direction: row;
  }

  .nav-menu {
    position: relative; /* Fixed position on mobile */
    transform: translateX(0);
  }

  .nav-menu ul {
    flex-direction: row;
    gap: 20px;
  }

  .nav-buttons-right ul {
    margin: 20px auto 0;
    width: 260px;
  }

  .nav-buttons-right ul li .btn {
    display: block;
    width: 120px;
    font-size: 14px;
    padding: 7px 0;
  }
}

@media only screen and (min-width: 1005px) {
  .nav-logo a h1 {
    width: 100%;
    font-size: 60px;
    margin-top: -7px;
  }
}

/*FOOTER*/
footer {
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.footer-info {
  display: flex;
  align-items: center;
  margin: 0 50px;
}

.footer-info p {
  color: #797777;
}

footer div.social-media-links {
  height: 200px;
  padding-bottom: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer div.social-media-links ul {
  margin: 0;
  padding: 0;
}

footer div.social-media-links li {
  display: inline;
  margin: 0;
  padding: 0;
}
</style>

