<template>
  <v-app>
    <v-content>
      <v-card>
        <v-app-bar>
          <v-card-title>{{ name }}</v-card-title>
        </v-app-bar>

        <draggable :options="{ group: 'items' }">
          <KbnCard
            v-for="item in this.$store.getters.itemsBy(Number(id))"
            v-bind:key="item.id"
            v-bind:id="item.id"
            v-bind:title="item.title"
            v-bind:listId="id"
          />
        </draggable>
        <KbnForm v-bind:listId="id" />
      </v-card>
    </v-content>
  </v-app>
</template>

<script>
import KbnForm from "./KbnForm";
import KbnCard from "./KbnCard";
import draggable from "vuedraggable";

export default {
  components: {
    KbnForm,
    KbnCard,
    draggable
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    //
  })
};
</script>
