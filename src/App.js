import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

  state = {
    cars: [
      { name: 'Ford', year: 2018 },
      { name: 'Audi', year: 2016 },
      { name: 'Mazda', year: 2010 }
    ],
    pageTitle: 'React component',
    showCars: false
  }

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name;
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({ cars })
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  deleteHandler(index) {
    const cars = [...this.state.cars] // копия массива
    cars.splice(index, 1) // удаление элемента по индексу
    this.setState({ cars }) // переопределение массива cars
  }

  // handleInput = (event) => {
  //   this.setState({
  //     pageTitle: event.target.value
  //   })
  // }

  render() {
    console.log('Render')
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          // создание события и действия по его срабатыванию
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onChangeName={(event) => this.onChangeName(event.target.value, index)}
            onDelete={() => this.deleteHandler(index)}
          />
        )
      })
    }

    return (
      <div>
        <div style={divStyle}>

          <h1>{this.state.pageTitle}</h1>

          {/* референс до определенного события */}
          {/* в метод автоматически передается event */}
          {/*<input type='text' onChange={this.handleInput} />*/}

          {/*указатель на функцию-обработчик, без вызова ее */}
          {/*<button*/}
          {/*onClick={this.changeTitleHandler.bind(this, 'Changed!')}*/}
          {/*// передача в ф-ию контекста, т.к. ф-ция в этом компоненте, ее контекст this*/}
          {/*// bind возвращает новую функцию, но не вызывает ее*/}
          {/*// после this передаем параметры для ф-ции*/}
          {/*>*/}
          {/*Change title*/}
          {/*</button>*/}

          <button
            onClick={this.toggleCarsHandler}
          >
            Toggle cars
          </button>

          <div style={{
            width: 400,
            margin: 'auto',
            paddingTop: '20px'
          }}>
            {cars}
          </div>

          {/*{this.state.showCars*/}
          {/*? this.state.cars.map((car, index) => {*/}
          {/*return (*/}
          {/*// создание события и действия по его срабатыванию*/}
          {/*<Car*/}
          {/*key={index}*/}
          {/*name={car.name}*/}
          {/*year={car.year}*/}
          {/*onChangeName={(event) => this.onChangeName(event.target.value, index)}*/}
          {/*onDelete={() => this.deleteHandler(index)}*/}
          {/*/>*/}
          {/*)*/}
          {/*})*/}
          {/*: null*/}
          {/*}*/}
        </div>
      </div>
    );
  }
}

export default App;
