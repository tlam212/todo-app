class TodoAdapter{
  constructor(){
    this.todoURL = 'http://localhost:3000/api/v1/todos'
  }


  getTodos(){
    return fetch(this.todoURL).then(resp => resp.json())
  }


  createTodo(value){
    const todo = {
      body:value,
    }
    return fetch(this.todoURL, {
      method: 'POST',
      headers: {
        'content-type':'application/json',
      },
      body: JSON.stringify({ todo }),
    }).then(resp => resp.json())
  }

  updatedTodo(value, id){
    const todo = {
      body: value,
    }
    return fetch(`${this.todoURL}/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ todo }),
    }).then(resp => resp.json())

  }















}
