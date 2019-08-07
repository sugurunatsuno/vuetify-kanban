<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <KbnCard
        v-for="item in this.$store.getters.allItems"
        v-bind:key="item.id"
        v-bind:id="item.id"
        v-bind:title="item.title"
      />
      <KbnForm />
      <KbnForm />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import KbnForm from "./components/KbnForm";
import KbnCard from "./components/KbnCard";

export default {
  name: "App",
  components: {
    HelloWorld,
    KbnForm,
    KbnCard
  },
  data: () => ({
    //
  })
};
</script>
