
import style from './App.module.css';
import AboutMe from './components/AboutMe';
import Main from './components/Main';
import Header from './layout/Header';

function App() {

  return (
    <>
      <Header />
      <main className={style.main}>
        <Main />
      </main>
      <div className={style.divisorContainer}></div>
      <section id='AboutMe' className={style.aboutMe}>
        <AboutMe />

      </section>
    </>
  )
}

export default App
