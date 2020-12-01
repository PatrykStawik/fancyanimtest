<template>
    <div class="layout">
      <header>
        <div class="logo" v-if="currentSite.length > 2">
          <g-link to="/" exact>
            <g-image src="../../static/logo no bg.png"
          /></g-link>
        </div>
        <div
          class="logo"
          v-if="currentSite === '/'"
          v-scroll-to="{ el: '#LOGO', lazy: true }"
        >
          <g-image src="../../static/logo no bg.png" />
        </div>
        <div class="menu">
          <g-link to="/" exact class="g-link"
            ><div class="home">Home</div></g-link
          >

          <!-- <div class="about">About Us</div> -->
          <g-link to="/product/" class="g-link">
            <div class="product">Our Product</div></g-link
          >
          <g-link to="/platform/" class="g-link"
            ><div class="platform">Platform</div></g-link
          >
          <g-link to="/contact/" class="g-link">
            <div class="contact">Contac Us!</div></g-link
          >
        </div>
        <div
          class="burger"
          :class="{ active: active }"
          @click="active = !active"
        >
          <div class="firstDiv"></div>
          <div class="middleDiv"></div>
          <div></div>
        </div>
      </header>
      <v-navigation-drawer
        v-model="active"
        fixed
        temporary
        right
        clipped
        class="drawer"
      >
      <div class="menuDrawer" @click="active = !active">
        <g-image src="../../static/logo no bg.png"/>
         <g-link to="/" exact class="g-link"
            ><div class="home">Home</div></g-link
          >

          <!-- <div class="about">About Us</div> -->
          <g-link to="/product/" class="g-link">
            <div class="product">Our Product</div></g-link
          >
          <g-link to="/platform/" class="g-link"
            ><div class="platform">Platform</div></g-link
          >
          <g-link to="/contact/" class="g-link">
            <div class="contact">Contac Us!</div></g-link
          >
      </div>
      </v-navigation-drawer>

      <slot />
    </div>
</template>

<script>
export default {
  data() {
    return {
      currentSite: '/',
      active: false,
    };
  },
  mounted() {
    this.currentSite = this.$router.history.current.path;
    console.log(this.currentSite);
  },
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100vw;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  z-index: 2;
  top: 0;
}
.logo {
  margin-left: 3vw;
  img {
    width: 8vw;
    cursor: pointer;
  }
}
.menu {
  width: 25vw;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  margin-right: 3vw;
  div {
    transition: color 0.5s;
    margin: 0 5px;
    white-space: nowrap;
  }
  div:hover {
    color: #384ad3;
    cursor: pointer;
  }
}
.burger {
  display: none;
}
@media (max-width: 1100px) {
  header {
    height: 70px;
  }
  header .menu {
    display: none;
  }
  .logo {
    img {
      width: 20vw;
    }
  }
  .burger {
    display: block;
    color: white;
    position: fixed;
    top: 18px;
    left: 88vw;
    width: 30px;
    height: 35px;
    cursor: pointer;
    transition: 0.2s linear;

    div {
      position: relative;
      margin: 3px;
      width: 80%;
      height: 6px;
      background-color: white;
      border-radius: 20px;
      right: 0;
      transition: top 0.2s 0.2s, bottom 0.2s 0.2s, opacity 0.2s 0.2s,
        transform 0.2s 0.4s;
    }
    .middleDiv {
      top: 0.4px;
    }

    div:nth-child(1) {
      top: 0;
    }
  }
  body header .burger.active {
    transform: rotate(90deg);
  }
  body header .active div:nth-child(1) {
    top: calc(50% - 12px);
    transform: rotate(45deg);
  }
  div:nth-child(2) {
    top: calc(50% - 5px);
  }
  .active div:nth-child(2) {
    top: calc(50% - 5px);
    opacity: 0;
  }
  div:nth-child(3) {
    bottom: 0;
  }
  .active div:nth-child(3) {
    bottom: calc(50% - 5px);
    transform: rotate(-45deg);
  }
  .drawer{
    background-color: #000;
    margin-top: 70px;
  }
  .menuDrawer {
    background-color: black;
    height: 100%;
    font-size: 200%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      width: 50%;
    }
    div{
      font-size: 90%;
      margin-top: 30px;
      
    }
  }
}
</style>
