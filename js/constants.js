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
        CHECKED_LABEL: 'todo__list-label--checked',
        LIST_DETAILS_CLASS: '.todo__list-details',
        LIST_ITEM: 'todo__list',
        LIST_GROUP_CLASS: '.todo__list-group',
    },
    templates: {
        NEW_ITEM: '<label class="todo__list-label"><input class="todo__list-checkbox" type="checkbox">##TEXT##</label><span class="todo__button--remove"></span>',
    },
};
