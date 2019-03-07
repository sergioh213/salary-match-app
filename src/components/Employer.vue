<template>
  <div class="employer">
    <h4>Employer</h4>
    <div id="input-label">What is the maximum offer yearly in €?</div>
    <input
    type="number"
    placeholder="Max salary"
    :value="salaryProp"
    @input="handleChange"
    min="0"
    >
    <button @click="handleSubmit">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'Employer',
  props: [
    'salaryProp',
    'toggleShowEmployerComponent',
    'checkSalariesMatchAndShowFinalModal',
    'toggleShowFinalModal'
  ],
  data () {
    return {
      salary: ''
    }
  },
  methods: {
    handleChange (e) {
      this.salary = parseInt(e.target.value, 10)
      this.$emit('employerSalaryChanged', this.salary)
    },
    handleSubmit () {
      this.checkSalariesMatchAndShowFinalModal()
      this.toggleShowEmployerComponent()
      this.toggleShowFinalModal()
    }
  }
}
</script>

<style scoped>
.employer {
  position: relative;
  border: #42b983 solid 1px;
  border-radius: 6px;
  width: 500px;
  max-width: 80%;
  padding: 30px;
  left: 50%;
  transform: translateX(-50%);
}
#input-label {
  color: #42b983;
  font-weight: 400;
  font-size: 14px;
}
input {
  margin-top: 15px;
  height: 40px;
  font-size: 16px;
  width: 120px;
  text-align: center;
  border-radius: 6px;
  border: 1px lightgrey solid;
}
button {
  background-color: #42b983;
  border: none;
  border-radius: 6px;
  color: white;
  padding: 10px 30px;
  font-size: 20px;
  font-weight: 400;
  margin-top: 20px;
  cursor: pointer;
}
button:hover {
  background-color: #61e2a8;
}
h4 {
  margin-top: 0px;
  margin-bottom: 30px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
