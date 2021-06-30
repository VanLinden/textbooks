<template>
  <h1 style="text-align: center">Витрина</h1>
  <div className="inLine">
    <select
      id="subject"
      @change="onchange($event)"
      class="form-control"
      v-model="key"
    >
      <!-- <select id="subject" onChange={onChangeSubject.bind(this)} > -->
      <option>Все предметы</option>
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
  <!-- <button @click="handleSubmit" class="btn btn-primary">Add New Book</button> -->

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
      <!-- class="{showHideRuble}" id="priceSimple" >
            price: book.price -->
      <!-- </div>
          <div class="{showHideBonus}" id="priceBonus">
            priceBonus: {book.priceBonus}
          </div> -->
    </div>
  </div>
  <!-- <div style="marginLeft: auto; marginRight: auto; width: 1100px; textAlign: center" >
      <div v-for="book in books" :key="book.id">
        <Book v-model:contents="book.title" />
        <Book v-model:contents="book.courseId" />
      </div>
    </div> -->

  <!-- <Book :contents="book"/>
      <button @click="$store.commit('removeBook', book)" v-text="'X'"/> -->
  <!-- </div> -->
  <!-- <button @click="$store.commit('addBook')" v-text="'Add book'"/> -->
</template>

<script>
import Book from "./Book.vue";
import { mapState } from "vuex";
import { mapActions, mapGetters } from "vuex";
var subject = "";
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
      
      // $('#genre').val('Все жанры');
      // $('#grade').val('Все классы');
      // $('#lookingFor').val('');
    },
    ...mapActions(["addBook"]),
    handleSubmit() {
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
      // const payload = { courseId: 55, title: "Рабочая тетрадь. Биология: 5 класс", subject: "Биология", price: 400 }
    },
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