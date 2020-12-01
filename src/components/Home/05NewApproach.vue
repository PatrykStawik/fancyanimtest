<template>
  <div class="aproachContainer">
    <div class="firstAproach">
      <div class="aproachText">
        <p class="aproachTitle" data-aos="fade-right" data-aos-delay="150">New approach<br> <b>to the railway industry</b></p>
        <p class="aproachDesc" data-aos="fade-right" data-aos-delay="300">
          There are complex solutions with features that you are not going to
          use and you don't really want.<br><br>
           We build product that you actually
          need.
        </p>
      </div>
      <div class="aproachImg firstAproachImg"></div>
    </div>
    <div class="secondAproach">
      <div class="aproachText">
        <p class="aproachTitle" data-aos="fade-right" data-aos-delay="150">New approach<br>
<b>to your problems</b></p>
        <p class="aproachDesc" data-aos="fade-right" data-aos-delay="300">
          We challenge the status quo of the market by focusing on direct problem-solving methodology.
​<br><br>Thanks to a small agile team, we are able to adapt our product to your specific problems and build it according to your needs.
        </p>
      </div>
      <div class="aproachImg secondAproachImg"></div>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="scss" scoped>
.firstAproach,
.secondAproach {
  display: flex;
}
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.aproachImg {
  width: 60vw;
  height: 50vw;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.aproachText{
    width: 40vw;
    margin-left: 15%;
    margin-right: 10%;
}
.firstAproachImg {
  background-image: url("../../../static/rails-3703349_1920.jpg");
}
.secondAproachImg {
  background-image: url("../../../static/train-821500_1920.jpg");
}
.aproachTitle{
    font-size: 300%;
    margin-bottom: 100px;
}
.aproachDesc{
    font-size: 150%;
}
   @media (max-width: 1100px){
     .aproachImg{
       display: none;
     }
     .aproachText{
       width: 90vw;
       font-size: 80%;
       margin-left: 10%;
       margin-top: 50px;
       
     }
   }
</style>