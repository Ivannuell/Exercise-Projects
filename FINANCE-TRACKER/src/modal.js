export default function modal() {
    const modal = document.createElement('div');
    modal.setAttribute('class', 'modal');

    return modal
}

export function showModal(modal) {
    document.body.appendChild(modal);
}