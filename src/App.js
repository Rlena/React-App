import React, { Component } from 'react';
import './App.scss';
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './Counter/Counter'

// создание context API, false - значение по умолчанию
export const ClickedContext = React.createContext(false)

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      clicked: false,
      cars: [
        { name: 'Ford', year: 2018 },
        { name: 'Audi', year: 2016 },
        { name: 'Mazda', year: 2010 }
      ],
      pageTitle: 'React component',
      showCars: false
    }
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

  componentWillMount() {
    console.log('App componentWillMount')
  }

  componentDidMount() {
    console.log('App componentDidMount')
  }

  // handleInput = (event) => {
  //   this.setState({
  //     pageTitle: event.target.value
  //   })
  // }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            {/*создание события и действия по его срабатыванию*/}
            <Car
              name={car.name}
              year={car.year}
              index={index}
              onChangeName={(event) => this.onChangeName(event.target.value, index)}
              onDelete={() => this.deleteHandler(index)}
            />
          </ErrorBoundary>
        )
      })
    }

    return (
      <div>
        <div style={divStyle}>

          <h1>{this.props.title}</h1>

          <ClickedContext.Provider value={this.state.clicked}>
            <Counter />
          </ClickedContext.Provider>
          <hr />

          <button
            style={{ marginTop: 20 }}
            className={'AppButton'}
            onClick={this.toggleCarsHandler}
          >
            Toggle cars
          </button>

          <button onClick={() => this.setState({ clicked: true })}>Change clicked</button>

          <div style={{
            width: 400,
            margin: 'auto',
            paddingTop: '20px'
          }}>
            {cars}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
