<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">熱狂的妄想吹聴群　クラ☆スタ</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
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
