<template>
<div class="txt">
      <div class="middle">
            <!-- Update goes here -->
            <h1>แก้ไขข้อมูล</h1>
            <form @submit.prevent="updateRoom()">

                    <input type="text" class="form-control" v-model="room.roomNo" >

                    <input type="text" class="form-control" v-model="room.price" >

                    <input type="text" class="form-control" v-model="room.roomType" >

                    <input type="text" class="form-control" v-model="room.roomStatus" >
                    <br>
                    <button class="button">Update</button>

            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
data () {
        return {    
        room:{},
        }
    },
    created(){
        axios.get(`http://env-1489426.app.ruk-com.cloud/edit-room/${this.$route.params.id}`).then((res)=>{
            this.room = res.data
        })
    },
    methods: {
        updateRoom(){
            axios.put(`http://env-1489426.app.ruk-com.cloud/update-room/${this.$route.params.id}`,this.room)
            .then((res) => {
                console.log(res)
                this.$router.push( '/deletePD' )
            }).catch(error =>{
                console.log(error)
            })
        },
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