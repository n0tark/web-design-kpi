import { createStore } from "vuex";

const store = createStore ({
    state() {
        return {
            firstName: "unknown full name",
            password: "unknown password",
            email: "unknown email",
            date: "unknown date",
            sex: "unknown sex",
            logined: false,

            words : new Map([
                ["Encourage", "Поощрять"],
                ["A reward", "Награда"],
                ["Criminal", "Преступник"],
                ["Probability", "Вероятность"],
                ["Salary", "Зарплата"],
                ["Upset", "Грустный"]
            ]),
            putWord_1_1 : "empty",
            putWord_1_2 : "empty",
            putWord_2_1 : "empty",
            putWord_2_2 : "empty",
            putWord_3_1 : "empty",
            putWord_3_2 : "empty",
            putWord_4_1 : "empty",
            putWord_4_2 : "empty",
            putWord_5_1 : "empty",
            putWord_5_2 : "empty",
            putWord_6_1 : "empty",
            putWord_6_2 : "empty",

            controlWord_1: null,
            controlWord_2: null,
            controlWord_3: null,
            controlWord_4: null,
            controlWord_5: null,
            controlWord_6: null
        }
    },
    mutations: {
    }
});
export default store;