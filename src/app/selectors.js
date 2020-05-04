const selector = {
    header: document.querySelector('header'),
    menuElement: document.querySelector('#menu-icon div[role="menu"]'),
    displaySmNav: document.querySelector('#display-sm-nav'),
    loader: document.querySelector('#loader'),
    rootEl: document.querySelector('#root'),
    sideSmNavItem: document.querySelectorAll("[aria-label='close-dialog']")
}

export default selector;