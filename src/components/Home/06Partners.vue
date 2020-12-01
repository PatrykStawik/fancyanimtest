<template>
  <div class="partnersContainer">
    <div class="workingWithUs">
      <div class="workingText">
        <div class="workingTextTitle" data-aos="fade" data-aos-delay="100">
          Working with us <br /><b> Is all about you</b>
        </div>
        <p data-aos="fade-right" data-aos-delay="300">
          Every company is different, and every customer is the most important
          factor. ​<br /><br />
          That's why our product team is always ready to discover, how we can
          help you.
        </p>
      </div>
      <div class="wrokingUsImg">
 <g-image src="../../../static/99-998436_network-png-transparent-network-transparent-png.png" data-aos="graphAnim" data-aos-delay="450" data-aos-duration="3000"/>
      </div>
     
    </div>
    <div class="partners">
        <div class="partnersTextTitle" data-aos="fade" data-aos-delay="500" data-aos-duration="1800">
            Partners <br>
            <b>Who trusted us</b>
        </div>
        <div class="partnersLogos">
<g-image src="../../../static/infracert.svg" />
<g-image src="../../../static/Cedrob.svg" />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="scss" scoped>
[data-aos="graphAnim"] {
  opacity: 0;
  transition-property: transform, opacity;
  transform: translate(500px,500px) rotate(90deg);
  &.aos-animate {
    opacity: 1;
    transform: translate(0,0) rotate(0deg);
  }}
.partnersContainer{
    background-color: #fff;
    color: black;
}
.workingWithUs{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    img{
        width: 100%;
    }
}
.workingTextTitle{
    font-size: 450%;
}
.workingText{
    margin-left: 7%;
    width: 30%;
    p{
        font-size: 150%;
        font-weight: bold;
    }
}
.wrokingUsImg{
    width: 30%;
}
.partners{
height: 80vh;

}
.partnersTextTitle{
    margin-left: 15%;
    font-size: 450%;
}
.partnersLogos{
    margin-top: 200px;
    margin-bottom: 200px;
    display: flex;
    justify-content: space-around;
    height: 200px;
    img{
        height: 15vw;
    }
}
@media (max-width: 1100px){
  .partnersContainer{
    margin-top: 60px;
  }
  .partnersLogos{
    max-width: 100vw;
    flex-direction: column;
    align-items: center;
    img{
      height: 20vw;
      margin-bottom: 100px;
    }
  }
  .workingText{
    margin-top: 0px;
    font-size: 80%;
    width: 100%;
    margin-left: 10%;
  }
  .workingWithUs{
    height: 650px;
    img{
      display: none;
    }
  }
  .workingTextTitle{
    font-size: 300%;
  }
  .partners{
    height: 800px;
  }
  .partnersTextTitle{
    margin-left: 10%;
    font-size: 300%;
}
}
</style>