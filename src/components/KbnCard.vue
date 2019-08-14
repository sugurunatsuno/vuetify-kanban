<template>
  <v-container grid-list-md text-center>
    <v-card>
      <v-layout>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-actions>
          <v-btn @click="remove(id)">削除</v-btn>
        </v-card-actions>
      </v-layout>
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
    },
    listId: {
      type: Number,
      required: true
    }
  },
  methods: {
    remove: targetId => {
      store.commit("removeAt", { id: targetId });
    }
  }
};
</script>
