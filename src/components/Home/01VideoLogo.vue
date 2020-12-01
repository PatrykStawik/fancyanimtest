<template>
  <div class="videoLogo" id="LOGO">
     <video autoplay muted loop playsinline>
         <source src="../../../static/tokyo train BW (online-video-cutter.com).mp4" type="video/mp4"/>
     </video>
     <div class="textLogo">
         <g-image src="../../../static/logo no bg.png" />
         <div class="textLogoDesc">
             Railway fleet within your reach
         </div>
        
     </div>
     <ClientOnly>
      <div class="learnText" data-aos="fade-down">
         <div class="text">LEARN MORE</div>
         <img src="../../../static/method-draw-image.svg" alt="arrow" class="arrow">
     </div>
     </ClientOnly>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
 mounted(){
     AOS.init({
         duration: 1200,
     });
 }
}
</script>

<style lang="scss" scoped>
.videoLogo{
    width: 100%;
    height: 110vh;
    video{
        width: 100%;
    }
    .textLogo{
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 45vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 100%;
        }
        .textLogoDesc{
            color: white;
            font-size: 150%;
        }
    }
    .learnText{
        position: absolute;
        top: 110%;
        color: white;
        left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        .arrow{
            width: 120px;
            margin-top: -20px;
        }
    }
}
@media (max-width: 1100px){
    .videoLogo{
        height: 800px;
        video{
            height: 100%;
            object-fit: cover;
        }
        .learnText{
            top: 90%;
        }
    }
  .videoLogo .textLogo{
        width: 80vw;
        left: 48%;
        .textLogoDesc{
            font-size: 120%;
        }
    }
}
</style>