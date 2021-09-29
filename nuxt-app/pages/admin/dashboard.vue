<template>
<div>
  <index />
  <b-container>
    <b-row>
      <b-col class="mx-auto">
        <b-card title="Dashboard Page">
          Dashboard, welcome {{ $auth.user.name }}
        </b-card>
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>
<script>
import index from '../index.vue'
export default {
  components: { index },
  data(){
    return{
      user: this.$auth.user
    }
  }

  }
</script>
