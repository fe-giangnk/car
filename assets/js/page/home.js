import display from '../display.js';
import formValidation from '../formValidation.js';
import modal from '../modal.js';
import accordion from '../accordion.js';
import tabs from '../tabs.js';

import headerNav from '../headerNav.js';
import sBooking from '../sectionBooking.js';

display('Test!');

headerNav();
formValidation('#subscription');

sBooking();


formValidation('#registerForm');
formValidation('#loginForm');
// formValidation('#testForm');

// modal('#testModal','.openTestModal');
modal('#booking-modal','.open-booking-modal');
modal('#login-modal','.login-modal-open');
modal('#register-modal','.register-modal-open');

accordion('#faq-accordion', true);

// accordion('#testAcc', true);  //open 1
// accordion('#testAccordion', false);  //open 2

tabs();
// tabs('#testTabsHorizon');



