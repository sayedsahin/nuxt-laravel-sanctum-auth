<template>
  <div>
     <b-navbar toggleable="lg" type="dark" class="mb-4" variant="info">
      <b-navbar-brand to="/">Home</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
      <template v-if="$auth.loggedIn">
        <b-nav-item to="/admin/dashboard">Dashboard</b-nav-item>
        <b-nav-item href="#" @click.prevent="logout()">Logout</b-nav-item>
      </template>
      <template v-else>
        <b-nav-item to="/admin/login">Login</b-nav-item>
      <b-nav-item to="/admin/register">Register</b-nav-item>
      </template>

    </b-navbar-nav>
     </b-navbar>
    <Nuxt />
  </div>
</template>

<script>
export default {
  methods:{
   async logout(){
     try {
        await this.$auth.logout();
     }
     catch( error)
      { console.log(error) }
    }
  }
}
</script>
