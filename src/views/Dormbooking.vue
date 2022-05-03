<template>
  <div class="topnav">
   <button
      class="active"
      @click="onlogOut()">
      Logout
    </button>
      <router-link to="/dormbooking" > DORM BOOKING</router-link>
      <router-link to="/about" > ABOUT </router-link>
      <router-link to="/overview" > HOME  </router-link> 
    <img src="../assets/img/logo.png" />
    <hr noshade align="center" width="100%" color="#462419" />
    </div>

<div>
    <div class="block-1" > 
      <router-link to="/room01">
        <p>Room 101</p>
        <img src="../assets/img/room2.png" >
      </router-link> 
      
    </div>
    <div class="block-2" >
      <router-link to="/room02">
        <p>Room 102</p>
        <img src="../assets/img/room2.png" >
      </router-link> 
    </div>
    <div class="block-3" >
      <router-link to="/room03">
        <p>Room 103</p>
        <img src="../assets/img/room2.png" >
      </router-link> 
    </div>
    <div class="block-4" >
      <router-link to="/room04">
        <p>Room 104</p>
        <img src="../assets/img/room2.png" >
      </router-link> 
    </div>
    
    <div class="block-5" >
      <router-link to="/room05">
        <p>Room 201</p>
        <img src="../assets/img/room2.png" >
      </router-link> 
    </div>
    <div class="block-6" >
      <router-link to="/room06">
        <p>Room 202</p>
        <img src="../assets/img/room2.png" >
      </router-link> 
    </div>
    <div class="block-7" >
      <router-link to="/room07">
        <p>Room 203</p>
        <img src="../assets/img/room2.png" >
      </router-link> 
    </div>
    <div class="block-8" >
      <router-link to="/room08">
        <p>Room 204</p>
        <img src="../assets/img/room2.png" >
      </router-link> 
    </div>

    <div class="block-9" >
      <router-link to="/room09">
        <p>Room 301</p>
        <img src="../assets/img/room2.png" >
      </router-link> 
    </div>
    <div class="block-10" >
      <router-link to="/room10">
        <p>Room 302</p>
        <img src="../assets/img/room2.png" >
      </router-link> 
    </div>
    <div class="block-11" >
      <router-link to="/room11">
        <p>Room 303</p>
        <img src="../assets/img/room2.png" >
      </router-link> 
    </div>
    <div class="block-12" >
      <router-link to="/room12">
        <p>Room 304</p>
        <img src="../assets/img/room2.png" >
      </router-link> 
      <br>
    </div>
</div>
</template>

<script>
export default {
    data () {
        return {
        username: ''
        }
    },
    methods: {
        onlogOut() {
        localStorage.removeItem('dataUser')
        this.$router.push({ name: 'Home' })
        }
    }
}
</script>

<style scoped>
  .section-line {
    background-color: #462419;
    width: 100%;
    height: 2px;
    text-align: center;
  }
  .responsive-img {
    max-width: 100%;
    height: auto;
  }

  .block-1 {
	width: 120px;
	height: 120px;
	margin: 100px 150px;
	float: left;
}
.block-1 a {
  color: #462419;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
}

.block-2 {
	width: 120px;
	height: 120px;
	margin: 100px 150px;
	float: left;
}
.block-2 a {
  color: #462419;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
}
.block-3 {
	width: 120px;
	height: 120px;
	margin: 100px 150px;
	float: left;
}
.block-3 a {
  color: #462419;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
}
.block-4 {
	width: 120px;
	height: 120px;
	margin: 100px 155px;
	float: left;
}
.block-4 a {
  color: #462419;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
}
.block-5 {
	width: 120px;
	height: 120px;
	margin: 300px 155px;
	float: left;
}
.block-5 a {
  color: #462419;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
}
.block-6 {
	width: 120px;
	height: 120px;
	margin: 300px 155px;
	float: left;
}
.block-6 a {
  color: #462419;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
}
.block-7 {
	width: 120px;
	height: 120px;
	margin: 300px 155px;
	float: left;
}
.block-7 a {
  color: #462419;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
}
.block-8 {
	width: 120px;
	height: 120px;
	margin: 300px 155px;
	float: left;
}
.block-8 a {
  color: #462419;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
}
.block-9 {
	width: 120px;
	height: 120px;
	margin: 100px 155px;
	float: left;
}
.block-9 a {
  color: #462419;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
}
.block-10 {
	width: 120px;
	height: 120px;
	margin: 100px 155px;
	float: left;
}
.block-10 a {
  color: #462419;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
}
.block-11{
	width: 120px;
	height: 120px;
	margin: 100px 155px;
	float: left;
}
.block-11 a {
  color: #462419;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
}
.block-12 {
	width: 120px;
	height: 120px;
	margin: 100px 155px;
	float: left;
}
.block-12 a {
  color: #462419;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
}
.block-1 button.room{
  color: #462419;
  background-color: #f3e3d3;
  border: none;
}
.block-1 button:hover {
  background-color: #efcead;
  color: black;
}
.block-2 button.room{
  color: #462419;
  background-color: #f3e3d3;
  border: none;
  text-align: center;
}
.block-2 button:hover {
  background-color: #efcead;
  color: black;
}
.block-3 button.room{
  color: #462419;
  background-color: #f3e3d3;
  border: none;
  text-align: center;
}
.block-3 button:hover {
  background-color: #efcead;
  color: black;
}
.block-4 button.room{
  color: #462419;
  background-color: #f3e3d3;
  border: none;
  text-align: center;
}
.block-4 button:hover {
  background-color: #efcead;
  color: black;
}
.block-5 button.room{
  color: #462419;
  background-color: #f3e3d3;
  border: none;
  text-align: center;
}
.block-5 button:hover {
  background-color: #efcead;
  color: black;
}
.block-6 button.room{
  color: #462419;
  background-color: #f3e3d3;
  border: none;
  text-align: center;
}
.block-6 button:hover {
  background-color: #efcead;
  color: black;
}
.block-7 button.room{
  color: #462419;
  background-color: #f3e3d3;
  border: none;
  text-align: center;
}
.block-7 button:hover {
  background-color: #efcead;
  color: black;
}
.block-8 button.room{
  color: #462419;
  background-color: #f3e3d3;
  border: none;
  text-align: center;
}
.block-8 button:hover {
  background-color: #efcead;
  color: black;
}
.block-9 button.room{
  color: #462419;
  background-color: #f3e3d3;
  border: none;
  text-align: center;
}
.block-9 button:hover {
  background-color: #efcead;
  color: black;
}
.block-10 button.room{
  color: #462419;
  background-color: #f3e3d3;
  border: none;
  text-align: center;
}
.block-10 button:hover {
  background-color: #efcead;
  color: black;
}
.block-11 button.room{
  color: #462419;
  background-color: #f3e3d3;
  border: none;
  text-align: center;
}
.block-11 button:hover {
  background-color: #efcead;
  color: black;
}.block-12 button.room{
  color: #462419;
  background-color: #f3e3d3;
  border: none;
  text-align: center;
}
.block-12 button:hover {
  background-color: #efcead;
  color: black;
}
</style>