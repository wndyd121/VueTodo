// const addOneItem = (state, todoItem) => {
//     let obj = { completed: false, item: todoItem };
//     localStorage.setItem(todoItem, JSON.stringify(obj));
//     state.todoItems.push(obj);
// }
// const removeOneItem = (state, payload) => {
//     localStorage.removeItem(payload.todoItem.item);
//     state.todoItems.splice(payload.index, 1);
// }
// const toggleOneItem = (state, payload) => {
//     state.todoItems[payload.index].completed = !payload.todoItem.completed;
//     // 로컬 히스토리에 데이터 갱신
//     localStorage.removeItem(payload.todoItem.item);
//     localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
// }
// const clearAllItems = (state) => {
//     localStorage.clear();
//     state.todoItems = [];
// }
// const showModal = (state, payload) => {
//     let typeTxt = '';
//     switch (payload.modalType) {
//         case 'S':   //Success
//             typeTxt = '성공';
//             break;
//         case 'I':   // Info
//             typeTxt = '알림';
//             break;
//         case 'W':   // Warning
//             typeTxt = '경고';
//             break;
//         case 'E':   // Error
//             typeTxt = '오류';
//             break;

//         default:
//             typeTxt = '알림';
//             break;
//     }
//     state.modalData.modalType = typeTxt;
//     state.modalData.modalText = payload.modalText;
//     state.modalData.showModal = true;
// }
// const changeModalStatus = (state) => {
//     state.modalData.modalType = '';
//     state.modalData.modalText = '';
//     state.modalData.showModal = false;
// }

// export { addOneItem, removeOneItem, toggleOneItem, clearAllItems, showModal, changeModalStatus }