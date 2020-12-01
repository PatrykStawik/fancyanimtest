<template>
  <Layout>
    <div class="platformContainer">
      <div class="firstSlide">
        <div class="slideDesc">
          <span  data-aos="fade-right" data-aos-delay="0" data-aos-duration="2000">Platform</span>
          <h1 data-aos="fade-right" data-aos-delay="100" data-aos-duration="2000"><b>Trackine</b></h1>
          <p data-aos="fade-right" data-aos-delay="500" data-aos-duration="2000">
            The most intuitive platform on the market, thanks to which you can
            manage your fleet easier and faster than ever.
          </p>
        </div>
        <div class="slideImg" data-aos="fade-left" data-aos-delay="300" data-aos-duration="2000">
          <g-image src="../../static/mockup@3x.png" />
        </div>
      </div>
      <div class="secondSlide">
        <div class="slideImg">
          <g-image src="../../static/map@3x.png" />
        </div>
        <div class="slideDesc">
          <p data-aos="fade-left" data-aos-delay="100" data-aos-duration="2000">Fast and easy ovierview of your assets.</p>
          <p data-aos="fade-left" data-aos-delay="400" data-aos-duration="2000">Access to infromation in real time</p>
          <p data-aos="fade-left" data-aos-delay="700" data-aos-duration="2000">Clear reports summarizing the most important data</p>
        </div>
      </div>
      <div class="thirdSlide">
        <div class="slideDesc">
          <p data-aos="fade-right" data-aos-delay="100" data-aos-duration="2000">Assigning various degrees of access to data</p>
          <p data-aos="fade-right" data-aos-delay="400" data-aos-duration="2000">
            Access to all data via our API with the possibility of integration
            with your system
          </p>
        </div>
        <div class="slideImg">
          <g-image src="../../static/new zone@3x.png" />
        </div>
      </div>
    </div>
    <SmallFooter />
  </Layout>
</template>

<script>
import SmallFooter from "../components/SmallFooter";
export default {
  metaInfo: {
    title: "Platform",
  },
  components: {
    SmallFooter: SmallFooter,
  },
};
</script>

<style lang="scss" scoped>
.firstSlide {
  height: 90vh;
  display: flex;
  margin-top: 10vh;
  align-items: center;
}
.secondSlide {
  height: 90vh;
  display: flex;
  align-items: center;
  .slideDesc {
    margin-right: 10%;
    margin-left: 0;
  }
}
.thirdSlide {
  height: 90vh;
  display: flex;
  align-items: center;
}
.slideDesc {
  margin-left: 10%;
  h1,
  span {
    font-size: 400%;
    margin: -10px 0;
  }
  p {
    font-size: 200%;
    font-weight: bold;
    margin-top: 20px;
  }
}
.slideImg {
  margin: 10%;
  img {
    width: 40vw;
  }
}
@media (max-width: 1100px) {
  .firstSlide {
  height: 500px;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  align-items: center;
}
.secondSlide {
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .slideDesc {
    margin-right: 0%;
    margin-left: 10%;
  }
}
.thirdSlide {
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.slideDesc {
  margin-left: 10%;
  font-size: 80%;
  h1,
  span {
    font-size: 300%;
    margin: -10px 0;
  }
  p {
    font-size: 150%;
    font-weight: 300;
    width: 87.5vw;
    margin-top: 0px;
  }
}
.slideImg {
  margin: 10%;
  img {
    width: 80vw;
  }
}
}
</style>