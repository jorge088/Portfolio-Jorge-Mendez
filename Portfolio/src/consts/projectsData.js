import usefulAppImg from './../../Assets/projects/usefulApp.jpeg';
import sportshopImg from './../../Assets/projects/sportshop.png';
import simonDiceImg from './../../Assets/projects/simonDice.jpeg';
import musicShopImg from './../../Assets/projects/musicShop.png';

const projectsData = [
    {
        name: 'Useful App',
        img: usefulAppImg,
        description: 'Sitio web con aplicaciones utiles para usar a diario. Cuenta con apps para realizar conversiones de peso AR a USD, para obtener el clima por ciudad y una app de pomodoro. Hecho con React JS y Redux. ',
        tecnos: ['JS', 'React', 'Redux'],
        deployUrl: 'https://useful-apps.netlify.app/',
        codeUrl: 'https://github.com/jorge088/UsefulApps'
    },
    {
        name: 'MusicShop',
        img: musicShopImg,
        description: 'Ecommerce sobre venta de intrumentos musicales. Cuenta con una base de datos para la obtención del inventario y registro de compras. Hecho con React JS, tailwind y Firebase.',
        tecnos: ['JS', 'React', 'Firebase', 'Tailwind'],
        deployUrl: 'https://music-shop-arg.netlify.app/',
        codeUrl: 'https://github.com/jorge088/MusicShop'
    },
    {
        name: 'SportShop',
        img: sportshopImg,
        description: 'Ecommerce de venta de indumentaria deportiva, con carrito de compras, buscador, filtros por categoria y formulario de compra. Hecho con Javascript, css y sass. ',
        tecnos: ['JS', 'SASS'],
        deployUrl: 'https://sportshoparg.netlify.app/',
        codeUrl: 'https://github.com/jorge088/sportShop'
    },
    {
        name: 'Simon Dice',
        img: simonDiceImg,
        description: 'App del famoso juego Simon Dice. Se utiliza el patrón de arquitectura MVC para desarrollar la logica del funcionamiento del juego. Cuenta con registro de puntajes y datos del jugador en una base de datos. Hecho con Javascript, Bootstrap, Sass y Firebase. ',
        tecnos: ['JS', 'Firebase', 'Bootstrap', 'SASS'],
        deployUrl: 'https://app-simon-dice.netlify.app/',
        codeUrl: 'https://github.com/jorge088/JuegoSimonDice'
    },
];

export default projectsData;