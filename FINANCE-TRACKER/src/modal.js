export default function modal() {
    const modalBG = document.createElement('div');
    modalBG.setAttribute('class', 'modalBG');

    const modal = document.createElement('div');
    modal.setAttribute('class', 'modal');

    modalBG.appendChild(modal);

    return modalBG;
}

export function showModal(modal) {
    document.body.appendChild(modal);
}