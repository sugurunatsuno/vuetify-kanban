<template>
  <v-container>
    <v-layout>
      <v-flex xs4>
        <KbnList id="0" name="リスト1" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import KbnList from "./KbnList";
export default {
  components: {
    KbnList
  },
  props: {
    lists: {
      type: Array,
      default: () => []
    }
  }
};
</script>
