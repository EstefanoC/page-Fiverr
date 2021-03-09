/*-------------------------------------------------------------------------------------------------------------------------------
 
                                        Header scroll
 
-------------------------------------------------------------------------------------------------------------------------------*/ 




window.onscroll = () => {

    let scroll = window.scrollY

    const headerScroll = document.querySelector('.header-scroll')

    console.log(window.innerWidth)
    if (window.innerWidth >= 768) {
        if (scroll > 300) {
            headerScroll.classList.add('activo-scroll')
        } else {
            headerScroll.classList.remove('activo-scroll')
        }
    }
}