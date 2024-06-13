import { expenseElement, expenseButton } from './elements.js';
import modal, { showModal } from './modal.js';

export function expenseContainer() {
    const container = document.createElement('div');
    container.setAttribute('id', 'expenseContainer')


    return container;
}

export function incomeContainer() {
    const container = document.createElement('div');
    container.setAttribute('id', 'incomeContainer')


    return container;
}

export function functionContainer(incomeC, expenseC) {
    const container = document.createElement('div');
    container.setAttribute('id', 'functionContainer')

    //
    const addExpense = expenseButton();
    container.appendChild(addExpense);
    //

    return container;
}