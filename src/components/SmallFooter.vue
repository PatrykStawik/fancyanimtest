<template>
  <footer>
<div class="footerImg">
    <g-image src="../../static/logo no bg.png" />
</div>
<div class="footerDesc">
    Trackine/Onebid <br>
    copyright
</div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid white;
    img{
        width: 8vw;
        margin-left: 3vw;
    }
    .footerDesc{
        margin-right: 3vw;
        margin-bottom: 20px;
       margin-top: 20px;
    }
}
@media (max-width: 1100px){
    footer{
        max-width: 100vw;
        img{
            width: 20vw;
        }
    }
}
</style>