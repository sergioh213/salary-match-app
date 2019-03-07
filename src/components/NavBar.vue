<template lang="html">
  <nav>
    <button id="nav-button" @click="this.hideAllModals">home</button>
    <div id="right-icons">
      <button class="nav-button" @click="this.toggleShowEmployeeComponent">employee</button>
      <button class="nav-button" @click="this.toggleShowEmployerComponent">employer</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: [
    'toggleShowEmployeeComponent',
    'toggleShowEmployerComponent',
    'hideAllModals'
  ]
}
</script>

<style  scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
button {
  border-radius: 31px;
  border: none;
  height: 50px;
  min-width: 50px;
  background-color: rgb(47, 64, 83);
  color: white;
  cursor: pointer;
  font-size: 12px;
  margin-top: 0;
}
button:hover {
  background-color: rgb(77, 104, 135);
}
#right-icons {
  display: flex;
}
#right-icons button:first-child {
  margin-right: 10px;
}
#right-icons button {
  padding: 0 20px;
}
</style>
