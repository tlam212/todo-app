class Todo {
  constructor(todo){
    this.id = todo.id,
    this.body = todo.body
  }


  renderTodo(){
    return `<li data-id=${this.id}><span class="trashIcon"><i class="fas fa-trash-alt"></i></span>${this.body}</li>`
  }
}
