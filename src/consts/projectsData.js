import usefulAppImg from './../../Assets/projects/usefulApps.png';
// import usefulApp_conversorImg from './../../Assets/projects/usefulApps_conversor.png';
// import usefulApp_climaImg from './../../Assets/projects/usefulApps_clima.png';
// import usefulApp_conversor2Img from './../../Assets/projects/usefulApps_conversor2.png';
// import usefulApp_pomodoroImg from './../../Assets/projects/usefulApps_pomodoro.png';
// import sportshopImg from './../../Assets/projects/sportshop.png';
import sportshop2Img from './../../Assets/projects/sportshop2.png';
// import sportshop3Img from './../../Assets/projects/sportshop3.png';
import simonDiceImg from './../../Assets/projects/simonDice.png';
// import simonDice2Img from './../../Assets/projects/simonDice2.png';
// import simonDice3Img from './../../Assets/projects/simonDice3.png';
import musicShopImg from './../../Assets/projects/musicShop.png';
// import musicShop2Img from './../../Assets/projects/musicShop2.png';


const projectsData = [
    {
        name: 'Useful App',
        img: usefulAppImg,
        description: 'Sitio web que contiene aplicaciones para el uso diario. Tiene apps como: Un conversor de pesos ARS a las distintas cotizaciones del dólar USD. Un buscador del clima por ciudad. Una app con un temporizador para usar la técnica de Pomodoro que incluye, configuraciones para los tiempos de trabajo y descanso, personalización de sesiones, reproductor de música e historial de sesiones.',
        tecnos: ['JS', 'React', 'Redux'],
        deployUrl: 'https://useful-apps.netlify.app/',
        codeUrl: 'https://github.com/jorge088/UsefulApps'
    },
    {
        name: 'Music Shop',
        img: musicShopImg,
        description: 'Sitio E-commerce sobre venta de instrumentos musicales. Se utiliza Firebase como base de datos para obtener la información de los productos y para registrar las compras realizadas. Tiene filtros de productos por categoría, vista de detalle de producto, carrito de compras y checkout para finalizar la compra.',
        tecnos: ['JS', 'React', 'Firebase', 'Tailwind'],
        deployUrl: 'https://music-shop-arg.netlify.app/',
        codeUrl: 'https://github.com/jorge088/MusicShop'
    },
    {
        name: 'SportShop',
        img: sportshop2Img,
        description: 'Sitio E-commerce sobre venta de indumentaria deportiva. Tiene vista de productos destacados, filtros de productos por categorías, buscador de productos, carrito de compras y checkout para finalizar la compra.',
        tecnos: ['JS', 'SASS'],
        deployUrl: 'https://sportshoparg.netlify.app/',
        codeUrl: 'https://github.com/jorge088/sportShop'
    },
    {
        name: 'Simon Dice',
        img: simonDiceImg,
        description: 'Sitio para jugar el famoso juego Simon Dice. Tiene configuraciones para el sonido del juego, opción para registrar el puntaje obtenido al finalizar el juego y poder ver la tabla de puntajes. Se desarrolló usando el patrón de arquitectura MVC. Se utiliza Firebase para registrar y obtener los puntajes.',
        tecnos: ['JS', 'Firebase', 'Bootstrap', 'SASS'],
        deployUrl: 'https://app-simon-dice.netlify.app/',
        codeUrl: 'https://github.com/jorge088/JuegoSimonDice'
    },
];

export default projectsData;