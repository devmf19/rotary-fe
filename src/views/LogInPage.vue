<template>
  <div class="logIn">
    <main>
      <div class="container">
        <div class="background-left"></div>

        <div class="container-login">
          <div class="header-login">
            <h1>Iniciar sesión</h1>
          </div>

          <h3>Ingresa tus datos</h3>

          <form v-on:submit.prevent="loginEvent">
            <p>
              <label>Nombre de usuario</label>
              <input
                type="text"
                id="username"
                class="textfield"
                name="login"
                v-model="username"
              />
            </p>
            <p>
              <label>Contraseña</label>
              <input
                type="password"
                id="password"
                class="textfield"
                name="login"
                v-model="password"
              />
            </p>
            <input type="submit" class="btn" value="Ingresar" />
          </form>
          <a href="#">Olvidé mi <span>contraseña</span></a>
          <div class="alert" v-if="error">
            Datos incorrectos
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LogInPage",
  data: function () {
    return {
      username: "",
      password: "",
      error: false,
      error_msg: "",
    };
  },
  methods: {
    loginEvent() {
      // cuando el usuario ingresa sus datos y presiona 'iniciar sesión'
      let userJson = {
        //array con los datos ingresados por el usuario para su validación
        user: this.username,
        password: this.password,
      };
      //Mediante el método post se envía el array con los datos del usuario a la api rest y esta debe retornar una respueta
      axios.post("link-api-rest", userJson).then((data) => {
        console.log(data); //muestra el resultado de la validación en consola

        if (data.data.status == "OK") {
          //El usuario ingresa al sistema
        } else {
          this.error_msg = true;
          this.error_msg = "mensaje de error";
          //Se le notifica al usuario que sus datos son incorrectos
        }
      });
    },
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

.container-login {
  margin: 30px auto;
  background: #fff;
  width: 90%;
  max-width: 450px;
  position: relative;
  /*box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);*/
  text-align: center;
}

.header-login {
  text-align: center;
  margin-bottom: 30px;
}

.header-login h1 {
  font-size: 30px;
  color: #0093ab;
  margin: 10px auto;
}

.container-login h3 {
  color: #797777;
  font-size: 20px;
  font-weight: normal;
}

.container-login p {
  margin: 0;
}

.container-login form p label {
  display: block;
  color: #797777;
  margin-bottom: 10px;
  text-align: left;
}

.container-login a {
  color: #797777;
  font-size: 16px;
}

.container-login a span {
  color: #0093ab;
  font-weight: bold;
}

.container-login a span:hover {
  font-size: 17px;
}

.textfield {
  width: 100%;
  background-color: #f3f3f3;
  color: #797777;
  font-size: 20px;
  font-weight: normal;
  border: none;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
}

.btn {
  background-color: #f6b54d;
  color: #fff;
  cursor: pointer;
  border: 2px solid #fff;
  border-radius: 35px;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 80px;
  margin: 20px 20px 40px 20px;
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  background-color: #e0a341;
}

.alert {
    height: 50px;
    background-color: #ff000080;
    color: #fff;
    font-weight: bold;
    border-radius: 10px;
    padding-top: 15px;
    margin-top: 30px;
}
</style>
