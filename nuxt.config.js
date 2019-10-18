import pkg from './package'

export default {
  //mode: 'universal',
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.1/css/all.css',integrity:'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr',crossorigin:'anonymous' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/flowplayer/7.2.7/skin/skin.min.css' },
      { rel: 'stylesheet', href: '/css/element-ui/index.css' },
      { rel: 'stylesheet', href: '/css/global.css' },
      // { rel: 'stylesheet', href: '/css/header.css' }



      // { rel: 'stylesheet', href: '/flowplayer/skin.min.css' },
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/flowplayer/7.2.7/flowplayer.min.js' },
      { src: 'https://avddav.com/js/hls.min.js' },
    ],


	},

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    // '@/assets/stylus/main.styl',
    // '@/assets/stylus/videoCategory.styl',
  ],
  // css: ['@/assets/stylus/main.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/main'
  ],

  router: {
    middleware: 'auth'
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   */
  
  axios: {
    proxy: true
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    '/api': {
      target: 'https://banner-storage-ms.juejin.im',
      pathRewrite: { '^/api': '' }
    },
    '/japi': {
      target: 'https://gold-tag-ms.juejin.im',
      pathRewrite: { '^/japi': '' }
    },
    '/wapi': {
      target: 'https://web-api.juejin.im',
      pathRewrite: { '^/wapi': '' }
    },
    '/tapi': {
      target: 'https://timeline-merger-ms.juejin.im',
      pathRewrite: { '^/tapi': '' }
    },
    '/xapi': {
      target: 'https://xiaoce-timeline-api-ms.juejin.im',
      pathRewrite: { '^/xapi': '' }
    }
  },
  generate: {
    routes: [
      '/welcome/frontend',
      '/welcome/android',
      '/welcome/backend',
      '/welcome/ai',
      '/welcome/ios',
      '/welcome/freebie',
      '/welcome/article'
    ],
    minify: {
      collapseWhitespace: false
    }
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
	  /*
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
	  */
    }
  }
}
