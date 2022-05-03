<template>
<div class="middle">
    <div class="txt">
        <h1>ข้อมูลห้องพัก</h1>
        <br>
        <table border="1px">
            <tr>
                <td> Room number </td>
                <td> Room price </td>
                <td> Room type </td>
                <td> Room status </td>
            </tr>
            <tr v-for="room in rooms" v-bind:key="room._id">
                <td>{{room.roomNo}}</td>
                <td> {{room.price}} </td>
                <td> {{room.roomType}} </td>
                <td> {{room.roomStatus}} </td>
                <td> <router-link :to="{name: 'editPD', params: {id: room._id}}" class="button">Edit</router-link> </td>
                <td> <button @click.prevent="deleteRoom(room._id)" class="button"> Delete </button> </td>
            </tr>
        </table>
        <br>
        <router-link to="/addPD" class="button">เพิ่มข้อมูล</router-link>
    </div>
</div>
  
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            rooms:{}
        }
    },
    methods:{
        async getData(){
           await axios.get('http://env-1489426.app.ruk-com.cloud/findRoom').then((res) =>
            {
                console.log(res.data)
                this.rooms = res.data.room;
            })
        },
        async deleteRoom(id){
           await axios.delete('http://env-1489426.app.ruk-com.cloud/delete-room/'+id).then(()=>
            {
                this.getData()
            })
        }
    },
    async mounted() {
       await this.getData()
    },
}
</script>

<style scope>
.txt{
  color: #462419;
  font-size: 20px;
}
.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.button {
  background-color: #462419;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>