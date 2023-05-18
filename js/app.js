window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px` /*!если хотим подключить еще другие плагины то нужно дабвить знак + перед =!*/
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother) /*регистрация плавного скролла*/
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})
