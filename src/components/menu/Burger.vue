<template>
    <div class="burger" :class="{active: store.isActive}"  @click="store.toggle">
        <span></span>
    </div> 
</template>

<script>
import { store } from '@/store'
export default {
    name: 'BurgerVue',
    data() {
      return {
        store
        }
    },
}
</script>


<style>
.burger {
    position: relative;
    top: 32px;
    visibility: visible;
    width: 29px;
    height: 50px;
    cursor: pointer;
    margin-right: 10px;
}

.burger span {
    display: block;
    width: 100%;
    height: 3px;
    background-color:#bdad90;
    position: absolute;
    top: 15%;
    transform: translateY(-50%);
    transition: background-color .2s ease-in-out;
}

.burger span::before,
.burger span::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #bdad90;
    transition: transform .4s ease-in-out;
}

.burger span::before {
    transform: translateY(15px);
    top: -5px;
}

.burger span::after {
    transform: translateY(-15px);
    top: 5px;
}

.burger.active span {
    background-color: transparent;
}

.burger.active span::before {
    transform: translate(0px,5px) rotate(45deg);
}

.burger.active span::after {
    transform: translate(0px,-5px) rotate(133deg);
}


@media screen and (min-width:500px){
    .burger{
        margin-left: auto;
    }
}

@media screen and (min-width:960px){
    .burger{
        display: none;
    }
}


</style>