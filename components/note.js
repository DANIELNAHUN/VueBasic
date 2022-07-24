const app = new Vue({
  el: "#todo-list",
  data: {
    todoNew: {
      text: '',
      state: true,
      id: null,
    },
    todoList: []
  },
  methods: {
    addTodoItem () {
      const itemId = this.todoList.length
      const itemData = {
        text: this.todoNew.text || "Add text",
        state: true,
        id: itemId,
      }
      this.todoList.push(itemData)
    },
    deleteTodoItem (id) {
      const itemId = id
      if (itemId > -1) {
        this.todoList.splice(itemId, 1);
      };
      this.todoNew.text = ""
    },
    editTodoItem (id) {
      const itemId = id
      const textList = this.todoList[itemId].text
      this.todoList.splice(itemId, 1, {
        text: textList,
        state: false,
        id: id,
      });
    },
    confirmTodoItem (item) {
      const itemId = item.id
      const itemData = {
        text: item.text,
        state: true,
        id: itemId,
      }
      this.todoList.splice(itemId, 1, itemData)
      this.todoNew.text = ""
    }
  }
})