<template>
    <div>
        <NavbarComponent />
        <div class="head">
            <div class="user">
                <h3>INFO 63A</h3>
            </div>
            <div class="curso">
                <img src="../assets/info.png" alt="">
            </div>
        </div>

        <div class="buttons">
            <div>SEG</div>
            <div>TER</div>
            <div>QUA</div>
            <div>QUI</div>
            <div>SEX</div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 text-center">
                    <div class="horario">
                        <div class="hora">07:30</div>
                        <div class="conteudo">
                            <h5 class="disciplina">Criação de Sites</h5>
                            <p class="prof">Cândido</p>
                        </div>
                    </div>
                    <div class="horario">
                        <div class="hora">07:30</div>
                        <div class="conteudo">
                            <h5 class="disciplina">Criação de Sites</h5>
                            <p class="prof">Cândido</p>
                        </div>
                    </div>
                    <div class="horario">
                        <div class="hora">07:30</div>
                        <div class="conteudo">
                            <h5 class="disciplina">Criação de Sites</h5>
                            <p class="prof">Cândido</p>
                        </div>
                    </div>
                    <div class="horario">
                        <div class="hora">07:30</div>
                        <div class="conteudo">
                            <h5 class="disciplina">Criação de Sites</h5>
                            <p class="prof">Cândido</p>
                        </div>
                    </div>
                    <div class="horario">
                        <div class="hora">07:30</div>
                        <div class="conteudo">
                            <h5 class="disciplina">Criação de Sites</h5>
                            <p class="prof">Cândido</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 text-center">
                    <div class="horario">
                        <div class="hora">07:30</div>
                        <div class="conteudo">
                            <h5 class="disciplina">Criação de Sites</h5>
                            <p class="prof">Cândido</p>
                        </div>
                    </div>
                    <div class="horario">
                        <div class="hora">07:30</div>
                        <div class="conteudo">
                            <h5 class="disciplina">Criação de Sites</h5>
                            <p class="prof">Cândido</p>
                        </div>
                    </div>
                    <div class="horario">
                        <div class="hora">07:30</div>
                        <div class="conteudo">
                            <h5 class="disciplina">Criação de Sites</h5>
                            <p class="prof">Cândido</p>
                        </div>
                    </div>
                    <div class="horario">
                        <div class="hora">07:30</div>
                        <div class="conteudo">
                            <h5 class="disciplina">Criação de Sites</h5>
                            <p class="prof">Cândido</p>
                        </div>
                    </div>
                    <div class="horario">
                        <div class="hora">07:30</div>
                        <div class="conteudo">
                            <h5 class="disciplina">Criação de Sites</h5>
                            <p class="prof">Cândido</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarComponent from '../components/Navbar.vue';
export default {
    name: 'HomeView',
    components: {
        NavbarComponent
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.head {
    display: flex;
    justify-content: space-between;
}

.head .user {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5vw;
}

.head .user {
    padding-left: 7.5vw;
}

.head .curso {
    width: 20vw;
}
.head .curso img {
    width: 50%;
}
.buttons {
    display: flex;
    justify-content: center;
}
.buttons div {
    background-color: #0000CD;
    padding: 2vh 1.5vw;
    margin: 0 1vw;
    border-radius: 10px;
    color: #ffffff;
}
.buttons div:hover {
    background-color: #3054E6;
}
.container-fluid {
    margin-top: 5vh;
    display: flex;
    justify-content: center;
}
.container-fluid .row {
    width: 90%;
}
.col-md-6 {
    width: 40vw;
    margin: 0 2vw;
}
.col-md-6 .horario {
    width: 100%;
    display: flex;
    margin-top: 1vh;
}
.horario .hora {
    background-color: #727272;
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 3px;
}
.conteudo {
    background-color: rgba(117, 117, 117, 25%);
    margin-left: 3%;
    width: 82%;
}

/* Estilo para telas menores que 600 pixels de largura */
@media screen and (max-width: 600px) {
    .head .curso{
    width: 30vw;margin-right: 5vw;
}
.head .curso img{
    width: 100%;
}
.buttons div {
    padding: 1.5vh 3.5vw;
    margin: 1vh 2vw 0 2vw;
}
.container-fluid {
    margin-top: 2vh;
}
    .col-md-6 {
        width: 85vw;
        margin-top: 2vh;
    }

    .horario {
        margin-top: 1.0vh;
    }
}</style>
  