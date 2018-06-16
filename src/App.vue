<template>
  <div id="app">
    <router-view/>
    <services></services>
  </div>
</template>
<script>
import services from '@/components/common/service'
export default {
  name: 'App',
  components:{services}
}
</script>
<style>
  #app {
  	height: 100%;
    font-family: 'MicrosoftYaHei', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #666;
  }
  body {
    margin: 0;
    height: 100%;
  }
  img {
    border: 0 none;
  }
  ::-webkit-scrollbar {  /* 滚动条整体部分 */
     width:10px;
     /*margin-right:2px*/
  }
  ::-webkit-scrollbar-button { /* 滚动条两端的按钮 */
     width:2px;
     background-color: #fff;
  }
  ::-webkit-scrollbar:horizontal {
     height:10px;
  }
  ::-webkit-scrollbar-track {  /* 外层轨道 */
     border-radius: 10px;
  }
  ::-webkit-scrollbar-track-piece {  /*内层轨道，滚动条中间部分 */
     background-color: #fff;
     border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {  /* 滑块 */
     width:10px;
     border-radius: 5px;
     background: #e1e2e6;
  }
  ::-webkit-scrollbar-corner { /* 边角 */
     width: 10px;
     background-color: #fff;
  }
  ::-webkit-scrollbar-thumb:hover { /* 鼠标移入滑块 */
     background: #909090;
  }

  html {
    height: 100%;
    width: 100%;
    background: #fff;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style-type: none;
  }
  ul,li,p,h3,h4 {
    margin: 0;
    padding: 0;
  }
  .orange-c {
    color: #ff5e2f;
  }
  .btn {
    display: inline-block;
    width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius:  100px;
    font-size: 14px;
    text-align: center;
  }
  .btn-light {
    background: #4db2ff;
    color: #fff;
  }
  .btn-default {
    background: #fff;
    color: #4db2ff;
    border: 1px solid #4db2ff;
  }
  .active-nav {
    color: #4db2ff!important;
    border-bottom: 4px solid #4db2ff;
    cursor: pointer!important;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
