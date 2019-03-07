<template>
  <div id="app">

    <div v-if="showFinalModal" id="dim-background-overlay">
      <div id="success-modal">
        <weather-info></weather-info>
        <h1>{{ finalPopupMessage }}</h1>
        <div>Maximum offer was {{ employerSalary }}€</div>
        <div>Minimum expected salary was {{ employeeSalary }}€</div>
        <button @click="toggleShowFinalModal">OK</button>
      </div>
    </div>

    <navbar
    :toggleShowEmployeeComponent="toggleShowEmployeeComponent"
    :toggleShowEmployerComponent="toggleShowEmployerComponent"
    :hideAllModals="hideAllModals"
    ></navbar>

    <img src="./assets/logo.png">

    <div v-if="checkNoDataAndShowMessage()">Please input desired salaries by opening the menus on the top-right of the screen</div>

    <employee
    v-if="showEmployeeComponent"
    :salaryProp="employeeSalary"
    @employeeSalaryChanged="employeeSalary = $event"
    :checkSalariesMatchAndShowFinalModal="checkSalariesMatchAndShowFinalModal"
    :toggleShowEmployeeComponent="toggleShowEmployeeComponent"
    :toggleShowFinalModal="toggleShowFinalModal"
    ></employee>

    <employer
    v-if="showEmployerComponent"
    :salaryProp="employerSalary"
    @employerSalaryChanged="employerSalary = $event"
    :checkSalariesMatchAndShowFinalModal="checkSalariesMatchAndShowFinalModal"
    :toggleShowEmployerComponent="toggleShowEmployerComponent"
    :toggleShowFinalModal="toggleShowFinalModal"
    ></employer>

  </div>
</template>

<script>
import WeatherInfo from './components/WeatherInfo'
import Employee from './components/Employee'
import Employer from './components/Employer'
import NavBar from './components/NavBar'
export default {
  props: ['caca'],
  name: 'App',
  data() {
    return {
      employeeSalary: null,
      employerSalary: null,
      showEmployeeComponent: false,
      showEmployerComponent: false,
      weatherInfo: '',
      finalPopupMessage: 'Failure',
      showFinalModal: false
    }
  },
  components: {
    'employee': Employee,
    'employer': Employer,
    'weather-info': WeatherInfo,
    'navbar': NavBar
  },
  methods: {
    checkSalariesMatchAndShowFinalModal() {
        if (this.employeeSalary > this.employerSalary) {
          this.finalPopupMessage = 'Failure'
        } else if (this.employeeSalary <= this.employerSalary) {
          this.finalPopupMessage = 'Success'
        }
    },
    toggleShowFinalModal() {
      if (!this.employeeSalary || !this.employerSalary) {
        this.showFinalModal = false
      } else {
        this.showFinalModal = !this.showFinalModal
      }
    },
    toggleShowEmployeeComponent () {
      this.showEmployeeComponent = !this.showEmployeeComponent
      this.showEmployerComponent = false
    },
    toggleShowEmployerComponent () {
      this.showEmployerComponent = !this.showEmployerComponent
      this.showEmployeeComponent = false
    },
    hideAllModals () {
      this.showEmployeeComponent = false
      this.showEmployerComponent = false
    },
    showEmployeeSalary () {
      this.employeeSalary
      this.showEmployeeComponent
      return this.employeeSalary !== null && !this.showEmployeeComponent && !this.showEmployerComponent
    },
    showEmployerSalary () {
      this.employerSalary
      this.showEmployerComponent
      return this.employerSalary !== null && !this.showEmployerComponent && !this.showEmployeeComponent
    },
    checkNoDataAndShowMessage () {
      return !this.showEmployerSalary() && !this.showEmployeeSalary() && !this.showEmployerComponent && !this.showEmployeeComponent
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
h1 {
  margin-top: 0;
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#dim-background-overlay {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
  width: 100vw;
}
#success-modal {
  position: relative;
  background-color: white;
  border-radius: 6px;
  width: 500px;
  max-width: 80%;
  padding: 30px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
img {
  margin-top: 60px;
  margin-bottom: 20px;
}
</style>
