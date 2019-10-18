<template>
  <header class="v-header">
    <div class="header-container">
      <nuxt-link to="/">
        <img src="~/assets/img/juejin.svg" alt="掘金" class="logo-img">
      </nuxt-link>
      <nav class="main-nav">
        <ul class="nav-list">
          <li class="main-nav-list">
            <v-dropdown />
          </li>
          <li class="nav-item search">
            <!-- <nuxt-link to="/search"> -->



            <!-- <v-input /> -->
            <!-- <input type="text" v-on:input="addToCart($event, ticket.id)" placeholder="搜索"> -->

            <input type="text" v-model="searchSomething" placeholder="搜索">
            <button type="button" @click="search($event)"><img src="/_nuxt/assets/img/search.svg" alt="搜索" class="search-icon"></button>



            <!-- </nuxt-link> -->
          </li>

        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import VDropdown from './dropdown'

export default {
  name: 'VHeader',
  components: {
    VDropdown
  },
  data () {
    return {
      maxClientWidth: 980,
      searchSomething: '',
    }
  },
  computed: {
    ...mapState({
      isPhone: state => state.isPhone,
      searchSomething: state => state.searchSomething
    })
  },
  methods: {
    search(event) {

      // searchSomething = this.searchSomething;
      this.$store.state.searchSomething = this.searchSomething;

      console.log('eeeeeeeeeee');
      console.log(this.$store.state.searchSomething)
      console.log('ssssssssssss');

      this.$router.push({ name: 'search', query: { searchSomething: this.searchSomething } });
      // this.$router.push({ name: 'search' });

      


      // alert(this.searchSomething);
      // alert('22222222222');


    }
  },
  mounted () {
    const self = this
    document.body.onresize = () => {
      if (document.body.clientWidth > self.maxClientWidth) {
        self.$store.commit('PCORPHONE', false)
      } else {
        self.$store.commit('PCORPHONE', true)
      }
    }
  }
}
</script>

<style lang="stylus">
@import '../../assets/stylus/header'

.v-header {
  position fixed
  top 0
  left 0
  right 0
  z-index 99
  height 5rem
  background #df549d99  
  color #909090
  border-bottom 1px solid #f1f1f1
  .header-container {
    max-width 960px
    height 100%
    margin auto
    display flex
    align-items center
    position relative
  }
  .main-nav {
    height 100%
    flex 1 0 auto
  }
}
@media (max-width 960px) {
  .v-header {
    .header-container {
      width 96%
    }
  }
}
</style>
