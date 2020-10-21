<template>
  <div class="HomePage">
     <div class="test">
      <H1>Это проект для помощи в работе ИТ специалистов</H1>
     </div>
    <br>
    <p>Набор инструментов для помощи в работе специализированных ИТ подразделений</p>
    <ul>
      <li>
        <v-btn
          dark
          color="primary"
          @click.prevent="pushme"
       >
          NSLOOKUP - инструмент для проверки прямой и обратной зоны Контроллера домена

        </v-btn>
        
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
/* import Home from '@/components/Home.vue' */
//https://material.io/resources/icons/?style=baseline 

// Front-End Vuetify examples
// https://vuejsexamples.com
// https://github.com/gothinkster/realworld
// https://github.com/johndatserakis/koa-vue-notes-api
// https://qr-generator.ru
// https://vuejsexamples.com/sample-vue-vuetify-layout-for-a-tasks-management-web-application/
//

// BackEnd Examples
// https://tproger.ru/translations/developing-app-with-flask-and-vue-js/
// https://codeburst.io/full-stack-single-page-application-with-vue-js-and-flask-b1e036315532
// https://medium.com/@herbzhao/vue-js-flask-flask-sqlalchemy-6a85a67a7790

export default {
  name: 'HomePage',
  components: {  
  },
  methods:{
    pushme(){

      this.$router.push('/dnslookup');
    }

  }

}
</script>
