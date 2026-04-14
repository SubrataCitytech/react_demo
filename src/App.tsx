
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NiaHomepage from './components/Header/NiaHomepage'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header />
      <NiaHomepage />
      {/* <NiaHomepage /> */}
      {/* <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section> */}
    </>
  )
}

export default App
