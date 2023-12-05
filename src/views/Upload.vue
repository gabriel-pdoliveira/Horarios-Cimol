<template>
  <div>
    <NavbarComponent />
    <div class=" drop">
      <div class="drop-area" @dragover.prevent @drop="handleDrop">
        Arraste e solte seu documento aqui
      </div>
      <div v-if="file">
        Arquivo selecionado: {{ file.name }}
      </div>
    </div>
    <div class="container">
      <div class="row">
        <RouterLink class="col-6 text-center" to="/admin">
          <button type="button" class="btn btn-secondary">Cancelar</button>
        </RouterLink>
        <div class="col-6 text-center">
          <button type="button" class="btn btn-secondary">Verificar</button>
        </div>
          
          </div>
        
      </div>
      
    
  </div>
</template>

<script>
import NavbarComponent from '../components/Navbar.vue';

export default {
  name: 'UploadView',
  components: {
    NavbarComponent,
  },
  data() {
    return {
      file: null,
    };
  },
  methods: {
    handleDrop(event) {
      event.preventDefault();

      const fileList = event.dataTransfer.files;

      if (fileList.length > 0) {
        // Apenas considerando o primeiro arquivo se vários foram soltos
        this.file = fileList[0];
      }
    },
  },
};
</script>

<style scoped>
.drop{
  display: flex;
  justify-content: center;
  align-items: center;
}
.drop-area {
  margin-top: 100px;
  width: 60%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  cursor: pointer;
}

.drop-area:hover {
  background-color: #f0f0f0;
}
.container{
  margin-top: 5vh;
}
</style>
