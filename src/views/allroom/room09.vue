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
    <img src="../../assets/img/logo.png" />
    <hr noshade align="center" width="100%" color="#462419" />
    </div>

    <div class="middle">
    <div class="txt">
      <h1>Room {{roomNo}}</h1>
    </div>
    <br>
    <div class="img">
      <img src="../../assets/img/superior.jpg" />
    </div>
    <br>
    <h2>ห้องพักแบบ {{ roomType }}</h2>
    <br>
    <h2>ห้องพักแบบ 1 ห้องนอน 1 ห้องน้ำพน้อมอ่างอาบน้ำ</h2>
    <h2>เตียง 6 ฟุต โต๊ะข้างเตียง 2 ตัว โซนห้องครัวพร้อมเครื่องใช้ไฟฟ้า</h2>
    <h2>โซฟา 1 ชุด โต๊ะ 1 ตัว เก้าอี้ 2 ตัว ตู้เสื้อผ้า 1 หลัง ชั้นวางของ 1 ชั้น</h2>
    <br>
    <h2> ราคา: {{price}} ต่อเดือน</h2>
    <br>
    <div v-if="roomStatus === ''">
      <router-link  
        to="/croom09"
        class="button"> 
        จองห้อง 
      </router-link>
    </div>
    <div v-else>
      <h2>ห้องถูกจองโดยคุณ {{roomStatus}}</h2>
    </div>
      
    <br>
  </div>
  
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <div class="section-line"></div>
  <img
    class="responsive-img"
    src="../../assets/img/logo.png" />  

</template>

<script>
import axios from 'axios'
export default {
  name: 'Room09',
data () {
        return {  
        room:{},  
        roomNo:'',
        price:'',
        roomStatus: '',
        roomType:'',
        username: '',
        };
    },
    async mounted(){
      await axios.get('http://env-1489426.app.ruk-com.cloud/getRoom/62714688e54c1af0f7ca04d4')
      .then((res) => {
        console.log(res.data);
        this.roomNo = res.data.result.roomNo;
        this.price = res.data.result.price;
        this.roomStatus = res.data.result.roomStatus;
        this.roomType = res.data.result.roomType;
      })
      .catch((error) => {
        console.log(error)
      });
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
.txt{
  color: #462419;
  font-size: 20px;
}

.middle {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.middle img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  
  }
</style>