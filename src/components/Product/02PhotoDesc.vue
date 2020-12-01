<template>
  <div class="photoDescContainer">
      <div class="photoDescImg">
<g-image  src="../../../static/pexels-vishal-shah-3534471.jpg"/>
      </div>
      <div class="photoDescDesc">
          <p data-aos="fade-down" data-aos-delay="200" data-aos-duration="2000">1. communication supportig 2G, NB-IOT, LTE-M</p>
          <p data-aos="fade-down" data-aos-delay="700" data-aos-duration="2000">2. TSI TAF certified product that ensures the highest reliability of the device</p>
          <p data-aos="fade-down" data-aos-delay="1200" data-aos-duration="2000">3. the structure resistant to extreme temperature means that from the technological perpective, weather conditions are not challenge</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.photoDescContainer{
    display: flex;
    height: 90vh;
    align-items: center;
    justify-content: space-around;
}
.photoDescImg{
    img{
        width: 40vw;
    }
}
.photoDescDesc{
    width: 40vw;
    font-size: 200%;
}
p{
        margin-top: 50px;
    }
@media (max-width: 1100px){
    .photoDescContainer{
        font-size: 80%;
        flex-direction: column;
        height: 800px;
        margin-top: 40px;
    }
    .photoDescImg{
        img{
            width: 80vw;
        }
    }
    .photoDescDesc{
        width: 90vw;
        font-size: 150%;
    }
    p{
        margin-top: 10px;
    }
}
</style>