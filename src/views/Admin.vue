<template>
    <div>
        <NavbarComponent />
        <h1>Olá, Administrador</h1>

        <div class="bg">
            <div class="coluna">
                <PhChalkboard :size="100" color="#000000" />
                <h4>Adicionar Turma</h4>
            </div>
            <RouterLink class="coluna" to="/upload">
                <PhClock :size="100" color="#000000" />
                <h4>Adicionar Horário</h4>
            </RouterLink>
            <div class="coluna">
                <PhChalkboardTeacher :size="100" color="#000000" />
                <h4>Adicionar Professor</h4>
            </div>
        </div>


    </div>
</template>

<script setup>
import { PhChalkboardTeacher, PhChalkboard, PhClock } from "@phosphor-icons/vue";
</script>

<script>
import NavbarComponent from '../components/Navbar.vue';
import { RouterLink } from "vue-router";

export default {
    name: 'AdminView',
    components: {
        NavbarComponent,
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    margin-top: 8vh;
}

.bg {
    display: flex;
    justify-content: center;
    align-items: center;
}
.coluna {
    background-color: rgba(117, 117, 117, 25%);
    width: 300px;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    margin: 8vh 2vw 2vw;
    color: #222;
    text-decoration: none;
}
@media screen and (max-width: 600px) {
    h1 {
    margin: 4vh 0;
}
  .bg{
    flex-direction: column;
  }
  .coluna{
    height: 23vh;
    margin: 1.5vh 0 0 0;
  }
}
</style>
  