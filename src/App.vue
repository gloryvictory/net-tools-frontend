<template>
  <v-app class="grey lighten-4">

    <NavBar />

     <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>

  </v-app>
</template>


<script>
//https://github.com/vuetifyjs/awesome-vuetify
//https://www.npmjs.com/package/vue-json-excel
//https://github.com/dwqs/js2excel

import NavBar from './components/NavBar';

export default {
  name: 'App',

  components: {
     NavBar, 
  },

  data: () => ({
    
  }),
};
</script>
