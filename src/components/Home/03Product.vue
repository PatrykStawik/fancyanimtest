<template>
  <div class="productContainer">
    <div class="productTitle">Our product</div>
    <div class="productAnimation">
      <div class="productAnimationTitle">KINE-1</div>
      <video autoplay muted playsinline id="trackineAnim">
        <source src="../../../static/trackine.mp4" type="video/mp4" />
      </video>
    </div>
    <g-link to="/product/" class="g-link">
      <button class="btn">Learn More</button>
    </g-link>
  </div>
</template>

<script>
export function elementInViewport(el) {
  var top = el.offsetTop;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
  }

  return (
    top >= window.pageYOffset &&
    top + height <= window.pageYOffset + window.innerHeight
  );
}
export default {
  data() {
    return {
      videoPos: 0,
    };
  },
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
};
</script>

<style lang="scss" scoped>
.productContainer {
  height: 90vh;
  .productTitle {
    font-weight: bold;
    font-size: 350%;
    margin-left: 15%;
  }
}
.productAnimation {
  width: 80vw;
  display: flex;
  justify-content: space-between;
  .productAnimationTitle {
    font-size: 550%;
    transform: rotate(270deg);
    font-weight: bold;
    height: 20%;
    margin-top: 15%;
    text-align: center;
    white-space: nowrap;
  }
  video {
    width: 80%;
  }
}
.btn {
  margin-left: 45.5%;
  margin-top: 30px;
}
@media (max-width: 1100px) {
  .productContainer {
    height: 700px;
    .productTitle {
      font-size: 200%;
      margin-left: 10%;
    }
  }
  .productAnimation {
    flex-direction: column;
    video {
      width: 99vw;
      margin-right: 5px;
    }
    .productAnimationTitle {
      transform: rotate(0deg);
      font-size: 250%;
      margin-top: 10%;
      text-align: left;
      margin-left: 13%;
    }
  }
  .btn {
    margin-left: 30%;
  }
}
</style>