export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt-App',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // With options

    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'

  //   '@nuxtjs/axios',
  // '@nuxtjs/auth'
  ],

  router: {
    middleware: ['auth']
  },

  auth: {
    strategies: {
      'laravelSanctum': {
        provider: 'laravel/sanctum',
        url: 'http://localhost:8000',
        endpoints:{
          login:{
            url:'/api/admin/login',
          },
          logout:{
            method: 'post',
            url:'/api/admin/logout'
          },
          user:{
            url:'/api/user'
          },
        },
        user:{
          property:false
        }
         }
      },
    },

    redirect:{
      login: '/admin/login',
      logout: '/',
      home: '/admin/dashboard'

    },

  axios: {
    // proxy: true,
    // credentials: true,
    baseURL: "http://localhost:8000/api/"
  },



  // axios: {
  //   baseURL:"localhost:8000/api/"
  // },

  // baseURL: 'http://localhost:8000/api/',
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
