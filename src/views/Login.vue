<template>
  <section>
    <div class="txt">
      <div class="middle">
        <form @submit.prevent="onLogin()">
          <h1>LOGIN</h1>
          <p>Login to website </p>
          <input
            v-model="form.username"
            type="text"
            class="input"
            placeholder="Enter Username"
            required />
          <br>
          <input
            v-model="form.password"
            type="password"
            class="input"
            placeholder="Enter Password"
            required />
          <br>
          <router-link
            to="/"
            class="button">
            Cancel
          </router-link>
          <button
            type="submit"
            class="button">
            Login
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async onLogin () {
      try {
        const { data } = await axios.post('http://env-1489426.app.ruk-com.cloud/login', {
          username: this.form.username,
          password: this.form.password
        })

        alert(data.msg)
        console.log(data)
        localStorage.setItem('dataUser', JSON.stringify(data.data))
        
        this.$router.push({ name: 'Overview' })
      } catch (error) {
        console.error('onLogin', error)
        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
      }
    }
  }
}
</script>

<style scoped>
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