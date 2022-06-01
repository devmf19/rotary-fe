<template>
  <div class="signUp">
    <main>
      <div class="container">
        <div class="background-left"></div>

        <div class="container-signUp">
          <h3>Complete el formulario</h3>

          <form>
            <p>
              <label>Nombres</label>
              <input type="text" name="name" class="textfield" />
            </p>

            <p>
              <label>Apellidos</label>
              <input type="text" name="company" class="textfield" />
            </p>

            <p>
              <label>Nacionalidad</label>
              <input type="text" name="email" class="textfield" />
            </p>

            <p>
              <label>Ciudad</label>
              <input type="text" name="phone" class="textfield" />
            </p>

            <p>
              <label>Tipo de documento</label>
              <input type="text" name="name" class="textfield" />
            </p>

            <p>
              <label>N° de documento</label>
              <input type="text" name="company" class="textfield" />
            </p>

            <p>
              <label>Fecha de nacimiento</label>
              <input type="text" name="email" class="textfield" />
            </p>

            <p>
              <label>Correo</label>
              <input type="text" name="phone" class="textfield" />
            </p>

            <input type="submit" class="btn" value="Registrarse" />
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "SignUpPage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}

.container {
  display: flex;
}

.background-left {
  width: 50%;
  height: 688px;
  margin-right: 10px;
  background: linear-gradient(180deg, #006778 8.85%, #00afc1 90.62%);
  border-top-right-radius: 500px;
  border-bottom-right-radius: 500px;
}

.container-signUp {
  margin: 0 auto;
}

.container-signUp h3 {
  display: block;
  width: 400px;
  margin: 40px auto 40px;
  font-size: 30px;
  color: #0093ab;
}

.container-signUp p {
  margin: 0;
}

.container-signUp form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
}

.container-signUp form label {
  display: block;
  color: #797777;
  margin-bottom: 10px;
}

.textfield {
  background-color: #f3f3f3;
  color: #797777;
  font-size: 18px;
  height: 53px;
  width: 300px;
  font-weight: normal;
  border: none;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
}

.btn {
  grid-column: 1/3;
  background-color: #f6b54d;
  color: #fff;
  cursor: pointer;
  border: 2px solid #fff;
  border-radius: 35px;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 80px;
  margin: 20px auto 20px;
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  background-color: #e0a341;
}
</style>
