export default {
    keys: {
        ESCAPE: 'Escape',
        ENTER: 'Enter',
    },
    selectors: {
        BUTTON_ADD_ITEM_CLASS: '.todo__add-item',
        BUTTON_ADD_ITEM_HIDDEN: 'todo__add-item--hidden',
        BUTTON_REMOVE_CLASS: '.todo__button--remove',
        CHECKBOX_CLASS: '.todo__list-checkbox',
        LIST_DETAILS_CLASS: '.todo__list-details',
        LIST_ITEM: 'todo__list',
        LIST_GROUP_CLASS: '.todo__list-group',
    },
    templates: {
        NEW_ITEM: '<input class="todo__list-checkbox" id="licbx-##ID##" type="checkbox"><label class="todo__fake-checkbox" for="licbx-##ID##"></label><label class="todo__list-label" for="licbx-##ID##">##TEXT##</label><span class="todo__button--remove"></span>',
    },
};
