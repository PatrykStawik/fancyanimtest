<template>
  <div class="trackAndManage" >
    <div class="trackText" >
      <h1 data-aos="zoom-in">Track and Manage your railway fleet</h1>
      <p data-aos="fade-right" data-aos-anchor-placement="left-center">
        Make fully aware, data-driven decisions which help your business grow.
      </p>
      <g-link to="/contact/" class="g-link">
      <button class="btn" data-aos="fade" data-aos-delay="300">Contact Us</button>
      </g-link>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  
 
};
</script>

<style lang="scss" scoped>
.trackAndManage {
  height: 85vh;
  display: flex;
  align-items: center;
  margin-left: 15%;
}
.trackText{
h1{
    width: 70%;
    font-size: 450%;
}
p{
   width: 60%;
    font-size: 200%;
}
.btn{
    margin-left: 43%;
    margin-top: 30px;
}
}
@media (max-width: 1100px){
  .trackAndManage{
    margin-left: 5%;
    height: 800px;
    flex-direction: column;
    justify-content: center;
  }
  .trackText{
    font-size: 50%;
    width: 90%;
    p{
      width: 70%;
    }
    .btn{
      margin-left: 20vw;
      font-size: 250%;
    }
  }
}
</style>