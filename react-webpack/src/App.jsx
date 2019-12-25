import React , { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Header , Content , Footer } from './Layout'
import './index.css'

const App = ()=>{
  return (
    <Fragment>
      <Header />
      <Content />
      <Footer />
    </Fragment>
  )
}

export default App

ReactDOM.render(<App />,document.getElementById('app'))