// простой компонент
import React from 'react'
import {ClickedContext} from '../App'

export default props => {
  return(
    <div style={{
      border: '1px solid #ccc',
      width: 200,
      margin: '0 auto'
    }}>
      <h3>Counter2</h3>
      {/* колбэк-функция получает нужное значение */}
      <ClickedContext.Consumer>
        {clicked => clicked ? <p>Clicked</p> : null}
      </ClickedContext.Consumer>
    </div>
  )
}