<template>
  <div class="middle">
    <div class="txt">
    <form @submit.prevent="updateRoom()">
        <h1>ใบสัญญาของห้องพัก</h1>
        <br><br>
        <h3>รายละเอียดห้องพัก {{room.roomNo}} ห้องพักแบบ {{room.roomType}}
            <br>
            <br>
            ห้องพักแบบ 1 ห้องนอน 1 ห้องน้ำ เตียง 6 ฟุต 
            <br>
            โต๊ะข้างเตียง 2 ตัว โซนห้องครัวพร้อมเครื่องใช้ไฟฟ้า
            <br>
            โซฟา 1 ชุด โต๊ะ 1 ตัว เก้าอี้ 2 ตัว ตู้เสื้อผ้า 1 หลัง ชั้นวางของ 1 ชั้น
            <br>
            <br><br>
            <input
            v-model="room.roomStatus"
            type="text"
            class="input"
            placeholder="ลงชื่อคนจอง"
            required />
            
           <button type="submit" class="button">Submit</button>
        </h3>
    </form>
    </div>
</div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'Croom07',
data () {
        return {    
        room:{},
        username: '',
        };
    },
    async mounted(){
      await axios.get('http://env-1489426.app.ruk-com.cloud/getRoom/62714674e54c1af0f7ca04d0')
      .then((res) => {
        console.log(res.data);
        this.room = res.data.result
      })
      .catch((error) => {
        console.log(error)
      });
    },
    create(){
        axios.get('http://env-1489426.app.ruk-com.cloud/edit-room/62714674e54c1af0f7ca04d0')
        .then((res) => {
            this.room = res.data.result
        })
    },
    methods: {
        updateRoom(){
            axios.put('http://env-1489426.app.ruk-com.cloud/update-room/62714674e54c1af0f7ca04d0',this.room)
            .then((res) => {
                console.log(res)
                this.$router.push( '/room07' )
            }).catch(error =>{
                console.log(error)
            })
        },
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
  
  top: 50%;
  left: 50%;
  margin: auto;

}
input[type="text"],
input[type="password"] {
  width: 50%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}
</style>