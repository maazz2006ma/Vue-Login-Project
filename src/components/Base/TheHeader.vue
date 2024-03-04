<template>
  <v-toolbar density="compact" color="grey-darken-1">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Vuetify App</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn to="/login" color="grey-lighten-2">
      Login
    </v-btn>
    <v-btn to="/signup">
      SignUp
    </v-btn>
  </v-toolbar>
</template>