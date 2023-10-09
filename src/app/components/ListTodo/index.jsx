"use client"

import React, { Component } from 'react'
import './styles.css'

export default class ListTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todoText: '',
      todos: []
    };
    this.nextId = 1;
  }

  handleInputChange = (e) => {
    this.setState({ todoText: e.target.value });
  };

  handleCreateTodo = () => {
    const { todoText } = this.state;

    if (todoText.trim() === '') {
      return;
    }

    const newTodo = {
      id: this.nextId++,
      complete: false,
      text: todoText
    };

    this.setState((prevState) => ({
      todoText: '',
      todos: [...prevState.todos, newTodo]
    }));
  };

  handleCompleteTodo = (todo) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((t) => {
        if (t.id === todo.id) {
          return { ...t, complete: !t.complete };
        }
        return t;
      })
    }));
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className='todo-list'>
            <div className="todo-input">
              <input
                type="text"
                placeholder="Digite uma tarefa"
                value={this.state.todoText}
                onChange={this.handleInputChange}
              />
              <button onClick={this.handleCreateTodo}>+</button>
            </div>
            <ul className='todo-list-items'>
              {this.state.todos.map((todo, index) => (
                <li key={index} className={todo.complete ? 'complete' : ''}>
                  
                  {todo.text}

                  <input
                    className='todo-checkbox'
                    type="checkbox"
                    checked={todo.complete}
                    onChange={() => this.handleCompleteTodo(todo)}
                  />

                </li>

              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
