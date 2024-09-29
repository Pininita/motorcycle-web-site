const button = document.querySelectorAll('.select--color')
const colorReference = document.getElementById('color-reference');
const colorShowInput = document.querySelector('.colorshow')


button.forEach(button => {
    button.addEventListener('click', () => {
        const color = window.getComputedStyle(button).backgroundColor;
        colorReference.value = color
        colorShowInput.style.backgroundColor = color
    })
})

