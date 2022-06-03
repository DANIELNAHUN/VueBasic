const app = new Vue({
  el: "#todo-list",
  data: {
    todoNew: {
      text: 'New',
      activo: true,
      id: null,
    },
    activo: true,

    todoList: []
  },
  methods: {
    estado () {
      activo: false,
        console.log("click")

    },
    addTodoItem () {
      const itemId = this.todoList.length
      const itemData = {
        text: this.todoNew.text,
        activo: true,
        id: itemId,
      }

      this.todoList.push(itemData)

      console.log(this.todoList)
    }
  }
})