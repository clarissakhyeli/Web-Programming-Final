import { elements } from './base';

export const renderItem = item => {
    const markup = `
        <li class="shopping__item" data-itemid=${item.id}>
            <div class="shopping__count">
                <p class="shopping__count-value">${item.servings} pieces</p>
            </div>
            <p class="shopping__description">${item.title}</p>
            <button class="shopping__delete btn-tiny">
                <svg>
                    <path d="M10 1.6c-4.639 0-8.4 3.761-8.4 8.4s3.761 8.4 8.4 8.4 8.4-3.761 8.4-8.4c0-4.639-3.761-8.4-8.4-8.4zM14.789 13.061l-1.729 1.729-3.060-3.061-3.061 3.060-1.729-1.729 3.062-3.060-3.061-3.061 1.729-1.728 3.060 3.060 3.061-3.061 1.729 1.729-3.062 3.061 3.061 3.061z"></path>
                </svg>
            </button>
        </li>
    `;
    elements.shopping.insertAdjacentHTML('beforeend', markup);
};

export const renderTotal = total => {
    const markup = `
        <label class="heading-2">Total : &nbsp</label>
        <p class="shopping__description">RM ${total}</p>
    `;
    elements.total.innerHTML = markup;
};

export const deleteItem = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`);
    if (item) item.parentElement.removeChild(item);
};
