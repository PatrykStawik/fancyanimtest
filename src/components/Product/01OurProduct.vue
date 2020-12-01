<template>
  <div class="ourProductContainer">
      <div class="ourProductDesc">
          <h1 data-aos="fade" data-aos-duration="2000">Our product</h1>
          <p data-aos="fade-right" data-aos-delay="300" data-aos-duration="2000">We do not innovate for innovation itself - through the iteration system we solve real problems in the industry using the most effective ways</p>
      </div>
      <div class="productAnimation">
          <div class="productAnimationTitle">KINE-1</div>
          <video autoplay muted playsinline>
              <source src="../../../static/trackine.mp4" type="video/mp4" />
          </video>
      </div>
  </div>
</template>

<script>
import {elementInViewport} from '../Home/03Product'
export default {
 created() {
      document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener("scroll", this.handleScroll)})
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const el = document.getElementById("trackineAnim");
      if (elementInViewport(el)) {
        console.log("START");
        el.play();
      } else {
        console.log("STOP");
        el.pause();
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.ourProductContainer{
    margin-top: 10vh;
}
.ourProductDesc{
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15%;
    h1{
        font-size: 400%;
        
    }
    p{
        width: 50%;
        font-size: 200%;
    }
}
.productAnimation{
    width: 80vw;
    display: flex;
    justify-content: space-between;
    .productAnimationTitle{
        font-size: 550%;
        transform: rotate(270deg);
        font-weight: bold;
        height: 20%;
        margin-top: 15%;
        text-align: center;
        white-space: nowrap;
    }
    video{
        width: 80%;
    }
}
@media (max-width: 1100px){
    .ourProductContainer{
    margin-top: 0px;
}
.ourProductDesc{
    font-size: 80%;
    margin-left: 10%;
    height: 600px;
    h1{
        font-size: 300%;
    }
    p{
        width: 90%;
        font-size: 150%;
    }
}
.productAnimation{
        flex-direction: column;
        video{
            width: 99vw;
            margin-right: 5px;
        }
        .productAnimationTitle{
            transform: rotate(0deg);
            font-size: 250%;
            margin-top: -15%;
            text-align: left;
            margin-left: 13%;
        }
    }
}
</style>