<template>
<h2 class="mb-5" id="contact">Wanna yours? Send me a message !</h2>
    <section class="mb-5">
        <div class="row contact">
            <img src="../assets/img-contact.jpg" alt="" class="col-lg-5">
            <div class="form col-lg-5">
                <h3 class="mt-3 text-center">It all begins here !</h3>
                <p class="mt-5 text-contact text-center">
                    Hello there ! <br>
                    No doubt, send me your wish and we can thinking about the best way to warrant your project !
                </p>
                <form action="">
                    <div class="form-floating mb-4">
                        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
                        <label for="floatingInput">Name</label>
                    </div>
                    <div class="form-floating mb-4">
                        <input type="email" class="form-control" id="floatingPassword" placeholder="E-mail">
                        <label for="floatingPassword">E-mail</label>
                    </div>
                    <div class="form-floating mb-4">
                        <input type="text" class="form-control" id="floatingPassword" placeholder=" Your inquiry">
                        <label for="floatingPassword">Inquiry type</label>
                    </div>
                    <div class="form-floating mt-5">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style="height: 200px;"></textarea>
                        <label for="floatingTextarea">How about you ?</label>
                    </div>
                    <button type="submit" class="btn mt-5">Send</button>
                </form>
            </div>
        </div>
    </section> 
</template>

<script>
export default {
    name:'ContactVue',
    data() {
        return {
            name : "Name",
        }
    },
}
</script>

<style>
    .form-control:focus,.btn:focus {
    background-color: #f0efe8;
    border-color: #bdad90;
    outline: 0px !important;   
    -webkit-appearance:none;
    box-shadow: none !important;
    border-bottom: 2px solid #bdad90;  
    border-radius: 0;
    color: #bdad90;
    font-weight: 500;
    }

    .form-control{
        background-color: #f0efe8;
        border-bottom: 1px solid #bdad90;
        border-radius: 0;
        color: #bdad90;
    }

    input{
        color:#bdad90 ;
    }

    label{
        text-align: start;
        color: #bdad90;
        font-weight: 700;
    }

    section{
        background-color: #f0efe8;
        padding: 20px;
    }

    .contact{
        display: flex;
        column-gap: 6rem;
    }

    .text-contact{
        color:#bdad90; 
        font-size: 23px;
        font-family: 'Cormorant Garamond', serif;
    }

    form .btn{
        border: 1px solid #bdad90;
        padding: 10px;
        width: 30%;
        color: #bdad90;
    }

      form .btn:hover{
        background-color: whitesmoke;
        transition: background-color .5s;
      }
        

    img{
        object-fit: cover;
        max-width: 100%;
    }
</style>