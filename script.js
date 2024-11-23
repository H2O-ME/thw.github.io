function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active'); // 移除所有部分的活动类
        section.style.display = 'none'; // 隐藏所有部分
    });
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block'; // 显示选定部分
    setTimeout(() => {
        activeSection.classList.add('active'); // 添加活动类以实现动态效果
    }, 10); // 确保在显示后添加类
}

// 默认显示关于我部分
document.addEventListener('DOMContentLoaded', function() {
    showSection('about');
});
