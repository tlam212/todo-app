class Todos {

  constructor(){
    this.todos = []
    this.adapter = new TodoAdapter()
    this.init()
    this.fetchTodos()
  }

  init(){
    this.todoContainer = document.querySelector('.todo-container')
    this.body = document.querySelector('body')
    this.inputTag = document.querySelector('input')
    this.inputTag.addEventListener('keypress', this.createTodo)
    this.todoContainer.addEventListener('dblclick', this.editToDo)
    this.body.addEventListener('blur', this.updateTodo, true)
    // this.span.addEventListener('click', this.deletedTodo)
  }

  createTodo = (e) => {
    const value = this.inputTag.value
    if (e.which === 13){
        e.preventDefault()
        console.log(value)
        this.adapter.createTodo(value).then(todo => {
          this.todos.push(new Todo(todo))
          this.inputTag.value = ""
          this.renderToDom()
        })
    }
  }

  editToDo = (e) => {
    console.log(e.target)
    const li = e.target
    li.contentEditable = true
    li.focus()
    li.classList.add("editable")
    console.log('clicked')
  }

  updateTodo = (e) => {
    const li = e.target
    li.contentEditable = false
    li.classList.remove("editable")
    const newEdit = li.innerHTML
    const id = li.dataset.id
    this.adapter.updatedTodo(newEdit, id)
  }

  // deletedTodo = (e) => {
  //   console.log('deleting')
  // }


  fetchTodos(){
    this.adapter.getTodos()
    .then(todos => {
      todos.forEach(todo => this.todos.push(new Todo(todo)))
    })
   .then(() => {
    this.renderToDom()
    })
  }

  renderToDom(){
    let ulTag = document.querySelector('ul')
    ulTag.innerHTML = this.todos.map(todo => todo.renderTodo()).join('')
    this.todoContainer.append(ulTag)
  }
}
