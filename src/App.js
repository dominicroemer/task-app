import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Overview from './Components/Overview'
import uniqid from 'uniqid'

class App extends Component {
  constructor(props) {
      super(props);

      this.onClickBtn = this.onClickBtn.bind(this);
      this.updateInput = this.updateInput.bind(this);
      this.clickDeleteTask = this.clickDeleteTask.bind(this);
      this.clickEditTask = this.clickEditTask.bind(this);
      this.liveEditTask = this.liveEditTask.bind(this);

      this.state = {
        inputArr: [
          {text: 'test 1', id: uniqid(),edit: false},
          {text: 'test 2', id: uniqid(),edit: false},
        ],
        task: {
          id: uniqid(),
          text: '',
          // number: (2),
        }, 
        isEdit: false
        
      };
  }

  updateInput(newInputText) {
    this.setState({
      task: {
        text: newInputText,
        id: this.state.task.id,
      }
    })
  }

  onClickBtn(e) {
    e.preventDefault();
        
    if(this.state.task.text !== '') {
      this.setState({
        inputArr: this.state.inputArr.concat(this.state.task),
        task: {
          text: '',
          id: uniqid(),
        },
        isEdit: false,
      })
    }
  }

  clickDeleteTask(e, target) {
    e.preventDefault();
    // console.log('You clicked a delete button');
    // console.log(e);
    // console.log(e.target.parentNode)
    // console.log(target);
    // console.log(this.state.inputArr)
    // console.log(this.state.inputArr.filter(toDelete => toDelete === target));

    this.setState({
      inputArr: this.state.inputArr.filter(toDelete => toDelete !== target),
    })
  }

  clickEditTask(e, target) {
    e.preventDefault();
    console.log('You clicked an edit button');
    // console.log(target);

    // const targetIndex = this.state.inputArr.indexOf(target);
    // let newArray = [... this.state.inputArr]
    // console.log(newArray[targetIndex]);
    // newArray[targetIndex] = {
    //   text: this.state.inputArr[targetIndex].text,
    //   id: this.state.inputArr[targetIndex].id,
    //   edit: !this.state.inputArr[targetIndex].edit,
    // }
    // this.setState({
      // inputArr: newArray,
    // })
    
    this.setState({
      inputArr: this.state.inputArr.map(targ => {
        if(targ === target) {
          return {
            text: targ.text,
            id: targ.id,
            edit: !targ.edit,
          }
        }
        return targ;
      })
    })

    // console.log(this.state.task);
    // this.setState({
    //   inputArr: this.state.inputArr.filter(toDelete => toDelete !== target),
    //   task: {
    //     text: target.text,
    //     id: target.id
    //   },
    //   isEdit: true
    // })
    // console.log(this.state.task)

  }

  clickEditTask2(e, target) {
    e.preventDefault();
    console.log('You clicked an edit button');
    console.log(target.text);

    console.log(this.state.task);

    this.setState({
      inputArr: this.state.inputArr.filter(toDelete => toDelete !== target),
      task: {
        text: target.text,
        id: target.id
      },
      isEdit: true
    })

    console.log(this.state.task)

  }


  liveEditTask(targetTask, updatedValue) {
    console.log('Youre editing a task, this is a live update of it!');
    console.log(targetTask.text);

    this.setState({
      inputArr: this.state.inputArr.map(element => {
        if(element === targetTask) {
          return {
            text:updatedValue,
            id: element.id,
            edit: true,
          }
        } else {
          return element;
        }
      })
    })
  }



  render () {
    return (
        <div className="App">

          <h2>I am App.js, whats happening!</h2>
          <Overview title="Content Container" 
            onButtonClick={this.onClickBtn} 
            updateInput={this.updateInput}
            inputArr={this.state.inputArr}
            inputText={this.state.task.text}
            isEdit={this.state.isEdit}
            clickDelete={this.clickDeleteTask}
            clickEdit={this.clickEditTask}
            liveEditTask={this.liveEditTask}/>
            
        </div>
    );
  }
}

export default App;