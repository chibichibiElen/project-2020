<template>
  <div id="app">
    <router-view/>
  </div>
<!-- version:1.0.0 -->
</template>

<script>
import Header from '@/components/Header'
import TopPage from '@/components/TopPage'
import frontDataSource from './assets/front/wang_foundation_memberlist.json'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  display: false,
  data () {
    return {
      items: []
    }
  },
  methods: {
    getFrontData: async function () {
      const jsonObject = frontDataSource
      const frontData = {}
      jsonObject.front.forEach((obj) => {
        frontData[obj.date] = obj
        console.log(obj.id, obj.name, obj.industry)
        this.items.push({
          id: obj.id,
          nation: obj.nation,
          name: obj.name,
          industry: obj.industry,
          headquarters: obj.headquarters,
          empnumber: obj.empnumber,
          keyperson: obj.keyperson,
          text: obj.text
        })
      })
    }
  },

  mounted () {
    this.getFrontData()
  },
  components: {
    Header,
    TopPage,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0a1c36;
  margin-top: 60px;
}
</style>ssss
