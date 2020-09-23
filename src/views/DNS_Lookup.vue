<template>
    <div class="DNS_Lookup">
       <h1>NSLookup - Сканирование сети прямой и обратной зоны Контроллера домена</h1>
        <v-btn
          class="ma-0"
          :loading="loading"
          :disabled="loading"
          color="primary"
          @click="loader = 'loading'"
        >
          Обновить
        </v-btn>
      
        <v-data-table
          :headers="headers"
          :items="dnslist"
          class="elevation-1"
        >

          <template v-slot:item.WARNING="{ item }">
            <v-chip :color="getColor(item.WARNING)" dark>{{ item.WARNING }}</v-chip>
          </template>
          <template v-slot:item.LASTUPDATE="{ item }">
            {{ item.LASTUPDATE | dateFilter('datetime')}}
          </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
  name: 'DNS_Lookup',
  
  data () {
      return {
        
        loader: null,
        loading: false,
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
   
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
  components: {
    
  },
  computed:{

      dnslist(){
              return this.$store.state.root.row;
          },
    }, 
    methods: {
      getColor (warning) {
        if (warning.includes('HIGH')) return 'red'
        else if (warning.includes('LOW')) return 'orange'
        else return 'green'
      },
    },  
};

</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
