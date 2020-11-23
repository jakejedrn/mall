<template>
  <div id="home">
    <nav-bar class="home-nav">
      
      <!-- <div slot="left">购物街</div> -->
      <div slot="center">购物街</div>
      <!-- <div slot="right">购物街</div> -->
      
    </nav-bar>
    <h2>Home</h2>
    
  </div>
    

</template>

<script>

  import NavBar from '../../components/common/navbar/NavBar'

  export default {
    name: 'Home',
    data () {
      return {

      };
    },
    components: {
      NavBar
    },
    mounted () {},
    methods: {}
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
