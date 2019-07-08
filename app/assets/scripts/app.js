import mobiolemenu from './modules/mobilemenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobilemenu = new mobiolemenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
