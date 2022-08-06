<template>
<h2 class="mb-5" id="about">Let me introduce myself !</h2>
    <div class="row">
        <article class="col-sm-12 about">
            <div class="text">
                <p class="text-black text-about">
                    Hello there !<br>
                    My name is Kelly, i'm 28 and i work as a photographer since 5 years.
                    After the school, i was looking for a job who give me happiness and make me feel creative.
                    I've started to learn with a full course online how to be a good photographer.
                </p>
                <p class="text-black text-about">
                    I decide to make the better decision of my entire life, become a photographer !
                </p>
                <p class="text-muted text-publish">Published 4 years ago</p>
            </div>
         
            <img src="../assets/about.jpg" alt="" class="img-about col-lg-6 col-sm-12">
        </article>
    </div>
</template>

<script>
export default {
    name: 'AboutVue'
}
</script>

<style>

.title-section{
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
    text-transform: uppercase;
    border-bottom: 3px solid rgb(127, 126, 126);
}

.about{
    margin: 0 auto 15rem;
    padding: 1rem;
    background-color: #f0efe8;
}

h2{
    font-size: 40px;
    border-bottom: 2px solid;
    margin-bottom:15rem;
}

.text{
    align-self: center;
}

.text-about{
    font-family: 'Cormorant Garamond', serif;
    font-size: 23px;
    color:#bdad90;
}

.text-publish{
    text-align: end;
    margin-top: 1rem;
}

.img-about{
    display: block;
    margin: auto;
}

@media screen and (min-width:992px){
    .about{
        display: flex;
        column-gap: 10px;
    }
}
</style>