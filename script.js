document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const container = document.querySelector('.container');

    // 添加点击效果
    document.querySelectorAll('.press-effect').forEach(element => {
        element.addEventListener('mousedown', () => {
            element.style.transform = 'scale(0.98) translateY(2px)';
        });
        
        element.addEventListener('mouseup', () => {
            element.style.transform = 'scale(1) translateY(0)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1) translateY(0)';
        });
    });

    function checkScroll() {
        const scrollPosition = container.scrollTop;
        const windowHeight = window.innerHeight;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop - windowHeight/2 &&
                scrollPosition < sectionTop + sectionHeight - windowHeight/2) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    container.addEventListener('scroll', checkScroll);
    checkScroll();

    // 平滑滚动
    container.style.scrollBehavior = 'smooth';
});
