<template>
  <Layout>
    <div class="contactContainer">
      <div class="formContainer">
        <h1 data-aos="fade" data-aos-delay="100" data-aos-duration="3000">Let's talk</h1>
        <form autocomple="on">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
          <textarea
            name="msg"
            id="msg"
            cols="30"
            rows="5"
            placeholder="Type your message here..."
          ></textarea>
        </form>
        <button class="btn">Submit</button>
      </div>
      <div class="logoContainer">
        <g-image src="../../static/logo no bg.png" />
      </div>
    </div>
    <SmallFooter />
  </Layout>
</template>

<script>
import SmallFooter from "../components/SmallFooter";
export default {
  metaInfo: {
    title: "Contact",
  },
  components: {
    SmallFooter: SmallFooter,
  },
  
};
</script>

<style lang="scss" scoped>
.contactContainer {
  height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.logoContainer {
  img {
    width: 35vw;
  }
}
.formContainer {
  width: 30vw;
  h1{
      font-size: 400%;
  }
  form {
    display: flex;
    flex-direction: column;

    input,
    textarea {
      width: 80%;
      height: 50px;
      margin: 10px 0;
      background-color: #000;
      border: none;
      outline: none;
      color: white;
      border-bottom: 2px solid white;
      transition: all 0.1s;
      &:hover {
        border-bottom-color: gray;
      }
      &::placeholder {
        color: white;
        opacity: 1;
      }
    }
  }
}
.btn {
  margin-left: 55%;
  margin-top: 40px;
  
}
@media (max-width: 1100px){
  .contactContainer{
    height: 800px;
    flex-direction: column;
  }
  .formContainer{
    width: 90vw;
    form{
      input, textarea{
        font-size: 18px;
      }
    }
  }
  .logoContainer{
    img{
      width: 60vw;
      
    }
  }
}
</style>