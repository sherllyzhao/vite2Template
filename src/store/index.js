import {createStore} from "vuex";


export default createStore({
    state() {
        return {
            count: 0,
            username:'管理员',
            roleName:'管理员'
        };
    },
    mutations: {
        increment(state) {
            state.count++;
        },
    },
    actions: {
        increment(context) {
            context.commit("increment");
        },
    },
});
