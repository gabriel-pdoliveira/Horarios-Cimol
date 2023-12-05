<template>
  <div class="body">
    <ul class="nav">
      <img src="../assets/logo-cimol.png" alt="Logo">
    </ul>
    <div class="bg">
      <div class="card">
        <div class="icon-user">
          <PhUser :size="100" color="#ffffff" />
        </div>
        <form>
          <div class="formulario">
            <div class="campo">
              <div class="icon-input">
                <PhEnvelopeSimple :size="40" color="#ffffff" />
              </div>
              <div class="campo-input">
                <input type="email" placeholder="E-mail">
              </div>
            </div>
            <div class="campo">
              <div class="icon-input">
                <PhLockSimple :size="40" color="#ffffff" />
              </div>
              <div class="campo-input">
                <input type="email" placeholder="E-mail">
              </div>
            </div>
          </div>
          <div class="button">
            <button type="button">Entrar</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script setup>
import { PhEnvelopeSimple, PhLockSimple, PhUser } from "@phosphor-icons/vue";
</script>

<script>
export default {
  name: 'LoginView',
}
</script>
  
<style scoped>
.body {
  background: linear-gradient(150deg, #F1DD06, #448ECC, #1B374C);

}

.nav {
  height: 20vh;
  display: flex;
  justify-content: center;
}

.nav img {
  height: 100%;
}

.bg {
  padding-top: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  border-radius: 20px 20px 0 0;
  background-color: #ffffff;
}

.card {
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}

.card .formulario {
  background-color: rgba(0, 0, 0, 25%);
  padding: 70px 0 30px 0;
  width: 350px;
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  border-radius: 10px;
}

.icon-user {
  border-radius: 100%;
  padding: 20px;
  position: absolute;
  margin-bottom: 90%;
}

.icon-user,
.icon-input {
  background-color: #727272;
}

.campo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 6px;
  margin-bottom: 20px;
}

.campo {
  width: b
}

.campo .campo-input input {
  height: 48px;
}

.icon-input {
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card .button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
}

.button button {
  width: 200px;
  background-color: #448ECC;
  color: #ffffff;
  border: none;
  padding: 5px 0;
}

@media screen and (max-width: 600px) {
  .body{
    background: linear-gradient(115deg, #F1DD06, #448ECC, #1B374C);

  }
  .nav {
    align-items: center;
    height: 30vh;
  }

  .nav img {
    height:80%;
    margin: 0;
  }
  .bg{
    height: 70vh;
    padding: 0;
  }
}</style>