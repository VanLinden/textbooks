<template>
  <h1 style="text-align: center">Витрина</h1>
  <div style="text-align: center">
    <div style="display: inline-block">
      <select
        id="subject" :required="true"
        @change="onchange($event)"
        class="form-control"
        v-model="key"
      >
        <option :value="selected" >Все предметы</option>
        <option>Алгебра</option>
        <option>Биология</option>
        <option>География</option>
        <option>Геометрия</option>
        <option>Информатика</option>
        <option>История</option>
        <option>Литература</option>
        <option>Математика</option>
        <option>Обществознание</option>
        <option>Окружающий мир</option>
        <option>Робототехника</option>
        <option>Русский язык</option>
        <option>Физика</option>
        <option>Химия</option>
      </select>
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <div style="display: inline-block">
      <select
        id="leveles"
        @change="onchangeLevel($event)"
        class="form-control"
        v-model="key"
      >
        <option :value="selected">Все классы</option>
        <option>1 класс</option>
        <option>2 класс</option>
        <option>3 класс</option>
        <option>4 класс</option>
        <option>5 класс</option>
        <option>6 класс</option>
        <option>7 класс</option>
        <option>8 класс</option>
        <option>9 класс</option>
        <option>10 класс</option>
        <option>11 класс</option>
      </select>
    </div>
  </div>
  <transition name="page" mode="out-in">
    <keep-alive>
      <router-view :key="route_name_key" />
    </keep-alive>
  </transition>

  <div class="gallery">
    <div class="gallery-panel" v-for="book in books" :key="book.courseId">
      <img class="gallery-panel img" v-bind:src="getPic(book.courseId)" />
      <Book v-model:contents="book.title" />
      <Book v-model:contents="book.subject" />
      <Book v-model:contents="book.grade" класс />
      <Book v-model:contents="book.genre" />
      <span>Цена:</span>
      <Book style="display: inline-block" v-model:contents="book.price" />
      <span> руб.</span>
    </div>
  </div>
</template>

<script>
import Book from "./Book.vue";
import { mapState } from "vuex";
import { mapActions, mapGetters } from "vuex";
var subject = "";
var level = "";
var iniData = [];

export default {
  name: "BookList",
  components: { Book },
  computed: {
    ...mapState({
      books: (state) => state.books,
    }),
    ...mapGetters(["getBooks"]),
  },
  route_name_key: function () {
    return this.$route.path + "/" + this.language;
  },
  methods: {
    getPic(index) {
      return "/" + index + ".jpg";
    },
    onchange(e) {
      subject = e.target.value;

      if (subject === 'Все предметы') {
      this.$store.commit("removeBook", 80);
      iniData.forEach((element) => {
        console.log(element);
        const payload = element;
        this.addBook(payload);
      });
      } else {

      console.log("subject", subject);
      if (iniData.length === 0) {
        iniData = this.$store.state.books;
        iniData = JSON.parse(JSON.stringify(iniData));
      }
      console.log("iniData", iniData);
      let newData = [];
      iniData.forEach(function (item) {
        if (item.subject === subject) {
          newData.push(item);
        }
      });
      console.log(newData);
      this.$store.commit("removeBook", 80);
      newData.forEach((element) => {
        console.log(element);
        const payload = element;
        this.addBook(payload);
      });
      }
      // $('#genre').val('Все жанры');
      // $('#grade').val('Все классы');
    },
    onchangeLevel(e) {
      level = e.target.value;

      if (level === 'Все классы') {
      this.$store.commit("removeBook", 80);
      iniData.forEach((element) => {
        console.log(element);
        const payload = element;
        this.addBook(payload);
      });
      } else {

      console.log("level", level);
      if (iniData.length === 0) {
        iniData = this.$store.state.books;
        iniData = JSON.parse(JSON.stringify(iniData));
      }
      console.log("iniData", iniData);
      let newData = [];
      iniData.forEach(function (item) {
        if (item.class === level) {
          newData.push(item);
        }
      });
      console.log(newData);
      this.$store.commit("removeBook", 80);
      newData.forEach((element) => {
        console.log(element);
        const payload = element;
        this.addBook(payload);
      });
      }
    },
    ...mapActions(["addBook"]),
  },
};
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 180rem;
  margin: 5rem auto;
  padding: 0 5rem;
}

.gallery-panel img {
  width: 80%;
  height: 22vw;
  object-fit: cover;
  border-radius: 0.75rem;
}
#pic {
  width: "100%";
}
#mat-card {
  padding: 8px 10px 10px 10px;
  width: 160px;
  height: 210px;
  background-color: lightyellow;
  margin: 10px;
  border: solid chocolate 2px;
  border-radius: 6px;
  display: inline-table;
}
</style>