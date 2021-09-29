<template>
<div>
  <index />
  <b-container>
    <b-row>
      <b-col cols="*" sm="*" md="6" lg="6" class="mx-auto mt-5 offset-2">
        <b-card title="Register Page">
          <b-form>

            <b-form-group>
              <label for="text-name">Name</label>
              <b-form-input type="text" v-model="form.name"></b-form-input>
            </b-form-group>

            <b-form-group>
              <label for="text-email">Email</label>
              <b-form-input type="email" v-model="form.email"></b-form-input>
            </b-form-group>

            <b-form-group>
              <label for="text-password">Password</label>
              <b-form-input type="password" v-model="form.password"></b-form-input>
            </b-form-group>

            <b-form-group>
              <b-button type="submit" @click.prevent="register()" block variant="primary">Register</b-button>
            </b-form-group>

          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
import Index from '../index.vue'
export default {
 auth: false,
  components: {Index},
  data: function(){

    return {
      form:{
        name: '',
        email: '',
        password: '',
      }
    }
  },
  methods:{
     async register(){
      await this.$axios.post('/admin/register', {
        data: this.form
      })
      .then( response => console.log( response ) )
      .catch( error => console.log( error ) )
    }
 	}
}
</script>
