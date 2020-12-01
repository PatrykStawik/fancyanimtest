<template>
  <div class="platformContainer" data-aos="fade-right" data-aos-delay="150">
     
          <g-image src="../../../static/mockup@3x.png"/>
<div class="platformDesc">
    <p class="platformTxt" data-aos="fade-right" data-aos-delay="300">Platform</p>
    <p class="trackineTxt" data-aos="fade-right" data-aos-delay="300">Trackine</p>
    <p class="platfromDescTxt" data-aos="fade-left" data-aos-delay="300">Most intuitive on the market.
        Allows you to manage your assets easier then ever.
    </p>
    <g-link to="/platform/" class="g-link" data-aos="fade-left" data-aos-delay="300">
    <button class="btn">Learn more</button>
    </g-link>
</div>
    

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.platformContainer{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20vh;
    height: 90vh;
}
.platformDesc{
    display: flex;
    flex-direction: column;
width: 40%;
}
img{
    width: 40%;
   
}
.platformTxt{
       font-size: 300%;
   }
   .trackineTxt{
       font-size: 300%;
       font-weight: bold;
       margin: -10px 0;
   }
   .platfromDescTxt{
       font-size: 250%;
       width: 80%;
   }
   .btn{
       margin-left: 38%;
       margin-top: 50px;
   }
   @media (max-width: 1100px){
       .platformContainer{
           flex-direction: column;
           margin-top: -150px;
       }
       img{
           width: 90%;
       }
       .platformDesc{
           width: 90%;
           margin-left: 10%;
           font-size: 80%;
       }
       .platfromDescTxt{
           font-size: 150%;
       }
       .btn{
           margin-left: 24%;
           font-size: 150%;
           
       }
   }
</style>