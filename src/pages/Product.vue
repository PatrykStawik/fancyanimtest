<template>
  <Layout>
    <ClientOnly>
    <OurProduct />
    </ClientOnly>
    <PhotoDesc/>
    <SmallFooter/>
  </Layout>
</template>

<script>
import OurProduct from "../components/Product/01OurProduct";
import PhotoDesc from "../components/Product/02PhotoDesc";
import SmallFooter from '../components/SmallFooter'
export default {
  metaInfo: {
    title: "Our Product",
  },
  components: {
    OurProduct: OurProduct,
    PhotoDesc: PhotoDesc,
    SmallFooter: SmallFooter
  },
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  font-family: "Poppins";
  background-color: #000;
  color: white;
}
</style>