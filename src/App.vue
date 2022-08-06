<template>
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

const routes = {
  '/about':About,
}

export default {
  name: 'App',
  data() {
    return {
      currentPath:window.location.hash
    }
  },
  computed: {
    currentView(){
      return routes[this.currentPath.slice(1) || '/'] || 'NotFound'
    }
  },
  mounted() {
    window.addEventListener('hashchange',()=>{
      this.currentPath = window.location.hash
    })
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

body{
  padding: 10px;
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



</style>