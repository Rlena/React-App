import React, { Component } from 'react'
import Auxiliary from '../hoc/Auxiliary'
import Counter2 from '../Counter2/Counter2'

export default class Counter extends Component {

  state = {
    counter: 0
  }

  addCouner = () => {
    // this.setState({
    //   counter: this.state.counter + 1
    // })

    // способ изменения state при асинхронных вмешательствах
    // хранит предыдущее состояние
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }

  render() {
    return (
      <Auxiliary>
        <h2>Counter {this.state.counter}</h2>
        <Counter2 />
        <button onClick={this.addCouner}>+</button>
        <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
      </Auxiliary>
    )

    // return [
    //   // вернуть из компонента массив
    //   <h2 key={'1'}>Counter {this.state.counter}</h2>,
    //   <button key={'2'} onClick={this.addCouner}>+</button>,
    //   <button key={'3'} onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
    // ]
  }
}