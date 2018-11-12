import React from 'react'
import './Car.scss'
import PropTypes from 'prop-types'
import withClass from '../hoc/withClass'

class Car extends React.Component {

  // новый способ создавать референции React 16
  constructor(props) {
    super()
    this.inputRef = React.createRef()
  }

  // срабатывает после рендера элемента
  componentDidMount() {
    if(this.props.index === 0) {
      this.inputRef.current.focus()
    }
  }

  render() {
    const inputClasses = ['input']

    if (this.props.name !== '') {
      inputClasses.push('green')
    } else {
      inputClasses.push('red')
    }

    if (this.props.name.length > 4) {
      inputClasses.push('bold')
    }

    return (
      <React.Fragment>
        <h3>Car name: {this.props.name}</h3>
        <p>Year: <strong>{this.props.year}</strong></p>
        <input
          ref={this.inputRef}
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </React.Fragment>
    )
  }
}

// ключи полей, которые мы ожидаем
// isRequired отмечаем, что name - обязательное свойство, если оно не получено, ошибка
Car.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number,
  index: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func
}

// обернули компонент Car в withClass
// параметры - компонент Car, название класса 'Car'
export default withClass(Car, 'Car')