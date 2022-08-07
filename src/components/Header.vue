<template>
    <header class="d-flex">
        <SideNav/>
        <Burger/>
    </header>
</template>

<script>
import Burger from './menu/Burger.vue';
import SideNav from './menu/SideNav.vue';
import { store } from '@/store';
export default { 
    name: 'HeaderVue',
    data() {
        return {
            store,
        }
    },
    components:{
        Burger,
        SideNav
    },
}
</script>


<style>

header{
    animation: slide .4s;
    align-items: baseline;
    position: relative;
    background-color: #f0efe8;
}

.nav-link{
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    text-transform: uppercase;
}

.logo{
width: 50px;
margin-top: 10px;
}

@keyframes slide{
    from{
        display: none;
        opacity: 0;
    }

    to{
        display: block;
        opacity:1;
        transition: opacity .6s;
    }
}
</style>