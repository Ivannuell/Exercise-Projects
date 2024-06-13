import modal, { showModal } from "./modal";

export function element() {
    const element = document.createElement('div')
    element.setAttribute('class', 'element')

    return element
}


export function expenseElement(info, value) {
    const expense = element();
    const expenseInfo = document.createElement('p');
    expenseInfo.setAttribute('class', 'expenseInfo')
    expenseInfo.innerText = info;

    const expenseValue = document.createElement('p');
    expenseValue.setAttribute('class', 'expenseValue')
    expenseValue.innerText = value;

    expense.appendChild(expenseInfo);
    expense.appendChild(expenseValue);

    return expense;
}

export function buttonElement() {
    const button = document.createElement('button')
    button.setAttribute('class', 'button')

    return button
}

export function expenseButton() {
    const button = buttonElement();
    button.setAttribute('class', 'expenseButton functionButton')

    button.addEventListener('click', () => {
        const modalWindow = modal();
        showModal(modalWindow);
    })

    return button;
}