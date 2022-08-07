<template>
<div class="bloc" :class="{active:store.isActive}"></div>
<h1 class="main-title">Professional photographer</h1>
    <nav class="main-nav" :class="store.isActive ? 'open-menu' : 'closed-menu'">
        <ul>
            <li v-for="item in navItem" :key="item.id" >
                <a :href="item.link" class="nav-link">{{ item.name }}</a>
            </li>        
        </ul>
    </nav>
</template>

<script>
import { store } from '@/store'
export default {
    name: 'SideNavVue',
    data() {
        return {
            store,
            navItem:{
                about:{
                    name:'About',
                    link:'#about' 
                },
                portfolio:{
                    name:'Portfolio',
                    link:'#folio'
                },
                contact:{
                    name:'Contact',
                    link:'#contact'
                }
            } 
         }
    },   
}
</script>


<style>

.main-title{
    font-family: 'Cormorant SC', serif;
    margin-top: 7px;
    margin-left: 1rem;
    color: #bdad90;
    z-index: 1;
}

h2,h3{
    font-family: 'Cormorant SC', serif;
    color: #bdad90;
}
    .main-nav{
        width: 100%;
        position: absolute;
        top: 78px;
        text-align: center;
    }

    .bloc{
        position:absolute;
        background-color: #f0efe8;
        height: 230px;
        width: 931px;
        max-width: 100%;
        transition: height .8s;
        transform: translateY(-263px);
        transition: transform .8s;
        opacity: .9;
    }

    .bloc.active{
        transform: translateY(-9px);
        transition:transform .8s;
    }

    .main-nav>ul{
        padding: 0;
        display: flex;
        flex-direction: column;
        column-gap: 7rem;
    }
    .main-nav>ul>li{
        list-style: none;
        opacity: 0;
    }

    .main-nav>ul>li>a{
        font-family: 'Roboto Mono', monospace;
        color:#bdad90;
        width: 41%;
        margin: auto;
        font-weight: bold;
    }

    .main-nav>ul>li>a:hover{
        color: yellowgreen;
    }

    .open-menu>ul>li{
        animation: .7s ease-in-out slide-in forwards;
    }

    .open-menu>ul>li:nth-child(1){ animation-delay: 100ms; }

    .open-menu>ul>li:nth-child(2){ animation-delay: 200ms; }

    .open-menu>ul>li:nth-child(3){ animation-delay: 300ms; }
    @keyframes slide-in{
        0%{
            opacity: 0;
            transform: translateX(-70px);
        }
        50%{
            opacity: .5;
        }

        100%{
            opacity:1;
            transform: translateX(0px);
        }
    }

    @media screen and (min-width:500px){
        .closed-menu{
            display: none;
            opacity: 0;
        }       
    }

    @media screen and (min-width:960px){

        .closed-menu{
            display: block;
            opacity: 1;
        }      

        .main-nav{
            position: static;
        }

        .main-nav>ul{
            flex-direction: row;
            column-gap: 2rem;
            justify-content: center;
        }

        .main-nav>ul>li>a{
            margin: 0;
        }
        
        h1{
            width: 100%;
        }

        .banner{
            top: -101px;
        }
    }

    @media screen and (min-width:970px){ .main-nav>ul>li {opacity: 1;}}
</style>