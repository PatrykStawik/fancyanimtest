<template>
  <div class="bigFooterContainer">
<div class="bigFooterText">
    <p><b>Want to know more?</b></p>
    <p>Let's talk</p>
    <p><b>Meet Us</b></p>
</div>
<div class="bigFooterDots">
    <g-link to="/product/" class="g-link" data-aos="fade" data-aos-delay="400" data-aos-duration="2000">
    <div class="dot">Product</div>
    </g-link>
    <g-link to="/platform/" class="g-link" data-aos="fade" data-aos-delay="100" data-aos-duration="2000">
    <div class="dot dotPlatform">Platform</div>
    </g-link>
    <g-link to="/contact/" class="g-link" data-aos="fade" data-aos-delay="600" data-aos-duration="2000">
    <div class="dot">Contact</div>
    </g-link>
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.bigFooterContainer{
    height: 90vh;
    display: flex;
    align-items: center;
}
.bigFooterText{
    margin-left: 15%;
    font-size: 400%;
}
.bigFooterDots{
    display: flex;
    width: 40%;
    justify-content: space-around;
    margin-top: 100px;
}
.dot{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #fff;
    color: black;
    text-align: center;
    line-height: 100px;
    font-weight: bold;
    padding: 3px;
    margin: 10px;
 -webkit-box-shadow: 1px 2px 15px 5px rgba(255,255,255,0.62); 
box-shadow: 1px 2px 15px 5px rgba(255,255,255,0.62);
transition: all .5s;
&:hover{
    background-color: #000;
    color: white;
    cursor: pointer;
}
}
.dotPlatform{
    margin-top: -150px;
}
@media (max-width: 1100px){
    .bigFooterContainer{
        flex-direction: column;
        height: 800px;
    }
    .dot{
        width: 80px;
    height: 80px;
    line-height: 80px;
    padding: 1.5px;
    font-size: 80%;
    }
    .bigFooterText{
    margin-left: 10%;
    font-size: 300%;
    margin-top: 100px;
}
.bigFooterDots{
    margin-top: 200px;
}
}
</style>