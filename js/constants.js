export default {
    keys: {
        ESCAPE: 'Escape',
        ENTER: 'Enter',
    },
    selectors: {
        AVATAR_CLASS: '.todo__avatar',
        BUTTON_ADD_ITEM_CLASS: '.todo__add-item',
        BUTTON_ADD_ITEM_HIDDEN: 'todo__add-item--hidden',
        BUTTON_REMOVE_CLASS: '.todo__button--remove',
        CHECKBOX_CLASS: '.todo__list-checkbox',
        HAMBURGUER_ICON_CLASS: '.todo__hamburguer',
        LIST_DETAILS_CLASS: '.todo__list-details',
        LIST_ITEM: 'todo__list',
        LIST_GROUP_CLASS: '.todo__list-group',
        NAVIGATION_CLASS: '.todo__header-nav',
        NAVIGATION_OPEN: 'todo__header-nav--open',
        USER_NAME_CLASS: '.todo__user-name',
    },
    templates: {
        NEW_ITEM: '<input class="todo__list-checkbox" id="licbx-##ID##" type="checkbox"><label class="todo__fake-checkbox" for="licbx-##ID##"></label><label class="todo__list-label" for="licbx-##ID##">##TEXT##</label><span class="todo__button--remove"></span>',
    },
};
