
import style from './App.module.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Main from './components/Main';
import Projects from './components/Projects';
import Footer from './layout/Footer';
import Header from './layout/Header';
import topsvg from './../Assets/top.svg';
import bottomsvg from './../Assets/bottom.svg';

function App() {

  return (
    <>
      <Header />
      <main id='main' className={style.main}>
        <Main />
      </main>

      <div className={style.divisorContainer}>
        <div className={style.divisorBlockTop}></div>
        <img className={style.topSVG} src={topsvg} alt='Page divisor svg' />
      </div>

      <section id='aboutMe' className={style.aboutMe}>
        <AboutMe />
      </section>

      <div className={style.divisorContainer}>
        <img className={style.bottomSVG} src={bottomsvg} alt='Page divisor svg'/>
        <div className={style.divisorBlockBottom}></div>
      </div>

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
