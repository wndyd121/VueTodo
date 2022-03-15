import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) != 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    }
}

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch(),
        modalData: {
            modalType: '',
            modalText: '',
            showModal: false
        }
    },
    mutations: {
        addOneItem(state, todoItem) {
            let obj = { completed: false, item: todoItem };
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        toggleOneItem(state, payload) {
            state.todoItems[payload.index].completed = !payload.todoItem.completed;
            // 로컬 히스토리에 데이터 갱신
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
        },
        showModal(state, payload) {
            let typeTxt = '';
            switch (payload.modalType) {
                case 'S':   //Success
                    typeTxt = '성공';
                    break;
                case 'I':   // Info
                    typeTxt = '알림';
                    break;
                case 'W':   // Warning
                    typeTxt = '경고';
                    break;
                case 'E':   // Error
                    typeTxt = '오류';
                    break;
                    
                default:
                    typeTxt = '알림';
                    break;
            }
            state.modalData.modalType = typeTxt;
            state.modalData.modalText = payload.modalText;
            state.modalData.showModal = true;
        },
        changeModalStatus(state) {
            state.modalData.modalType = '';
            state.modalData.modalText = '';
            state.modalData.showModal = false;
        }
    },
    getters: {
        getItemLength(state) {
            let itemLength = state.todoItems.filter(v => !v.completed).length;
            return (itemLength == 0 ? 'no' : itemLength) + ' item' + (itemLength > 1 ? 's' : '') + ' left'
        }
    }
});