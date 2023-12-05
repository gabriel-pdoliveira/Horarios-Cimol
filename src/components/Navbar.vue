<template>
    <ul class="nav">
  <img src="../assets/logo-cimol.png" alt="Logo">
</ul>

</template>

<script>
export default {
    name: 'NavbarComponent',
}
</script>

<style scoped>
.nav{
    background: linear-gradient(150deg, #F1DD06, #448ECC, #1B374C);
    height: 10vh;
    display: flex;
    justify-content: left;
}
.nav img{
    height:100%;
    margin-left: 10vw;
}

/* Estilo para telas menores que 600 pixels de largura */
@media screen and (max-width: 600px) {
    .nav{
    justify-content: center;
}
.nav img{
    margin: 0;
}
}
</style>
