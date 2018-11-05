import constants from './constants';    

(() => {
    class Todo {
        constructor() {
            this.addBindings();
            this.counter = 5;
        }

        addBindings() {
            const listItems = document.querySelectorAll(`.${constants.selectors.LIST_ITEM}`);
            listItems.forEach(this.bindIndividualListItem.bind(this));            

            const addItem = document.querySelector(constants.selectors.BUTTON_ADD_ITEM_CLASS);
            addItem.addEventListener('click', this.addItemToList.bind(this));
            return this;
        }

        bindIndividualListItem(li) {
            const remove = li.querySelector(constants.selectors.BUTTON_REMOVE_CLASS);
            remove.addEventListener('click', this.removeSingleElement);

            return this;
        }

        removeSingleElement(event) {
            const li = event.target.closest('li');
            if (li) {
                li.remove();
            }
            return this;
        }

        addItemToList(event) {
            const clickedButton = event.target;
            clickedButton.classList.add(constants.selectors.BUTTON_ADD_ITEM_HIDDEN);

            const wrapper = clickedButton.closest(constants.selectors.LIST_DETAILS_CLASS);
            const ul = wrapper.querySelector(constants.selectors.LIST_GROUP_CLASS);
            
            const newInput = document.createElement('input');
            newInput.type = 'text';
            newInput.classList.add('todo__message');
            newInput.addEventListener('keyup', this.inputKeyUp.bind(this, ul));

            const newLi = document.createElement('li');
            newLi.appendChild(newInput);
            ul.insertAdjacentElement('beforeend', newLi);

            newInput.focus();

            event.preventDefault();
            this.bindGlobalCapture();
            return this;
        }

        inputKeyUp(ulWrapper, pressedKey) {
            const liWrapper = pressedKey.target.closest('li');
            switch(pressedKey.key) {
                case constants.keys.ENTER: 
                    const { value } = pressedKey.target;
                    if (!value) {
                        alert('Please add a value first or press ESC to cancel');
                    } else {            
                        liWrapper.innerHTML = constants.templates.NEW_ITEM
                            .replace('##TEXT##', pressedKey.target.value)
                            .replace(/##ID##/g, this.counter);
                        this.counter++;
                        liWrapper.classList.add(constants.selectors.LIST_ITEM);
                        this.bindIndividualListItem(liWrapper);
                        ulWrapper.insertAdjacentElement('beforeend', liWrapper);

                        document.querySelector(constants.selectors.BUTTON_ADD_ITEM_CLASS).classList.remove(constants.selectors.BUTTON_ADD_ITEM_HIDDEN);
                        this.unbindGlobalCapture();
                    }
                break;
                case constants.keys.ESCAPE:
                    this.killInput(liWrapper);
                    break;
            }
            return this;
        }

        killInput(liWrapper) {
            liWrapper.remove();
            document.querySelector(constants.selectors.BUTTON_ADD_ITEM_CLASS).classList.remove(constants.selectors.BUTTON_ADD_ITEM_HIDDEN);
            return this;
        }

        bodyClick(event) {
            if (!event.target.classList.contains('todo__message')) {
                const message = document.querySelector('.todo__message');
                if (message) {
                    this.killInput(message.closest('li'));

                    this.unbindGlobalCapture();
                }
            }   
        }

        bindGlobalCapture() {
            this.unbindGlobalCapture();
            this.globalCapture = this.bodyClick.bind(this);
            document.body.addEventListener('mouseup', this.globalCapture);
        }

        unbindGlobalCapture() {
            if (this.globalCapture) {
                document.body.removeEventListener('mouseup', this.globalCapture);
            }
        }
    }

    new Todo();
})();
