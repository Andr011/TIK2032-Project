const headerText = document.getElementById('headerText');

headerText.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
});

headerText.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
});

const sectionHeadings = document.querySelectorAll('section h2');

sectionHeadings.forEach(heading => {
    heading.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    heading.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

const articleTitles = document.querySelectorAll('article h3');

articleTitles.forEach(title => {
    title.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    title.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
