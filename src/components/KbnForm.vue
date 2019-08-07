<template>
  <v-container grid-list-md text-center>
    <v-card>
      <v-layout>
        <!-- タスク名入力フォーム -->
        <v-flex xs12>
          <v-form>
            <v-text-field
              v-model="title"
              label="タスク名"
              required
            ></v-text-field>
          </v-form>
        </v-flex>
        <v-flex xs6>
          <v-btn @click="add(title)">追加</v-btn>
        </v-flex>
        <v-flex xs6>
          <v-btn @click="cancel">キャンセル</v-btn>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import store from "../store";
export default {
  data: () => ({
    title: ""
  }),
  methods: {
    // 追加ボタンクリックでタスク名をストアに渡し、自身を消す
    add: title => {
      // todo: Vuexストアにtitleを格納する
      store.commit("addList", { title: title });
    },
    // 編集を取りやめる
    cancel: () => {
      // todo: 編集を取りやめる
    }
  }
};
</script>
