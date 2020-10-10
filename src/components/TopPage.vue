<template>
<div id="main">
  <Header></Header>
  <b-container class="bv-example-row">
  <b-row>
    <b-col col lg="11">
  <b-card id="top" overlay no-body class="overflow-hidden" align="left">
    <b-row no-gutters>
      <b-col md="4">
        <b-card-img :src="require('../assets/character/header_image.jpg')" alt="長谷川麟子" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="8">
        <b-card-body>
          <b-card-text>
              <p>{{ msg }}</p>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
      <div class="accordion" role="tablist">
    <b-card id="contents01" no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.found-accordion variant="dark">王怡寧記念財団　会員企業一覧</b-button>
      </b-card-header>
      <b-collapse id="found-accordion" visible="false" accordion="accordion-contents1" role="tabpanel">
       <b-row no-gutters>
      <b-col md="4">
        <b-card-img :src="require('../assets/top/thumbnail_contents01.jpg')" alt="contents01-img" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="8">
        <b-card-body>
          <b-card-text>
            <p>{{ listTxt }}</p>
          </b-card-text>
          <b-button v-on:click="change" href="#/frontpage" variant="primary">
            <font-awesome-icon icon="check" />閲覧する</b-button>
        </b-card-body>
      </b-col>
       </b-row>
      </b-collapse>
    </b-card>
  </div>
  </b-col>
  <b-col col lg="1">
    <v-card>
    <v-card-title></v-card-title>
    <v-flex xs12>
      <Timeline :id="user_id" sourceType="profile" :options="{ tweetLimit: '3' }"/>
    </v-flex>
  </v-card>
  </b-col>
  </b-row>
  </b-container>
  <Footer></Footer>
</div>
</template>
<script>
import Header from '@/components/Header'
import App from '../App'
import Footer from '@/components/Footer'
import { Timeline } from 'vue-tweet-embed'
export default {
  name: 'TopPage',
  components: {
    Header,
    Footer,
    Timeline
  },
  data () {
    return {
      show: false,
      msg: 'このページは、クラスター爆弾が過去に執筆した小説の設定を、何かそれっぽくWEBアプリとして表現して公開する場です。過度な期待はしないでください。\n' +
           '残っていない作品に関するコンテンツも含まれますが、知っている人は「そんなのあったなぁ」と懐かしみつつ、知らない人は世界観だけでも楽しんでいただければ幸いです。\n' +
           '\n' +
           'イラスト：『麟子さんって魔法だけはダメだよね』より長谷川麟子（作：巫凪かんな様）',
      listTxt: '公益財団法人王怡寧記念財団は、香港の実業家である王怡寧氏の経済的・人道的功績を称え、2023年、彼女の友人であり共同経営者である劉竹月らによって設立されました。\n' +
               '氏の理念を継承し、慈善事業と経済活動を通じて、世界の発展と恒久的な平和の実現に貢献して参ります。\n' +
               '\n' +
               '久化13年 11月\n' +
               '公益財団法人　王怡寧記念財団\n' +
               '理事長　連 燐',
      user_id: 'compfesta2020'

    }
  },
  methods: {
    change: function () {
      App.display = true
    }

  }
}
</script>
<style scoped>
p {
text-align: left;
}
#main {
 background-color: rgb(7, 1, 19); 
}
#top {
  white-space: pre-wrap;
  word-wrap:break-word;
}
#contents01 {
  white-space: pre-wrap;
  word-wrap:break-word;
  max-width: 70rem;
}
</style>
