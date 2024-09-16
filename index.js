document.addEventListener('DOMContentLoaded', () => {
    const alertButtons = document.querySelectorAll('.alertButton');

    alertButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('You clicked a link!');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hover = document.querySelectorAll('.hover');

    hover.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = 'red';
        })
    
        element.addEventListener('mouseout', () => {
            element.style.backgroundColor = '';
        });
    })
});

document.addEventListener('DOMContentLoaded', () => {
    const point = document.querySelectorAll('.point')

    point.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.cursor = 'pointer';
            element.style.transform = 'scale(1.1)';
            element.style.transition = 'transform 0.3 ease'
        })

        element.addEventListener('mouseout', () => {
            element.style.cursor = ' '
            element.style.transform = 'scale(1)'
        })
    })
})