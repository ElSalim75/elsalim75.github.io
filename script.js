document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.menu-btn');
    const totalAmount = document.getElementById('totalAmount');
    let total = 0;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const price = parseFloat(button.getAttribute('data-price'));
            total += price;
            totalAmount.textContent = total;
        });
    });

    document.getElementById('resetButton').addEventListener('click', () => {
        total = 0;
        totalAmount.textContent = total;
    });
});
