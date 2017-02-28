var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
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
  render : function (){
    var{todos} = this.state;
    return(
      <div>
        <TodoList todos ={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
