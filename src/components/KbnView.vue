<template>
  <v-container>
    <v-layout>
      <v-flex xs4>
        <KbnList id="0" name="やること" />
      </v-flex>
      <v-flex xs4>
        <KbnList id="1" name="やってること" />
      </v-flex>
      <v-flex xs4>
        <KbnList id="2" name="おわったこと" />
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
