import { Suspense } from 'react'
import './App.css'
import Countires from './Components/Countries/countires'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {

  return (
    <>
    <Suspense fallback={<h3>Data Loading....</h3>}>
      <Countires countriesPromise={countriesPromise} ></Countires>
    </Suspense>
    </>
  )
}

export default App
