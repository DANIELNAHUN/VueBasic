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
    },
    deleteTodoItem (id) {
      const itemId = id
      if (itemId > -1) {
        this.todoList.splice(itemId, 1);
        console.log("borrando: " + itemId + " longitud "+ this.todoList.length)
      }      
    }    
  },
  /*computed: {
    refreshTodoList () {

      lengthtodoList = this.todoList.length
      for (let i = 0; i < lengthtodoList; i++){
        const itemData = {
          text: this.todoNew.text,
          activo: true,
          id: i,
        }        
        this.todoList.push(itemData)
      }
      
    }
  }*/
})