
import style from './App.module.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Main from './components/Main';
import Projects from './components/Projects';
import Footer from './layout/Footer';
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
      <section className={style.projects}>
        <Projects />
      </section>
      <section id='Contact' className={style.contact}>
        <Contact />
      </section>
      <Footer />
    </>
  )
}

export default App
