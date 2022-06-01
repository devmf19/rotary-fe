<template>
  <div class="index">
    <!-- 
    <h1>{{ msg }}</h1>
    -->
    <section class="about-us">
      <div class="about-us-grid">
        <div class="text-us">
          <h2>Sobre nosotros</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            eligendi! Fugit, ut atque similique velit possimus sint cupiditate
            dicta veniam, accusantium ratione ipsa nihil distinctio laborum
            nulla quia facere dolorem.
          </p>

          <p>
            Sample text. Click to select the text box. Click again or double
            click to start editing the text. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            cupiditate laborum quia dolorem. Dolorum ullam odio in laboriosam
            nesciunt voluptates, tempora inventore odit, doloremque enim
            perferendis rem dignissimos, corporis explicabo.
          </p>
        </div>
      </div>
    </section>

    <section class="learn-more">
      <div class="info">
        <h2>Lo que hacemos</h2>
        <p>
          Sample text. Click to select the text box. Click again or double click
          to start editing the text. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>

        <a href="#" class="btn">Saber más</a>
      </div>
      <div class="images">
        <div class="image-circle image-1"></div>
        <div class="image-circle image-2"></div>
        <div class="image-circle image-3"></div>
        <div class="image-circle circle-1"></div>
        <div class="image-circle circle-2">
          <div class="image-circle circle-3"></div>
        </div>
      </div>
    </section>

    <section class="banner"></section>

    <section class="banner-2"></section>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*SOBRE NOSOTROS*/
.about-us {
  height: 700px;
  background-image: linear-gradient(
      to right,
      transparent 50%,
      #006778 50%,
      #00afc1 100%
    ),
    url("../assets/hero-image.jpg");
  background-position: center top;
  background-repeat: no-repeat;
  padding: 10rem 0;
  background-size: 100%, 160rem;
}

.about-us-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10rem;
}

.text-us {
  grid-column: 2 / 3;
  color: #ffffff;
}

/*LEARM MORE*/

.learn-more .info {
  margin-bottom: 170px;
}

.learn-more .info h2 {
  font-size: 50px;
  margin: 70px auto 0;
  text-align: center;
}

.learn-more .info p {
  width: 680px;
  margin: 24px auto 0;
  text-align: center;
  margin-top: 50px;
}

.learn-more .info .btn {
  display: block;
  width: 200px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border: 1px solid #0093ab;
  border-radius: 35px;
  color: #0093ab;
  margin: 20px auto 0;
  padding: 7px 38px;
  transition: all 0.3s ease-in-out;
}

.learn-more .info .btn:hover {
  border: 1px solid #fff;
  background-color: #0093ab;
  color: #fff;
}

.images {
  height: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-circle {
  border-radius: 50%;
  object-fit: cover;
  display: block;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}

.image-1 {
  width: 300px;
  height: 300px;
  background-image: url("../assets/learn-more-1.jpg");
  margin-top: -120px;
  margin-left: -800px;
  border: 3px solid #fff;
}

.image-2 {
  width: 400px;
  height: 400px;
  background-image: url("../assets/learn-more-2.jpg");
  margin-top: -180px;
  margin-left: -260px;
  border: 3px solid #fff;
}

.image-3 {
  width: 300px;
  height: 300px;
  background-image: url("../assets/learn-more-3.jpg");
  margin-top: -500px;
  margin-left: 750px;
  border: 3px solid #fff;
}

/*circles */

.circle-1 {
  background: #ffd124;
  width: 200px;
  height: 200px;
  margin-top: 50px;
  margin-left: 200px;
  border: 3px solid #fff;
}

.circle-2 {
  background: #00afc1;
  width: 164px;
  height: 164px;
  margin-top: -590px;
  margin-left: 400px;
  border: 3px solid #fff;
  display: flex;
  justify-content: center;
}

.circle-3 {
  background: #fff;
  width: 100px;
  height: 100px;
  margin: auto;
}

/*BANNER */
.banner {
  height: 500px;
  background: #00afc1;
}

.banner-2 {
  margin-top: 50px;
  height: 300px;
  background: #006778;
}
</style>
