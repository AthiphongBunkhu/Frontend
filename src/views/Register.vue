<template>
  <section>
    <div class="txt">
      <div class="middle">
        <form @submit.prevent="onRegister()">
          <h1>SIGN UP</h1>
          <p>Please fill in this form to create an account.</p>
          <input
            v-model="form.username"
            type="text"
            class="input"
            placeholder="Enter Username"
            required />
          <br>
          <input
            v-model="form.firstname"
            type="text"
            class="input"
            placeholder="Enter Firstname"
            required />
          <br>
          <input
            v-model="form.lastname"
            type="text"
            class="input"
            placeholder="Enter Lastname"
            required />
          <br>
          <input
            v-model="form.email"
            type="email"
            class="input"
            placeholder="Enter Email"
            required />
          <br>
          <input
            v-model="form.password"
            type="password"
            class="input"
            placeholder="Enter Password"
            required />
          <br>
          <input
            v-model="form.confirmPassword"
            type="password"
            class="input"
            placeholder="Confirm Password"
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
            Sign Up
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
        firstname: '',
        lastname: '',
        password: '',
        email: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    async onRegister () {
      try {
        console.log(this.username)
        if (this.form.password === this.form.confirmPassword) {
          const { data } = await axios.post('http://env-1489426.app.ruk-com.cloud/register', {
            username: this.form.username,
            firstname: this.form.firstname,
            lastname: this.form.lastname,
            password: this.form.password,
            email: this.form.email
          })

          alert(data.msg)
          console.log(data)
          
          this.$router.push({ name: 'Login' })
        } else {
          alert('กรุณากรอกรหัสให้ตรงกัน')
        }
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
input[type="password"],
input[type="email"] {
  width: 50%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus,
input[type="email"]:focus {
  background-color: #ddd;
  outline: none;
}
</style>