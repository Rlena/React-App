import React from 'react'

// принимает в себя Component и className,
// вернет новый компонент-функцию, куда мы будем получать некоторый props,
// внутри функции вернем jsx
// withClass будет добавлять некоторый класс корневому элементу
// и будет рендерить этот компонент (который мы ему передадим)
const withClass = (Component, className) => {
  return props => {
    return (
      <section className={className}>
        {/* превращаем Component в обычный React-компонент */}
        {/* разворачиваем props посредством оператора spread,
        чтобы передавать опции в компонент, который мы оборачиваем в hoc */}
        <Component {...props} />
      </section>
    )
  }
}

export default withClass