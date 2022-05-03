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

    <center>
        
        <img src="../assets/img/about01.png" >
        <br><br><br><br><br><br><br><br>
        <img src="../assets/img/about02.png" >
        <br><br><br><br><br><br><br><br>
        <img src="../assets/img/about03.png" >
        <br><br><br><br><br><br><br><br>
        <hr noshade align="center" width="100%" color="#462419" />
        
    </center>
    <img src="../assets/img/logo.png" />
  
</template>

<script scoped>

export default {
    data () {
        return {
        username: '',
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

<style>
    .section-line {
  background-color: #462419;
  width: 100%;
  height: 2px;
}
.responsive-img {
  max-width: 100%;
  height: auto;
}
.topnav {
  overflow: hidden;
  background-color: #f3e3d3;
}

.topnav a {
  float: right;
  color: #462419;
  text-align: center;
  padding: 64px 66px;
  text-decoration: none;
  font-size: 22px;
}

.topnav b.le {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 34px 36px;
  text-decoration: none;
  font-size: 17px;
  margin-left: 70px;
}

.topnav a:hover {
  background-color: #efcead;
  color: black;
}

.topnav a.active {
  background-color: #efcead;
  color: #462419;
}

.topnav button{
  float: right;
  color: #462419;
  background-color: #f3e3d3;
  border: none;
  text-align: center;
  padding: 64px 66px;
  text-decoration: none;
  font-size: 22px;
}

.topnav button:hover {
  background-color: #efcead;
  color: black;
}
</style>