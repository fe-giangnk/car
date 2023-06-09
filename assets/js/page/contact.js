import display from '../display.js';
import formValidation from '../formValidation.js';
import modal from '../modal.js';
import cursor from '../cursor.js';
import headerNav from '../headerNav.js';

display('Test!');

headerNav();
formValidation('#subscription');

formValidation('#registerForm');
formValidation('#loginForm');
formValidation('#contactForm');

// formValidation('#testForm');

modal('#login-modal','.login-modal-open');
modal('#register-modal','.register-modal-open');
// modal('#testModal','.openTestModal');

// accordion('#testAcc', true);  //open 1
// accordion('#testAccordion', false);  //open 2

// tabs('#testTabsHorizon');

cursor();
