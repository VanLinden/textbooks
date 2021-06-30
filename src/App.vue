<template>
  <div id="app">
    <BookList/>
    <!-- <pre v-text="log(books)"/> -->
  </div>
</template>

<script>
import BookList from "./components/BookList";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    BookList
  },
  computed: {
    ...mapState({
      books: state => state.books
    })
  },
  methods: {
    log(o) {
      return JSON.stringify(o, null, 2);
    }
  }
};
</script>

