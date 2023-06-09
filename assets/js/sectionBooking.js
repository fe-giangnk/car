function sBooking() { 
    const bookingForm = document.querySelector('#booking');
    const dataStorage = {};

    bookingForm.onsubmit = function(event) {
        event.preventDefault();
        // selects handle
        const selects = document.querySelectorAll('#booking select');
        const [car, pickUp, dropOf] = selects;
        const [carValue, pickUpValue, dropOfValue] = [car.value, pickUp.value, dropOf.value];
        //image match
        let image;
        switch(carValue) {
            case 'VW Golf 6':
                image = 2;
                break;
            case 'Toyota Camry':
                image = 3;
                break;
            case 'BMW 320 ModernLine':
                image = 4;
                break;
            case 'Mercedes-Benz GLK':
                image = 5;
                break;
            case 'VW Passat CC':
                image = 6;
                break;
            default:
                image = 1;
        };
        // date handle
        const dates = document.querySelectorAll("#booking input[type='date']");
        const [pickUpDate, dropOfDate] = dates;
        const [pickUpDateValue, dropOfDateValue] = [pickUpDate.value, dropOfDate.value];
        // render modal-content
        const renderArea = document.querySelector('#order-infor');
        renderArea.innerHTML = 
        `
            <div class="order-infor--content interactable">
                <h5 class="title">Location & Date</h5>
                <div>
                    <h6><span class="lnr lnr-hourglass"></span>Pick-Up Date</h6>
                    <p>${pickUpDateValue}</p>
                </div>
                <div>
                    <h6><span class="lnr lnr-hourglass"></span>Drop-Off Date</h6>
                    <p>${dropOfDateValue}</p>
                </div>
                <div>
                    <h6><span class="lnr lnr-map-marker"></span>Pick-Up location</h6>
                    <p>${pickUpValue}</p>
                </div>
                
                <div>
                    <h6><span class="lnr lnr-apartment"></span>Drop-off location</h6>
                    <p>${dropOfValue}</p>
                </div>
            </div>
            <div class="order-infor--image">
                <h5 class="title interactable"><span>Car -</span>${carValue}</h5>
                <img class="interactable" src="./assets/images/${image}.jpg" alt="Car">
            </div>
        `;
        // pick message
        const message = document.querySelector('.booking-message');
        // validate person-form
        function validatePersonForm() {
            // get parent loop
            function getParent(element, selector) {
                while (element.parentElement) {
                    if (element.parentElement.matches(selector)) {
                        return element.parentElement;
                    }
                    element = element.getParent;
                }
            } //getParent(selectElement, '.classFather')

            const formElement = document.querySelector('#person-form');
            let requiredGroup = document.querySelectorAll('#person-form .isRequired');
            requiredGroup = [...requiredGroup];
            let password;
            let regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
            let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
                    };
                    // password handle
                    if (element.type == 'password') {
                        password = element.value;
                    };
                    if (element.type == 'password' && element.value.length < 6) {
                        parent.classList.add('error-cell');
                        errFlag = true;
                        message.textContent = 'Your password too short! Enter the password at least 6 characters';
                    };
                    // confirmPassword check
                    if (element.name == 'confirmPassword' && element.value != password) {
                        parent.classList.add('error-cell');
                        errFlag = true;
                        message.textContent = 'Confirm password incorrect!';
                    };
                    if (element.name == 'confirmPassword' && element.value == password) {
                        parent.classList.remove('error-cell');
                    };
                    // phone handle
                    if (element.type == 'tel' && !element.value.match(regexPhone)) {
                        parent.classList.add('error-cell');
                        errFlag = true;
                        message.textContent = 'Your phone incorrect!';
                    };
                    // email handle
                    if (element.type == 'email' && !element.value.match(regexEmail)) {
                        parent.classList.add('error-cell');
                        errFlag = true;
                        message.textContent = 'Your email incorrect!';
                    };
                    // empty handle
                    if (!element.value) {
                        parent.classList.add('error-cell');
                        errFlag = true;
                        message.textContent = 'This field is required!';
                    };
                    // drop data
                    if (element.value) {
                        dataStorage[element.name] = element.value;
                    };
                };
                // typing
                element.oninput = () => {
                    parent.classList.remove('error-cell');
                    errFlag = false;
                };
            });
            // stop submit default & drop data
            formElement.onsubmit = function (e) {
                e.preventDefault();
                // checkbox, radio data
                const inputChecked = document.querySelectorAll("#person-form input:checked");
                inputChecked.forEach(element => {
                    if (element.value) {
                        dataStorage[element.name] = element.value;
                    };
                });
                // warning all of invalid
                requiredGroup.forEach(element => {
                    const parent = getParent(element, '.form-cell');
                    const message = parent.querySelector('.message');
                    // empty handle
                    if (!element.value) {
                        parent.classList.add('error-cell');
                        errFlag = true;
                        message.textContent = 'This field is required!';
                    };
                });
                // drop data
                let invalid = requiredGroup.some(element => {
                    return element.value == '';
                });
                if (!invalid && !errFlag) {
                    const modal = document.querySelectorAll('.modal');
                    if(modal) {
                        modal.forEach(element => {
                            element.style.display = 'none';
                        });
                    };
                    // display success mess
                    message.classList.remove('error');
                    message.classList.add('success');
                    message.innerText = 'Check your email to confirm an order.';
                    message.style.display = 'block';
                    // display data
                    console.table(dataStorage);
                    formElement.reset();
                };
            };
        };
        validatePersonForm();

        // validate booking-form
        if(carValue && pickUpValue && dropOfValue && pickUpDateValue && dropOfDateValue) {
            // open modal
            const modal = document.querySelector('#booking-modal');
            modal.style.display = 'flex';
            message.style.display = 'none';
        } else {
            // display error mess
            message.classList.remove('success');
            message.classList.add('error');
            message.innerText = 'All fields required!';
            message.style.display = 'block';
        };
    };
};
export default sBooking;