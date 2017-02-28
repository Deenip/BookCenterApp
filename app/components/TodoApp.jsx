var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted : false,
      searchText: '',
      todos: [
        {
          id : 1,
          text : 'book 1'
        },{
          id : 2,
          text : 'book 2'
        },{
          id : 3,
          text : 'book 3'
        },{
          id : 4,
          text : 'book 4'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new book: ' + text);
    },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText : searchText.toLowerCase()
    })
  },
  render : function (){
    var{todos} = this.state;
    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos ={todos}/>
        <AddTodo onAddTodo ={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
