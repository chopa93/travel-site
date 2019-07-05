import $ from 'jquery';

class mobilemenu {
    constructor(){
        this.siteheader = $(".site-header");
     this.menuicon = $(".site-header__menu-icon");
     this.menucontent = $(".site-header__menu-content");
     this.events();
    }
    
    events() {
        this.menuicon.click(this.togglethemenu.bind(this));
        
    }
    
    togglethemenu() {
        
        this.menucontent.toggleClass("site-header__menu-content--is-visible");
        this.siteheader.toggleClass("site-header--is-expanded");
        this.menuicon.toggleClass("site-header__menu-icon--close-x");
    }
    
}
export default mobilemenu;