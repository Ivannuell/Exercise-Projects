import baseModal, { createModal, showModal } from "./modal";

export function buttonElement() {
    const button = document.createElement('button');
    button.setAttribute('class', 'button');

    return button;
}

export function expenseButton() {
    const button = buttonElement();
    button.setAttribute('class', 'expenseButton functionButton')
    button.innerText = 'Add Expense';

    button.addEventListener('click', () => {
        const modalWindow = createModal(
            { title: 'Add Expense' }, 
            { text: 'Enter the expense information below.' });
            
        showModal(modalWindow);
    });

    return button;
}
