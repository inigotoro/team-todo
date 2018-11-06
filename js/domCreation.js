import constants from './constants';
import { sanitizeHTML, processTimeInfo } from './utils';
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

export function loadListData(listData = {}) {
    const {
        id = Date.now(), title = 'No title specified', background = backgrounds['default'], items = []
    } = listData;

    const hero = document.querySelector(constants.selectors.HERO_CLASS);
    const h2 = hero.querySelector('h2');
    const time = hero.querySelector('time');
    const processedTime = processTimeInfo(id);

    hero.style.backgroundImage = `url(${backgrounds[background.replace('.jpg', '')]})`;
    h2.textContent = title;
    time.datetime = processedTime.inverted;
    time.textContent = processedTime.fullName;

    const listGroup = document.querySelector(constants.selectors.LIST_GROUP_CLASS);
    listGroup.innerHTML = '';
    const holder = document.createDocumentFragment();
    items.forEach((item, index) => {
        this.addIndividualItem(holder, item, index);
    });
    listGroup.appendChild(holder);
}

export function addIndividualItem(parent, item, index = Date.now(), callback) {
    const checkedStatus = Object.is(item.status, 'done') ? ' checked' : '';
    const newLi = document.createElement('li');
    newLi.classList.add(constants.selectors.LIST_ITEM);
    newLi.innerHTML = `<input class="todo__list-checkbox" id="licbx-${index}" type="checkbox"${checkedStatus}>
    <label class="todo__fake-checkbox" for="licbx-${index}"></label><label class="todo__list-label" for="licbx-${index}">${sanitizeHTML(item.title)}</label>
    <span class="todo__button--remove"></span>`;
    if (callback) {
        callback(newLi);
    }
    parent.appendChild(newLi);
}

export function addItemInput(parent, callback) {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.classList.add(constants.selectors.MESSAGE);
    newInput.addEventListener('keyup', callback);

    const newLi = document.createElement('li');
    newLi.appendChild(newInput);
    parent.insertAdjacentElement('beforeend', newLi);

    newInput.focus();
}
