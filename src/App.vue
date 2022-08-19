<template>
<div class="background-modal" id="modal" @click="toggle()">
<div id="layer">
    <div id="imgDisplay">
    
    </div>
</div>
 
</div>
  <Header/>
  <div class="banner"> 
    <p class="text-image">
      Capture the time and beautiful moment 
    </p>
  </div>
  <div class="container">
     <About/>
     <Portfolio/>
     <Contact/>
  </div>
  <Footer/>
 
</template>

<script>

import Header from './components/Header.vue';
import About from './components/About.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import { store } from '@/store';

const routes = {
  '/about':About,
}

export default {
  name: 'App',
  data() {
    
    return {
        store,        
        currentPath:window.location.hash,
    }
  },
  computed: {
    currentView(){
      return routes[this.currentPath.slice(1) || '/'] || 'NotFound'
    }
  },
  mounted() {
    window.addEventListener('hashchange',()=>{
      this.currentPath = window.location.hash;
    })
  },
  methods:{
    closeModal(){
        
    },
    toggle(){
       let modal = document.getElementById('modal');
       modal.style.display="none"
    }

  },
  components: {
    Header,
    About,
    Portfolio,
    Contact,
    Footer
  }
}
</script>

<style>

#app{
    position: relative;
}

body{
  padding: 10px;
}

.background-modal{
    position: absolute;
    z-index: 2;
    height: 100%;
    width: 100%;
    background-color: #bdad90ad;
    display: none;
    animation: fade-in .6s forwards;
    transition: background-color .5s ease-out; 
}

#imgDisplay{
    position: relative;
}

.event{
    pointer-events: none;
}

.banner{
  position: relative;
  top: -92px;
  z-index: -1;
  background: url('./assets/background-lg.jpg') no-repeat center;
  background-size: cover;
  height: 826px;
  width: 100%;
  max-width:100%;
  padding: 10px;
}

.text-image{
    font-size: 40px;
    font-family: 'Cormorant SC', serif;
    color: #bdad90;
    text-transform: uppercase;
    position: absolute;
    top: 72%;
    left: 30px;
    right: 30px;
    background-color: rgba(8, 8, 8,.5);
    padding: 2rem;
    text-align: center;
}

img{
  max-width: 100%;
}

@keyframes fade-in{
    from{
        opacity: 0;
        transition: opacity .5s ease-in;
    }
    to{
        opacity: 1;
        transition:opacity .5s ease-out
    }
}
</style>