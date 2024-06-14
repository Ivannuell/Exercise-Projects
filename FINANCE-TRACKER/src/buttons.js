import modal, { showModal } from "./modal";


export function buttonElement() {
    const button = document.createElement('button');
    button.setAttribute('class', 'button');

    return button;
}

export function expenseButton() {
    const button = buttonElement();
    button.setAttribute('class', 'expenseButton functionButton');

    button.addEventListener('click', () => {
        const modalWindow = modal();
        showModal(modalWindow);
    });

    return button;
}
