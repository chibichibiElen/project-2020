<template>
  <div id="front">
      <Header></Header>
      <b-navbar toggleable="lg" type="dark" variant="light">
        <b-img :src="require('../assets/front/logo.jpg')"></b-img>
        <b-navbar-toggle target="front-collapse"></b-navbar-toggle>
        <b-collapse id="front-collapse" is-nav>
        <b-navbar-nav >
          <b-nav-item href="#">当財団について</b-nav-item>
          <b-nav-item href="#" >サイトマップ</b-nav-item>
          <b-nav-item href="#" >お問い合わせ</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
        <b-nav-item-dropdown text="言語" right>
          <b-dropdown-item href="#">English</b-dropdown-item>
          <b-dropdown-item href="#">Chinese</b-dropdown-item>
          <b-dropdown-item href="#">Russian</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-button variant="light" href="#/reversepage">会員専用ページ</b-button>
      </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <h3>会員企業について</h3>
      <p></p>
           <b-list-group class=".float-sm-left">
             <b-list-group-item v-on:click="setData(item)" v-b-modal="'modal'" variant="light" v-for="item in items" :key=item.id >
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
    <router-view/>

  </div>

</template>

<script>
import Header from '@/components/Header'
import frontDataSource from '../assets/front/wang_foundation_memberlist.json'
import * as d3geo from 'vue-d3-geo'
import 'vue-d3-geo/dist/vue-d3-geo.css'

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
      jsonObject.front.forEach((obj) => {
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
        case 8:
          return require('../assets/img/france-flag.png')
        default:
          return require('../assets/img/United-states-flag.png')
      }
    },
    setText: function (id) {

    }
  },

  mounted () {
    this.getFrontData()
    this.setData()
    this.setFlag()
  },
  components: {
    Header,
    D3GeoDoubleLayer: d3geo.D3GeoDoubleLayer,
    D3GeoEvents: d3geo.D3GeoEvents,
    D3GeoStatic: d3geo.D3GeoStatic
  }
}
</script>

<style>
#front {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  background-color: #ebeef1;
  margin-top: 60px;
}
nav .navbar-nav li a {
  color: #000000 !important;
}
</style>
