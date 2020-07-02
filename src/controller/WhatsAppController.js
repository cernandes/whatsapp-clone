class WhatsAppController {

    constructor() {

        this.elementsPrototype();

        this.loadElements();

        this.initEvents();

    }

    /* loadElements() cria uma 'div' e gera o data-set com todos os elementos 'id' no formato camel case */
    loadElements() {

        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {

            this.el[Format.getCamelCase(element.id)] = element;

        });
    }//fim loadElements()

    /* elementsPrototype() cria e simplifica o uso de funções que vão se repetir ao longo do código*/
    elementsPrototype() {

        Element.prototype.hide = function () {

            this.style.display = "none";

            return this;
        }

        Element.prototype.show = function () {

            this.style.display = "block";

            return this;
        }

        Element.prototype.toggle = function () {

            this.style.display = (this.style.display === 'none') ? 'block' : 'none';

            return this;
        }

        Element.prototype.on = function (events, func) {

            events.split(' ').forEach(event => {

                this.addEventListener(event, func);
            });

            return this;
        }

        Element.prototype.css = function (styles) {

            for (let name in styles) {

                this.style[name] = styles[name];

            }

            return this;
        }

        Element.prototype.addClass = function (name) {

            this.classList.add(name);

            return this;
        }

        Element.prototype.removeClass = function (name) {

            this.classList.remove(name);

            return this;
        }

        Element.prototype.toggleClass = function (name) {

            this.classList.toggle(name);

            return this;
        }

        Element.prototype.hasClass = function (name) {

            return this.classList.contains(name);
        }

        HTMLFormElement.prototype.getForm = function () {

            return new FormData(this);

        }

        HTMLFormElement.prototype.toJSON = function () {

            let json = {}

            this.getForm().forEach((value, key) => {

                json[key] = value;

            });
            return json;
        }



    }//fim elementsPrototype()

    /** initEvents() habilita o menu lateral com opções de contatos */
    initEvents() {

        this.el.myPhoto.on('click', e => {

            this.closeAllLeftPanel();

            this.el.panelEditProfile.show();

            setTimeout(() => {

                this.el.panelEditProfile.addClass('open');
            }, 300);

        });

        this.el.btnNewContact.on('click', e => {

            this.closeAllLeftPanel();

            this.el.panelAddContact.show();

            setTimeout(() => {

                this.el.panelAddContact.addClass('open');
            }, 300);

        });

        this.el.btnClosePanelEditProfile.on('click', e => {

            this.el.panelEditProfile.removeClass('open');
        });

        this.el.btnClosePanelAddContact.on('click', e => {

            this.el.panelAddContact.removeClass('open');
        });
        this.el.photoContainerEditProfile.on('click', e => {

            this.el.inputProfilePhoto.click();
        });

        this.el.inputNamePanelEditProfile.on('keypress', e => {

            if (e.key === 'Enter') {

                e.preventDefault();

                this.el.btnSavePanelEditProfile.click();
            }
        });

        this.el.btnSavePanelEditProfile.on('click', e => {

            console.log(this.el.btnSavePanelEditProfile.innerHTML)
        });

        this.el.formPanelAddContact.on('submit', e => {

            e.preventDefault();
        });

        this.el.contactsMessagesList.querySelectorAll('.contact-item').forEach(item => {

            item.on('click', e => {

                this.el.home.hide();
                this.el.main.css({
                    display: 'flex'
                });
            });
        });

        this.el.btnAttach.on('click', e => {

            e.stopPropagation();

            this.el.menuAttach.addClass('open');

            document.addEventListener('click', this.closeMenuAttach.bind(this));
        });

        this.el.btnAttachPhoto.on('click', e => {

        });

        this.el.btnAttachCamera.on('click', e => {

        });

        this.el.btnAttachDocument.on('click', e => {

        });

        this.el.btnAttachContact.on('click', e => {

        });

    }// fim initEvents()

    /**controla a exibição e os eventos de 'click' do menu anexar */
    closeMenuAttach(e) {

        document.removeEventListener('click', this.closeMenuAttach);
        this.el.menuAttach.removeClass('open');
    }// fim closeMenuAttach

    /**habilita a transição entre os paineis de adição e edição dos contatos*/
    closeAllLeftPanel() {

        this.el.panelAddContact.hide();
        this.el.panelEditProfile.hide();
    }//fim closeAllLeftPanel()
}