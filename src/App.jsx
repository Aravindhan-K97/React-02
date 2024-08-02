import { useState } from 'react'
import './App.css'
import Header from './Header'
import Navbar from './Navbar'
import CardGrid from './Card'
import Footer from './Footer'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [cartValue, setCartValue] = useState(0);

  return (
    <>
    <div >
      <Navbar cartValue={cartValue} />
      <Header />
      <div>
        <div className="container">
          <div className="row">
            <CardGrid setCartValue={setCartValue}></CardGrid>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
       </>
  )
}

export default App
