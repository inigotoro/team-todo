import constants from './constants';
const avatars = require('../media/avatars/*.png');
const backgrounds = require('../media/backgrounds/*.jpg');

export function loadAvatar(avatar, alt) {
    const avatarElement = document.querySelector(constants.selectors.AVATAR_CLASS);
    avatarElement.src = avatars[avatar.replace('.png', '')];
    avatarElement.alt = alt;
}

export function loadFullList(list) {
    const nav = document.querySelector(constants.selectors.NAVIGATION_CLASS);
    nav.innerHTML = '';
    list.forEach((listItem, index) => {
        this.addIndividualList(nav, listItem, Object.is(index, 0));
    });
}

export function addIndividualList(nav, { id = Date.now(), title }, isSelected) {
    const a = document.createElement('a');
    a.classList.add('todo__lists-item');
    if (isSelected) {
        a.classList.add('todo__lists-item--selected');
    }
    a.href = `#${id}`;
    a.textContent = title;
    nav.insertAdjacentElement('beforeend', a);
}

function processTimeInfo(time) {
    const theDate = new Date(time);
    const inverted = theDate.toISOString().slice(0, 10);
    const fullName = theDate.toLocaleString('en-gb', {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
    });
    return { inverted, fullName };
}

export function loadListData(listData = {}) {
    const {
        id = Date.now(), title = 'No title specified', background = backgrounds['default'], items = []
    } = listData;

    const hero = document.querySelector('.todo__hero');
    const h2 = hero.querySelector('h2');
    const time = hero.querySelector('time');
    const processedTime = processTimeInfo(id);

    hero.style.backgroundImage = `url(${backgrounds[background.replace('.jpg', '')]})`;
    h2.textContent = title;
    time.datetime = processedTime.inverted;
    time.textContent = processedTime.fullName;

    const listGroup = document.querySelector('.todo__list-group');
    let processedHtml = '';
    items.forEach((item, index) => {
        const checkedStatus = Object.is(item.status, 'done') ? ' checked' : '';
        processedHtml += `
        <li class="todo__list">
            <input class="todo__list-checkbox" id="licbx-${index}" type="checkbox"${checkedStatus}>
            <label class="todo__fake-checkbox" for="licbx-${index}"></label><label class="todo__list-label" for="licbx-${index}">${item.title}</label>
            <span class="todo__button--remove"></span>
        </li>
        `;
    });
    listGroup.insertAdjacentHTML('beforeend', processedHtml);
}