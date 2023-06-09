function formValidation(form) {
    // get parent loop
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.getParent;
        }
    } //getParent(selectElement, '.classFather')

    const formElement = document.querySelector(form);
    let requiredGroup = document.querySelectorAll(form + ' .isRequired');
    requiredGroup = [...requiredGroup];
    let password;
    let regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const dataStorage = {};
    let errFlag;

    requiredGroup.forEach(element => {
        const parent = getParent(element, '.form-cell');
        const message = parent.querySelector('.message');

        // focus input ux handle
        element.onblur = () => {
            // name handle
            if (element.name == 'name' && element.value.length <= 6) {
                parent.classList.add('error-cell');
                errFlag = true;
                message.textContent = 'Your name too short!';
            }

            // password handle
            if (element.type == 'password') {
                password = element.value;
            }
            if (element.type == 'password' && element.value.length < 6) {
                parent.classList.add('error-cell');
                errFlag = true;
                message.textContent = 'Your password too short! Enter the password at least 6 characters';
            }

            // confirmPassword check
            if (element.name == 'confirmPassword' && element.value != password) {
                parent.classList.add('error-cell');
                errFlag = true;
                message.textContent = 'Confirm password incorrect!';
            }
            if (element.name == 'confirmPassword' && element.value == password) {
                parent.classList.remove('error-cell');
            }

            // phone handle
            if (element.type == 'tel' && !element.value.match(regexPhone)) {
                parent.classList.add('error-cell');
                errFlag = true;
                message.textContent = 'Your phone incorrect!';
            }

            // email handle
            if (element.type == 'email' && !element.value.match(regexEmail)) {
                parent.classList.add('error-cell');
                errFlag = true;
                message.textContent = 'Your email incorrect!';
            }

            // empty handle
            if (!element.value) {
                parent.classList.add('error-cell');
                errFlag = true;
                message.textContent = 'This field is required!';
            }

            // drop data
            if (element.value) {
                dataStorage[element.name] = element.value;
            }
        }
        // typing
        element.oninput = () => {
            parent.classList.remove('error-cell');
            errFlag = false;
        }
    });

    // stop submit default & drop data
    formElement.onsubmit = function (e) {
        e.preventDefault();
        // checkbox, radio data
        const inputChecked = document.querySelectorAll(form + " input:checked");
        inputChecked.forEach(element => {
            if (element.value) {
                dataStorage[element.name] = element.value;
            }
        });

        // textarea data
        const textarea = document.querySelector(form + " textarea");
        if (textarea && textarea.value) {
            dataStorage[textarea.name] = textarea.value;
        };

        // file data
        const file = document.querySelector(form + " input[type='file']");
        if (file && file.value) {
            dataStorage[file.name] = file.value;
        };

        // warning all of invalid
        requiredGroup.forEach(element => {
            const parent = getParent(element, '.form-cell');
            const message = parent.querySelector('.message');
            // empty handle
            if (!element.value) {
                parent.classList.add('error-cell');
                errFlag = true;
                message.textContent = 'This field is required!';
            }
        })

        // drop data
        let invalid = requiredGroup.some(element => {
            return element.value == '';
        })
            
        if (!invalid && !errFlag) {
            const modal = document.querySelectorAll('.modal');
            if(modal) {
                modal.forEach(element => {
                    element.style.display = 'none';
                });
            }
            console.table(dataStorage);
            formElement.reset();
        }
    }
};

export default formValidation;