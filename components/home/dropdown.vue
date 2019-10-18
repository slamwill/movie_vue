<template>
  <div v-clickoutside="hide" class="drop-down">
    <div class="phone-show-menu" @click="handleMenuClick">
      <span>{{ title }}</span>
      <v-icon name="arrow-down-b"></v-icon>
    </div>
    <ul 
      class="phone-hide" 
      :class="{
        'show': show
      }">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="nav-item link-item"
        @click="handleItemClick(item.title)">

        <div v-if="item.name=='index'">
          <nuxt-link to="/">
            {{ item.title }}
          </nuxt-link>
        </div>
        <div v-else-if="item.name=='censored'">
          <nuxt-link to="/censored">
            {{ item.title }}
          </nuxt-link>
        </div>
        <div v-else-if="item.name=='uncensored'">
          <nuxt-link to="/uncensored">
            {{ item.title }}
          </nuxt-link>
        </div>
        <div v-else-if="item.name=='united'">
          <nuxt-link to="/united">
            {{ item.title }}
          </nuxt-link>
        </div>
        <div v-else-if="item.name=='cartoon'">
          <nuxt-link to="/cartoon">
            {{ item.title }}
          </nuxt-link>
        </div>
        <div v-else-if="item.name=='self'">
          <nuxt-link to="/self">
            {{ item.title }}
          </nuxt-link>
        </div>
        <div v-else>
          <nuxt-link to="/">
            {{ item.title }}
          </nuxt-link>
        </div>


        <!-- <div v-if="item.name!=='index'">
          <nuxt-link :to="{ name: 'videoList' ,params:{videoList:item.name}}">
            {{ item.title }}
          </nuxt-link>
        </div>
        <div v-else>
          <nuxt-link to="/">
            {{ item.title }}
          </nuxt-link>
        </div> -->


      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Clickoutside from '@/utils/dom/clickoutside'

export default {
  name: 'VDropdown',
  directives: { Clickoutside },
  data () {
    return {
      show: false,
      title: '首页',
      items: [
        { name: 'index', title: '首頁' },
        { name: 'censored', title: '有碼' },
        { name: 'uncensored', title: '無碼' },
        { name: 'united', title: '歐美' },
        { name: 'cartoon', title: '動畫' },
        { name: 'self', title: '短片' },
      ]
    }
  },
  computed: {
    ...mapState({
      isPhone: state => state.isPhone
    })
  },
  methods: {
    handleMenuClick () {
      this.show = !this.show
    },
    handleItemClick (title) {
      this.show = false
      this.title = title
    },
    hide () {
      this.show = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.drop-down {
  // display flex
  // align-items center
  // justify-content center
  // padding 0 2rem
  // font-size 1.3rem
  // color #007fff
  .phone-show-menu {
    display none
  }
  span {
    margin-right .5rem 
  }
  .phone-hide {
    display flex
    .nuxt-link-exact-active {
      color #007fff
    }
  }
}
@media (max-width 980px) {
  .drop-down {
    .phone-show-menu {
      height 5rem
      display flex
      align-items center
      font-size 1.33rem
      color white
      justify-content center
      padding 0 2rem
      background #df549d99;
    }
    .phone-hide {
      display none
      background-color #fff
      box-shadow 0 1px 2px 0 rgba(0,0,0,.1)
      border 1px solid hsla(217,5%,71%,.45)
      border-radius 4px
      font-size 1.2rem
    }
    .phone-hide.show {
      display block  
    }
  }
}
</style>
