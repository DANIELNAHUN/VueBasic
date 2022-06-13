const app = new Vue({
  el: "#todo-list",
  data: {
    todoNew: {
      text: '',
      stateitem: true,
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
        text: this.todoNew.text || "Add text",
        stateitem: true,
        id: itemId,
      }

      this.todoList.push(itemData)

      console.log(this.todoList)
    },
    deleteTodoItem (id) {
      const itemId = id
      if (itemId > -1) {
        this.todoList.splice(itemId, 1);
      };
      this.todoNew.text = ""      
    },
    editTodoItem (id){
      const itemId = id
      const textList = this.todoList[itemId].text
      this.todoList.splice(itemId, 1,{
        text: textList,
        estadoitem: false,
        id: id,
      });
    },
    confirmTodoItem(item){

      const itemId = item.id
      const itemData = {
        text: item.text,
        stateitem: true,
        id: itemId,
      }
      this.todoList.splice(itemId,1,itemData)
      this.todoNew.text = ""

    }    
  }
})