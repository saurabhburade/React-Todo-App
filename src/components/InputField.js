import React, { Component } from "react";
import "./css/abc.css";
import Button from "@material-ui/core/Button";
class InputField extends Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
      list: [],
      buttonValue: "Add Todo",
      indexValue: 0
    };
  }
  editItem = event => {
    this.setState({
      inputText: this.state.list[event.target.value],
      buttonValue: "Update",
      indexValue: event.target.value
    });
  };
  deleteItem = event => {
    this.setState({
      list: this.state.list.splice(event.target.value, 1),
      list: [...this.state.list]
    });
    console.log(this.state.list + "<br>" + event.target.key);
  };
  changeInput = event => {
    this.setState({
      inputText: event.target.value
    });
  };
  addTodo = event => {
    if (this.state.buttonValue == "Update") {
      console.log(this.state.list);
      this.setState({
        list: [
          this.state.list.splice(this.state.indexValue, 1, this.state.inputText)
        ],
        list: [...this.state.list],
        buttonValue: "Add Todo",
        inputText: "",
        indexValue: -1
      });
    }
    if (this.state.inputText === "") {
      return null;
    } else if (this.state.buttonValue == "Add Todo") {
      this.setState({
        inputText: "",
        list: [this.state.inputText, ...this.state.list]
      });
    }
  };

  render() {
    return (
      <div className="InputAndTodo">
        <div className="iptbtn">
          <textarea
            value={this.state.inputText}
            onChange={this.changeInput}
            type="text"
            id="Input"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={this.addTodo}
            id="btn"
          >
            {this.state.buttonValue}
         
          </Button>
        </div>
        <div className="Todos">
          <h1 align="center">Todo list</h1>
          {this.state.list.map((item, index) => {
            let delkey = index;
            if (item == "") {
              return null;
            } else if (this.state.buttonValue == "Update") {
              return (
                <div>
                  <h3 key={index + 1}>
                    {index + 1} . {item} <br />
                  </h3>
                </div>
              );
            } else {
              return (
                <div>
                  <h3 key={index + 1}>
                    {index + 1} . {item} <br />
                  </h3>
                  <Button
                    variant="contained"
                    className="Edit"
                    value={index}
                    onClick={this.editItem}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    style={{ margin: "5px" }}
                    className="Delete"
                    value={index}
                    onClick={this.deleteItem}
                  >
                    Delete
                  </Button>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default InputField;
