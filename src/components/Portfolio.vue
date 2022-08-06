<template>
<h2 class="mb-5" id="folio">Some part of my work !</h2>
    <div class="gallery">
        <div class="folio-navigation">
            <nav>
                <button class="btn"><a href="">Street</a></button>
                <button class="btn"><a href="">Nature</a></button>
                <button class="btn"><a href="">Portrait</a></button>
            </nav>
        </div>
        <figure v-for="image in images" 
            :key="image.id">
            <img 
            :src="image.imgSrc">
            <figcaption>
                <p>{{ image.caption }}</p>
                <p class="mt-5">
                    {{ image.publish }}
                </p>
            </figcaption>
        </figure>   
    </div>
</template>

<script>
export default {
    name:'PortfolioVue',
    data() {
        return {
            images:[{
                id:1,
                imgSrc: require('@/assets/gallery/street1.jpg'),
                caption:'Men walk in a street',
                publish:'March 16, 2018' 
            },
            {
                id:2,
                imgSrc:require('@/assets/gallery/street2.jpg'), 
                caption:'Tramway colored in a grey city',
                publish:'February 20, 2017' 
            },
            {
                id:3,
                imgSrc:require('@/assets/gallery/street3.jpg'),
                caption:'Colored street in china',
                publish:'July 26, 2018' 
            },
            {
                id:4,
                imgSrc:require('@/assets/gallery/nature1.jpg'),
                caption:'Waterfall in Australia',
                publish:'24 June, 2019' 
            },
            {
                id:5,
                imgSrc:require('@/assets/gallery/nature2.jpg'),
                caption:' An awesome frozen lake in india',
                publish:'3 January, 2019' 
            },
            {
                id:6,
                imgSrc:require('../assets/gallery/nature3.jpg'),
                caption:'Elephant spotted in Africa',
                publish:'16 May,2019' 
            },
            {
                id: 7,
                imgSrc:require('../assets/gallery/portrait1.jpg'),
                caption:'Evan Baker portrait',
                publish:'11 April,2020'
            },
            {
                id: 8,
                imgSrc:require('../assets/gallery/portrait2.jpg'),
                caption:'Sophia Adams portrait',
                publish:'29 September,2020'
            },
                        {
                id: 9,
                imgSrc:require('../assets/gallery/portrait3.jpg'),
                caption:'Alicia DiMecco',
                publish:'5 March,2021'
            },
            ]
        }
    },
}
</script>

<style> 
    .gallery{
        display: grid;
        grid-template-columns: repeat(auto, minmax(250px, auto));
        gap: 0.5rem;
        padding: 10px;
        margin: 0 auto 15rem;
        padding: 1rem;
        background-color: #f0efe8
    }

    .gallery>figure img{
        max-width: 100%;
        width: 100%;
        height: 100%;
    }

    figure{
        position: relative;
        display: inline-block;
    }

    figure figcaption{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0;
        color: #bdad90;
        font-weight: bold;
        width: 100%;
        text-align: center;
        margin: auto;
        font-size: 30px;
        transition: opacity .5s,background-color .5s;
    }

    figure figcaption p{
        transform: translateY(-10px);
        transition: transform .5s;
        font-family: 'Cormorant SC', serif;
    }

    figure:hover figcaption{
        opacity: 1;
        
    }

    figure:hover figcaption{
        background-color: rgb(91 88 88 / 90%);
        transition: background-color .5s;
    }

    figure:hover figcaption p{
        transform: translateY(0px);
        transition: transform .5s;
    }

    .folio-navigation{
        grid-column: span 1;
        padding: 15px;
    }

    .folio-navigation>nav{
        display: flex;
        column-gap: 2rem;
        justify-content: center;
    }

    .folio-navigation>nav>button>a{
        color: #bdad90;
        text-decoration: none;
        text-transform: uppercase;
        border: 1px solid;
        padding: 10px;
    }

    @media screen and (min-width:768px){
        .gallery{
            grid-template-columns: repeat(auto, minmax(250px, auto));
        }
    }

    @media screen and (min-width:768px){
        .folio-navigation{
            grid-column: span 2;
        }
    }

    @media screen and (min-width:980px){
        .folio-navigation{
            grid-column: span 3;
        }
    }

      /* @media screen and (min-width:980px){
        .gallery{
            grid-template-columns: repeat(3, minmax(250px, auto));
        }
    } */ 
</style>

<!-- TODO Create portfolio part and try to display menu on mobile when scrolled  -->