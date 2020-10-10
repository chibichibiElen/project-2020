<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-toggle target="footer-collapse"></b-navbar-toggle>
      <b-collapse id="footer-collapse" is-nav>
          <b-nav-item href="https://kakuyomu.jp/users/comp7411/works" target="_blank" rel="noopener noreferrer">
        <b-img :src="require('../assets/img/kakuyomu-logo.png')" width="100%"></b-img>
      </b-nav-item>
      <b-nav-item href="https://mypage.syosetu.com/1844310/" target="_blank" rel="noopener noreferrer">
        <b-img :src="require('../assets/img/logo_narou.gif')" width="100%"></b-img>
      </b-nav-item>
      <b-nav-item href="https://novelup.plus/user/236320118/story" target="_blank" rel="noopener noreferrer">
        <b-img :src="require('../assets/img/siteLogo.png')"  width="100%"></b-img>
      </b-nav-item>
      </b-collapse>
    </b-navbar>
</template>

<script>
import App from '../App'

export default {
  data () {
    return {
      display: false
    }
  },
  props: {
    header: {
      type: String,
      default: 'No Heading',
      required: false
    }
  },
  methods: {
    change: function () {
      App.display = false
    }
  }
}
</script>
