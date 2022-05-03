<template>
<div class="middle">
    <div class="txt">
    <h2>Add new Room</h2>
    <br>
    <form @submit.prevent="newPD()">
      <input
        v-model="form.roomNo"
        placeholder="Room Number"
        type="text"
        required
      />
      <input
        v-model="form.price"
        placeholder="Price"
        type="text"
        required
        
      />
      <input
        v-model="form.roomType"
        placeholder="Room Type"
        type="text"
        required
      />
      <input
        v-model="form.roomStatus"
        placeholder="Room Status"
        type="text"
      />
      <br>
      <br>
      <button
          class="button"
          type="submit">
          เพิ่มข้อมูล
      </button>
      <router-link to="/deletePD" class="button"> ดูข้อมูล </router-link>
    </form>
  </div>
</div>
  
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      form:{
          roomNo:'',
          price: '',
          roomType:'',
          roomStatus:''
      }
    }
  },
  methods: {
    async newPD(){
        try{
            const { data } = await axios.post('http://env-1489426.app.ruk-com.cloud/addRoom', {
                roomNo: this.form.roomNo,
                price: this.form.price,
                roomType: this.form.roomType,
                roomStatus: this.form.roomStatus
            })
            console.log(data)

        }catch(error){
            console.log("")
        }
    }
  }
};
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