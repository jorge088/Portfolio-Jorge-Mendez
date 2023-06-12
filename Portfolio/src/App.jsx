
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
      <main id='main' className={style.main}>
        <Main />
      </main>
      <div className={style.divisorContainer}></div>
      <section id='aboutMe' className={style.aboutMe}>
        <AboutMe />
      </section>
      <section id='projects' className={style.projects}>
        <Projects />
      </section>
      <section id='contact' className={style.contact}>
        <Contact />
      </section>
      <Footer />
    </>
  )
}

export default App
