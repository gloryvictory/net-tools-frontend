<template>
  <nav>
    <v-toolbar color="primary" dark >
        <v-app-bar-nav-icon  @click="drawer = !drawer">

        </v-app-bar-nav-icon>
        <v-toolbar-title>NET Tools</v-toolbar-title>
        
        <v-spacer></v-spacer>
        
        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        
                
        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      color="primary"
      dark
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          
          active-class="white--text text--accent-4"
        >
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route"
          active-class="white--text text--accent-4"
          
          >
          <v-list-item-icon>
            <v-icon 
            >
                  {{ link.icon }}
            </v-icon>
          </v-list-item-icon>
            <v-list-item-title >
              
                  {{ link.text }}
            </v-list-item-title>
        </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    
  </nav>
</template>

<script>
export default {
    data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-home', text: 'Home', route: '/' },
        { icon: 'mdi-folder', text: 'NSLookup', route: '/dnslookup' },
        { icon: 'mdi-folder', text: 'test', route: '/' },
      ],
    }
  },
  //dark @click="drawer = !drawer"
}
</script>
