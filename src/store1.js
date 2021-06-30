import { createStore } from 'vuex';
import { v4 as uuid } from "uuid";

const store = createStore({
  state: {
    books: [
      {
        courseId: "80",
        title: "Рабочая тетрадь. Алгебра: 7 класс",
        subject: "Алгебра",
        price: 400
      },
      {
        courseId: "81",
        title: "Рабочая тетрадь. Алгебра: 8 класс",
        subject: "Алгебра",
        price: 400
      },
      {
        courseId: "82",
        title: "Рабочая тетрадь. Алгебра: 9 класс",
        subject: "Алгебра",
        price: 400
      },
      {
        courseId: "55",
        title: "Рабочая тетрадь. Биология: 5 класс",
        subject: "Биология",
        price: 400
      },
      {
        courseId: "61",
        title: "Рабочая тетрадь. Биология: 6 класс",
        subject: "Биология",
        price: 400
      },
      {
        courseId: "27",
        title: "Рабочая тетрадь. Биология: 7 класс",
        subject: "Биология",
        price: 400
      },
      {
        courseId: "50",
        title: "Рабочая тетрадь. Биология: 8 класс",
        subject: "Биология",
        price: 400
      },
      {
        courseId: "79",
        title: "Задачник. Биология: 8,9,10,11 класс",
        subject: "Биология",
        price: 1000
      },
      {
        courseId: "51",
        title: "Рабочая тетрадь. Биология: 9 класс",
        subject: "Биология",
        price: 400
      },
      {
        courseId: "4415",
        title: "Подготовка к ЕГЭ. Биология: 5 класс",
        subject: "Биология",
        price: 600
      },
      {
        courseId: "56",
        title: "Рабочая тетрадь. Биология: 9 класс",
        subject: "Биология",
        price: 400
      },
      {
        courseId: "57",
        title: "Рабочая тетрадь. География:  6 класс",
        subject: "География",
        price: 400
      },
      {
        courseId: "53",
        title: "Рабочая тетрадь. География:  7 класс",
        subject: "География",
        price: 400
      },
      {
        courseId: "58",
        title: "Рабочая тетрадь. География:  9 класс",
        subject: "География",
        price: 400
      },
      {
        courseId: "4416",
        title: "Подготовка к ЕГЭ. География:  11 класс",
        subject: "География",
        price: 400
      },
      {
        courseId: "76",
        title: "Рабочая тетрадь. Геометрия:  7 класс",
        subject: "География",
        price: 400
      },
      {
        courseId: "77",
        title: "Рабочая тетрадь. Геометрия:  8 класс",
        subject: "Геометрия",
        price: 400
      },
      {
        courseId: "78",
        title: "Рабочая тетрадь. Геометрия: 9 класс",
        subject: "Геометрия",
        price: 400
      },
      {
        courseId: "67",
        title: "Рабочая тетрадь. Информатика:  7 класс",
        subject: "Информатика",
        price: 400
      },
      {
        courseId: "69",
        title: "Рабочая тетрадь. Информатика:  8 класс",
        subject: "Информатика",
        price: 400
      },
      {
        courseId: "68",
        title: "Рабочая тетрадь. Информатика:  9 класс",
        subject: "Информатика",
        price: 400
      },
      {
        courseId: "48",
        title: "Рабочая тетрадь. История:  5 класс",
        subject: "История",
        price: 400
      },
      {
        courseId: "65",
        title: "Рабочая тетрадь. История:  6 класс",
        subject: "История",
        price: 400
      },
      {
        courseId: "64",
        title: "Рабочая тетрадь. История:  7 класс",
        subject: "История",
        price: 400
      },
      {
        courseId: "62",
        title: "Рабочая тетрадь. История:  8 класс",
        subject: "История",
        price: 400
      },
      {
        courseId: "63",
        title: "Рабочая тетрадь. История:  9 класс",
        subject: "История",
        price: 400
      },
      {
        courseId: "4411",
        title: "Тренажёр по подготовке к ЕГЭ-2019. История:  11 класс",
        subject: "История",
        price: 400
      },
      {
        courseId: "4552",
        title: "Тренажёр по подготовке к ЕГЭ-2019. Литература:  11 класс",
        subject: "Литература",
        price: 600
      },
      {
        courseId: "74",
        title: "Рабочая тетрадь. Математика:  5 класс",
        subject: "Математика",
        price: 400
      },
      {
        courseId: "75",
        title: "Рабочая тетрадь. Математика:  6 класс",
        subject: "Математика",
        price: 400
      },
      {
        courseId: "4405",
        title: "Тренажёр по подготовке к ЕГЭ-2019. Математика:  6 класс",
        subject: "Математика",
        price: 600
      },
      {
        courseId: "4406",
        title: "Тренажёр по подготовке к ЕГЭ-2019. Математика:  11 класс",
        subject: "Математика",
        price: 400
      },
      {
        courseId: "4410",
        title: "Тренажёр по подготовке к ЕГЭ-2019. Обществознание:  10 класс",
        subject: "Обществознание",
        price: 600
      },
      {
        courseId: "111",
        title: "Рабочая тетрадь. Окружающий мир:  1 класс",
        subject: "Окружающий мир",
        price: 400
      },
      {
        courseId: "108",
        title: "Рабочая тетрадь. Окружающий мир:  2 класс",
        subject: "Окружающий мир",
        price: 400
      },
      {
        courseId: "109",
        title: "Рабочая тетрадь. Окружающий мир:  3 класс",
        subject: "Окружающий мир",
        price: 400
      },
      {
        courseId: "110",
        title: "Рабочая тетрадь. Окружающий мир:  4 класс",
        subject: "Окружающий мир",
        price: 400
      },
      {
        courseId: "4188",
        title: "Рабочая тетрадь. Робототехника:  4 класс",
        subject: "Робототехника",
        price: 400
      },
      {
        courseId: "4169",
        title: "Рабочая тетрадь. Робототехника:  9 класс",
        subject: "Робототехника",
        price: 400
      },
      {
        courseId: "4170",
        title: "Рабочая тетрадь. Робототехника:  11 класс",
        subject: "Робототехника",
        price: 400
      },
      {
        courseId: "83",
        title: "Рабочая тетрадь. Русский язык:  7 класс",
        subject: "Русский язык",
        price: 400
      },
      {
        courseId: "84",
        title: "Рабочая тетрадь. Русский язык:  8 класс",
        subject: "Русский язык",
        price: 400
      },
      {
        courseId: "85",
        title: "Рабочая тетрадь. Русский язык:  9 класс",
        subject: "Русский язык",
        price: 400
      },
      {
        courseId: "4409",
        title: "Тренажёр по подготовке к ЕГЭ-2019. Русский язык:  10 класс",
        subject: "Русский язык",
        price: 400
      },
      {
        courseId: "70",
        title: "Рабочая тетрадь. Физика:  7 класс",
        subject: "Физика",
        price: 400
      },
      {
        courseId: "73",
        title: "Рабочая тетрадь. Физика:  8 класс",
        subject: "Физика",
        price: 400
      },
      {
        courseId: "72",
        title: "Рабочая тетрадь. Физика:  9 класс",
        subject: "Физика",
        price: 400
      },
      {
        courseId: "4413",
        title: "Тренажёр по подготовке к ЕГЭ-2019. Физика:  10 класс",
        subject: "Физика",
        price: 400
      },
      {
        courseId: "134",
        title: "Задачник. Физика:  9 класс",
        subject: "Физика",
        price: 400
      },
      {
        courseId: "132",
        title: "Задачник. Физика:  10 класс",
        subject: "Физика",
        price: 400
      },
      {
        courseId: "133",
        title: "Задачник. Физика:  11 класс",
        subject: "Физика",
        price: 400
      },
      {
        courseId: "60",
        title: "Рабочая тетрадь. Химия:  8 класс",
        subject: "Химия",
        price: 400
      },
      {
        courseId: "59",
        title: "Рабочая тетрадь. Химия:  9 класс",
        subject: "Химия",
        price: 400
      },
      {
        courseId: "4414",
        title: "Тренажёр по подготовке к ЕГЭ-2019. Химия:  11 класс",
        subject: "Химия",
        price: 800
      },
      {
        courseId: "4712",
        title: "Тренажёр по подготовке к ВПР-2019. Химия:  10 класс",
        subject: "Химия",
        price: 400
      }
    ].map(n => ({
      ...n,
      id: uuid()
    }))
  },
  mutations: {
    addBook(state, payload) {
      console.log(payload)
      state.books.push(payload);
    },
    removeBook(state) {
      // const index = state.books.findIndex(n => n.id === courseId);
      // console.log('index:', index)
      // if (index > -1) {
        state.books.splice(0);
      // }
    }
  },
  actions: {
    addBook: ({ commit }, payload) => {
      commit('addBook', payload)
    }
  },
  getters: {
    getBooks: state => state.books
  }
});

export default store;
