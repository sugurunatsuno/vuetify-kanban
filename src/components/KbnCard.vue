<template>
  <v-container>
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-btn @click="remove(id)">削除</v-btn>
    </v-card>
  </v-container>
</template>

<script>
import store from "../store";
export default {
  props: {
    title: {
      type: String
    },
    id: {
      type: Number
    }
  },
  methods: {
    remove: targetId => {
      store.commit("removeAt", { id: targetId });
    }
  }
};
</script>
