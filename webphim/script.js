document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.movie-container');
    
    containers.forEach(container => {
        const movieGrid = container.querySelector('.movie-grid');
        const leftBtn = container.querySelector('.left-btn');
        const rightBtn = container.querySelector('.right-btn');
        
        // Tính khoảng cách scroll (một lần scroll = 4 ảnh)
        const getScrollAmount = () => {
            return (193 + 15) * 4; // (Chiều rộng ảnh + gap) * 4 ảnh
        };
        
        // Xử lý scroll
        const handleScroll = (direction) => {
            const amount = getScrollAmount() * direction;
            const newScrollPosition = movieGrid.scrollLeft + amount;
            
            // Kiểm tra và xử lý scroll
            if (direction > 0 && newScrollPosition >= (movieGrid.scrollWidth - movieGrid.clientWidth)) {
                // Scroll về đầu
                movieGrid.scroll({
                    left: 0,
                    behavior: 'smooth'
                });
            } else if (direction < 0 && movieGrid.scrollLeft <= 0) {
                // Scroll đến cuối
                movieGrid.scroll({
                    left: movieGrid.scrollWidth,
                    behavior: 'smooth'
                });
            } else {
                // Scroll bình thường
                movieGrid.scroll({
                    left: newScrollPosition,
                    behavior: 'smooth'
                });
            }
        };
        
        // Event listeners
        leftBtn.addEventListener('click', () => handleScroll(-1));
        rightBtn.addEventListener('click', () => handleScroll(1));
        
        // Hover effects
        [leftBtn, rightBtn].forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.background = 'rgba(0, 0, 0, 0.9)';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.background = 'rgba(0, 0, 0, 0.7)';
            });
        });
        
        // Show both buttons
        leftBtn.style.display = 'block';
        rightBtn.style.display = 'block';
    });
});

