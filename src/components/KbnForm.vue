<template>
  <v-container grid-list-md text-center>
    <v-card>
      <v-layout>
        <!-- タスク名入力フォーム -->
        <v-card-title>
          <v-form>
            <v-text-field
              v-model="title"
              label="タスク名"
              required
            ></v-text-field>
          </v-form>
        </v-card-title>
        <v-card-actions>
          <v-btn @click="add(title, listId)">追加</v-btn>
        </v-card-actions>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import store from "../store";
export default {
  props: {
    listId: {
      type: Number
    }
  },
  data: () => ({
    title: ""
  }),
  methods: {
    // 追加ボタンクリックでタスク名をストアに渡し、自身を消す
    add: (title, listId) => {
      // todo: Vuexストアにtitleを格納する
      const list_id = Number(listId);
      store.commit("addList", { title: title, listId: list_id });
    },
    // 編集を取りやめる
    cancel: () => {
      // todo: 編集を取りやめる
    }
  }
};
</script>
