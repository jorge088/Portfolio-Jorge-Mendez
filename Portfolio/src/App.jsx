
import style from './App.module.css';
import Main from './components/Main';
import Header from './layout/Header';

function App() {

  return (
    <>
      <Header/>
      <main className={style.main}>
        <Main/>
      </main>
      <div className={style.divisorContainer}></div>
      <p>App</p>
    </>
  )
}

export default App
