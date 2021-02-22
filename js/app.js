/*-------------------------------------------------------------------------------------------------------------------------------
 
                                        Header scroll
 
-------------------------------------------------------------------------------------------------------------------------------*/ 




window.onscroll = () => {

    let scroll = window.scrollY

    const headerScroll = document.querySelector('.header-scroll')

    if (scroll > 300) {
        headerScroll.classList.add('activo-scroll')
    } else {
        headerScroll.classList.remove('activo-scroll')
    }
}