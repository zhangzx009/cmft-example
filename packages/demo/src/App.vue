<template>
  <div class="main">
  <div id="app">
    <div v-for="item in routes" :key="item.index" id="nav">
      <router-link :to="item.path">{{item.name}}</router-link> |
    </div>
    <div class="mobile-frame is-iphone">
<!--      <iframe src="/api" frameborder="0" width="100%" height="100%" scrolling="no"></iframe>-->
      <div class="frame-wrapper">
        <router-view/>
      </div>
    </div>
  </div>
  </div>
</template>


<script>
  import {routes} from './router'
  export default {
    name: "AppContainer",
    data(){
      return{
        routes:[],
      }
    },
    mounted() {
      this.routes = routes
    }

  }


</script>


<style lang="scss">

#app {
  font-family: "SourceHanSans Regularå";
 }

#nav {
  padding: 30px;
  display: inline;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  .is-iphone{
    width: 440px;
    height: 878px;
    margin: 10px 10px;
    background-size: cover;
    background-image: url("./assets/img/iphoneX.38c8778.png");
    background-repeat: no-repeat;
  }
  .frame-wrapper{
    position: absolute;
    background: lightgrey;
    width:388px;
    height:730px;
    top:120px;
    left:48px;
    padding: 1px 5px;
  }
</style>
