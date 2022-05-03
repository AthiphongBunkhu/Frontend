<template>
  <div class="container">
    <router-view/>
  </div>
</template>

<style>
* {
  font-family: "Courier New", Courier, monospace;
  margin: 0;
  padding: 0;
}
body {
  background-color: #f3e3d3
}
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
.button button.room{
  float: right;
  color: #462419;
  background-color: #f3e3d3;
  border: none;
  text-align: center;
  padding: 64px 66px;
  text-decoration: none;
  font-size: 22px;
}
</style>
