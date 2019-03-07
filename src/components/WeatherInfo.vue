<template lang="html">
    <div v-html="htmlFromWeatherAPI"></div>
</template>

<script>
import axios from '../../config/axios'
export default {
  data () {
    return {
      htmlFromWeatherAPI: ''
    }
  },
  created () {
    axios
      .get('https://api.openweathermap.org/data/2.5/weather?q=London&mode=html&appid=418604052330108c16fe07edd902894c')
      .then(({data}) => this.htmlFromWeatherAPI = data)
  }
}
</script>
