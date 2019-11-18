export default {
    namespaced: true,
    state: {
        yigou: [
            { id: '0-4', number: 4 },
            { id: '3-8', number: 4 },
            { id: '5-1', number: 2 },
            { id: '5-1', number: 2 }
        ]
    },
    mutations: {
        zengjiashangpin(state, payload) {
            state.yigou.push({ id: payload.id, number: 1 });
        },
        zengjiashuliang(state, payload) {
            state.yigou = state.yigou.map(
                item => item.id === payload.id ? { ...item, number: item.number + 1 } : item
            );
        },
        jianshaoshuliang(state, payload) {
            state.yigou = state.yigou.map(
                item => item.id === payload.id ? { ...item, number: item.number - 1 } : item
            );
        },
        shanchushangpin(state, payload) {
            state.yigou = state.yigou.filter(
                item => item.id !== payload.id
            );
        }
    },
    actions: {
        gaibian({ state, commit }, payload) {
            // 判断有没有当前
            console.log(payload);
            let flag = false;
            let zhexiang = null;
            // 遍历看有没有
            state.yigou.forEach((item) => {
                if (item.id === payload.id) {
                    flag = true;
                    zhexiang = item;
                }
            });
            if (flag) {
                if (payload.n === 1) {
                    commit('zengjiashuliang', { id: payload.id });
                } else {
                    if (zhexiang.number === 1) {
                        commit('shanchushangpin', { id: payload.id });
                    } else {
                        commit('jianshaoshuliang', { id: payload.id });
                    }
                }
            } else {
                commit('zengjiashangpin', { id: payload.id });
            }
        }
    }
};
