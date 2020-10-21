<template>
    <div class="DNS_Lookup">
       <h1>NSLookup - Сканирование сети прямой и обратной зоны Контроллера домена</h1>
        <v-btn
          
          class="ma-0"
          color="primary"
          :loading="loading"
          :disabled="loading"
          @click="getData"
        >
          Обновить
        </v-btn>
      
        <v-data-table
          class="elevation-1"
          :headers="headers"
          :items="nslookup_data"
          :loading="loading"
          loading-text="Loading... Please wait"
        >

          <template v-slot:item.WARNING="{ item }">
            <v-chip :color="getColor(item.WARNING)" dark>{{ item.WARNING }}</v-chip>
          </template>
          <template v-slot:item.LASTUPDATE="{ item }">
            {{ item.LASTUPDATE }}
            <!-- {{ item.LASTUPDATE | dateFilter('datetime')}} -->
          </template>
        </v-data-table>
      <v-footer
        padless
      >
        <v-row
          justify="center"
          no-gutters
        >
          <v-col
            class="text-center"
            cols="12"
          >
            (C) Вячеслав Замараев, 2020 - 
            {{ new Date().getFullYear() }} год
          </v-col>
        </v-row>
      </v-footer>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'DNS_Lookup',
 



  data () {
      return {
        loading: false,
        loader: null,
        
        nslookup_data: [],
        headers: [
          {
            text: 'Имя компьютера',
            align: 'start',
            sortable: true,
            value: 'COMPNAME',
          },
          { text: 'Контроллер домена', value: 'DC' },
          { text: 'IP адрес контроллера', value: 'DC_IP' },
          { text: 'FQDN', value: 'FQDN' },
          { text: 'FQDN_IP', value: 'FQDN_IP' },
          { text: 'Обратная зона', value: 'NAME_BY_IP' },
          { text: 'Важность', value: 'WARNING' },
          { text: 'Обновлено', value: 'LASTUPDATE' },
        ]
      }
  },
   
    // watch: {
    //   loader () {
    //     const l = this.loader
    //     this[l] = !this[l]

    //     setTimeout(() => (this[l] = false), 3000)

    //     this.loader = null
    //   },
    // },
  // components: {
    
  // },
  // computed:{

  //     dnslist(){
  //             //this.data.loading = true;
  //             //const table_nslookup_data = this.$store.getters.TABLE_NSLOOKUP;
  //             //this.data.loading = false;
  //             //return table_nslookup_data;
  //             return null;
  //         },
  //   },

    methods: {

      getColor (warning) {
        if (warning.includes('HIGH')) return 'red'
        else if (warning.includes('LOW')) return 'orange'
        else if (warning.includes('DOWN')) return '#670AD1'
        return 'green'
      },

      getData(){
        
        this.loading=true;
        //console.log(this);
        this.nslookup_data = [];

        //setTimeout(() => (this.loading=false), 3000);
        //const url = "http://localhost:5000/nslookup";
        const url = "http://localhost:5000/nslookuptodb";
        

        console.log(Axios.defaults.baseURL);
        console.log(Axios.defaults.baseURL);

        Axios.get(url).then(response => {
            this.nslookup_data = response.data;
            this.loading=false;
          })


        //this.nslookup_data = this.$store.getters.TABLE_NSLOOKUP;
        
        //alert('OK');
        //console.log(this);
        return this.nslookup_data;
      },

      getDataFromDB(){
        
        this.loading=true;
        //console.log(this);
        this.nslookup_data = [];

        //setTimeout(() => (this.loading=false), 3000);
        const url = "http://localhost:5000/getnslookupfromdb";

        console.log(Axios.defaults.baseURL);
        console.log(Axios.defaults.baseURL);

        Axios.get(url).then(response => {
            this.nslookup_data = response.data;
            this.loading=false;
          })


        //this.nslookup_data = this.$store.getters.TABLE_NSLOOKUP;
        
        //alert('OK');
        //console.log(this);
        return this.nslookup_data;
      },
    },  
    mounted() {
      //this.$store.dispatch('GET_NSLOOKUP');
      this.getDataFromDB();

    },
};

</script>
