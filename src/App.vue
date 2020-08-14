<template>
<div id="app" >

  <div class="calc">
    <input type="text" v-if="active" class="first"  :value="change.join('')">
    <input type="text" v-if="!active&&resultActive" class="second" :value="change2.join('')">
    <input v-if="!resultActive" type="text"  class="third" :value="result" readonly>

    <div  v-for="n in number">
      <button v-if="active" @click="$store.commit('add', n)">{{n}}</button>
      <button v-if="!active" @click="$store.commit('add2', n)">{{n}}</button>
    </div>

    <div v-for="m in minus">
      <button @click="active=false; symbolsActive=true">{{m}}</button>
    </div>
    <div v-for="p in plus">
      <button @click="active=false; symbolsActive=false">{{p}}</button>
    </div>

    <div v-for="e in equally">
      <button v-if="symbolsActive" @click="$store.commit('minus');resultActive=false" >{{e}}</button>
      <button v-if="!symbolsActive" @click="$store.commit('plus');resultActive=false" >{{e}}</button>
    </div>
    <div v-for="r in reset">
      <button @click="$store.commit('reset'); active=true;resultActive=true">{{r}}</button>
    </div>




  </div>
</div>

</template>

<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'

export default {
  name: 'App',
  data(){
    return{
      active:true,
      symbolsActive:true,
      resultActive:true
    }
  },
  computed:mapGetters(['number','minus','plus','equally','change','change2','result','reset']),

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button{
  display: flex;
  flex-wrap: wrap;
  width: 100px;
  height: 50px;
  margin: 2px;
  justify-content: space-around;
  background: #c9e6ce;
  padding:5px;
  font-size: 25px;
  border-radius: 6px;



}
button:hover{
  cursor: pointer;
  background: #a6e0b0;
}
input{
  margin: 10px;
  font-size: 25px;
  border-radius: 6px;
}
.calc{
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,1.5);
  background: #6bf1c5;
  width: 315px;
  height: 380px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.first,.second{
  width: 288px;
  height: 30px;
}
.third{
  width: 288px;
  height: 30px;
  background: #dcd1d1;
}

</style>
