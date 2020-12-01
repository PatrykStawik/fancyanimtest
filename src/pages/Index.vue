<template>
  <Layout>
    <div class="body">
    <VideoLogo />
    <TrackandManage />
    <ClientOnly>
    <Product/>
    </ClientOnly>
    <Platform/>
    <NewApproach/>
    <Partners/>
    <BigFooter/>
    <SmallFooter/>
    </div>
  </Layout>
</template>

<script>
import VideoLogo from "../components/Home/01VideoLogo";
import TrackandManage from "../components/Home/02TrackandManage";
import Product from "../components/Home/03Product";
import Platform from "../components/Home/04Platform";
import NewApproach from '../components/Home/05NewApproach';
import Partners from '../components/Home/06Partners'
import BigFooter from '../components/Home/07BigFooter'
import SmallFooter from '../components/SmallFooter'
export default {
  metaInfo: {
title: 'Home'
  },
  components: {
    VideoLogo: VideoLogo,
    TrackandManage: TrackandManage,
    Product: Product,
    Platform: Platform,
    NewApproach: NewApproach,
    Partners: Partners,
    BigFooter: BigFooter,
    SmallFooter: SmallFooter
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;700;800&display=swap");

body {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  font-family: "Poppins";
  background-color: #000;
  color: white;
}
.body{
  display: flex;
  flex-direction: column;
}
.btn{
  width: 150px;
  height: 50px;
  border-radius: 20px;
  outline: none;
  border: 3px solid white;
  font-size: 120%;
  transition: all .5s;
  &:hover{
    cursor: pointer;
    background-color: #000;
    color: white;
    
  }
}
 .g-link{
  text-decoration: none;
  color: inherit;
}
@media(max-width: 1400px){
  body{
    font-size: 80%;
  }
}
@media (max-width: 1100px){
  .btn{
    color: black;
    background-color: #fff;
    &:hover{
      background-color: #fff;
      color: black;
    }
  }
}
</style>
