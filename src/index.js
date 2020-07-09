/***********************************/
/**            Imports            **/
/***********************************/
import './style/main.scss';
import { app } from './js/app';

/***********************************/
/**    After DOM Content Loaded   **/
/***********************************/
window.addEventListener('DOMContentLoaded', () => {
    app.initConsole();
});

/***********************************/
/**           On scroll           **/
/***********************************/
window.addEventListener('scroll', () => {
    app.scrollConsole();
});

/***********************************/
/**           On resize           **/
/***********************************/
window.addEventListener('resize', () => {
    app.resizeConsole();
});