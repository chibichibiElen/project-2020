<template>
  <div id="front">
      <Header></Header>
      <b-navbar toggleable="lg" type="dark" variant="warning">
        <b-img :src="require('../assets/front/logo.jpg')"></b-img>
      <b-navbar-nav class="ml-auto">
        <b-button variant="light" href="#/frontpage">戻る</b-button>
      </b-navbar-nav>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      </b-navbar>
      <b-container class="front-contents">
        <b-row>
          <b-col>
           <b-list-group>
             <b-list-group-item v-on:click="setData(item)" v-b-modal="'modal'" variant="light" v-for="item in items" :key=item.id>
                <b-img :src="setFlag(item)" ></b-img>
               {{ item.name }}
             </b-list-group-item>
            </b-list-group>
            <b-modal id="modal" size="lg" title="会員企業情報">
              <label for="name" >◇企業名</label>
              <p id="name">{{ selected_name }}</p>
              <label for="industry" >◇業種</label>
              <p id="industry">{{ selected_industry }}</p>
              <label for="headquarters" >◇本社所在地</label>
              <p id="headquarters">{{ selected_headquarters }}</p>
              <label for="empnumber" >◇従業員数</label>
              <p id="empnumber">{{ selected_empnumber }}</p>
              <label for="keyperson" >◇代表者</label>
              <p id="keyperson">{{ selected_keyperson }}</p>
              <label for="text" >◇紹介</label>
              <p id="text">{{ selected_text }}</p>
           </b-modal>
           </b-col>
         <b-col>
         </b-col>
       </b-row>
     </b-container>
    <router-view/>

  </div>

</template>

<script>
import Header from '@/components/Header'
import frontDataSource from '../assets/front/wang_foundation_memberlist.json'
export default {
  name: 'App',
  data () {
    return {
      items: [],
      selected_name: '',
      selected_industry: '',
      selected_headquarters: '',
      selected_empnumber: '',
      selected_keyperson: '',
      selected_text: ''
    }
  },
  methods: {
    getFrontData: async function () {
      const jsonObject = frontDataSource
      const frontData = {}
      jsonObject.reverse.forEach((obj) => {
        frontData[obj.date] = obj
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
    },
    setData: function (item) {
      this.selected_name = item.name
      this.selected_industry = item.industry
      this.selected_headquarters = item.headquarters
      this.selected_empnumber = item.empnumber
      this.selected_keyperson = item.keyperson
      this.selected_text = item.text
    },
    setFlag: function (item) {
      switch (item.nation) {
        case 1:
          return require('../assets/img/China-flag.png')
        case 2:
          return require('../assets/img/Japan-flag.png')
        case 3:
          return require('../assets/img/Korea-flag.png')
        case 4:
          return require('../assets/img/Russia-flag.png')
        case 5:
          return require('../assets/img/Italy-flag.png')
        case 6:
          return require('../assets/img/Taiwan-flag.png')
        case 7:
          return require('../assets/img/United-kingdom-flag.png')

        default:
          return require('../assets/img/United-states-flag.png')
      }
    }
  },

  mounted () {
    this.getFrontData()
    this.setData()
    this.setFlag()
  },
  components: {
    Header
  }
}
</script>

<style>
#front {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  background-color: #0c3864;
  margin-top: 60px;
}
nav .navbar-nav li a {
  color: #000000 !important;
}
</style>
