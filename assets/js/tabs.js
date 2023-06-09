function tabs() {
    // data
    const pickCars = [
        {
            name: 'Audi A1 S-Line',
            model: 'Audi',
            mark: 'A1',
            year: 2012,
            doors: '4/5',
            ac: 'Yes',
            transmission: 'Manual',
            fuel: 'Gasoline',
            image: './assets/images/1.jpg',
            price: 45,
            active: true
        },
        {
            name: 'VW Golf 6',
            model: 'Volkswagen',
            mark: 'Golf 6',
            year: 2008,
            doors: '4/5',
            ac: 'Yes',
            transmission: 'Manual',
            fuel: 'Diesel',
            image: './assets/images/2.jpg',
            price: 37
        },
        {
            name: 'Toyota Camry',
            model: 'Camry',
            mark: 'C2',
            year: 2006,
            doors: '4/5',
            ac: 'Yes',
            transmission: 'Automatic',
            fuel: 'Hybird',
            image: './assets/images/3.jpg',
            price: 30
        },
        {
            name: 'BMW 320 ModernLine',
            model: 'BMW',
            mark: 'ModernLine',
            year: 2012,
            doors: '4/5',
            ac: 'Yes',
            transmission: 'Manual',
            fuel: 'Diesel',
            image: './assets/images/4.jpg',
            price: 35
        },
        {
            name: 'Mercedes-Benz GLK',
            model: 'Mercedes',
            mark: 'GLK',
            year: 2006,
            doors: '4/5',
            ac: 'Yes',
            transmission: 'Manual',
            fuel: 'Diesel',
            image: './assets/images/5.jpg',
            price: 50
        },
        {
            name: 'VW Passat CC',
            model: 'Volkswagen',
            mark: 'CC',
            year: 2008,
            doors: '4/5',
            ac: 'Yes',
            transmission: 'Manual',
            fuel: 'Gasonline',
            image: './assets/images/6.jpg',
            price: 25
        },
    ];

    const tabs = document.querySelector('#pickCarTabs');

    //-------------------- render button
    let renderButton = '';
    pickCars.forEach(element => {
        if(element.active) {
            renderButton += `<button class='active'>${element.name}</button>`;
        } else {
            renderButton += `<button>${element.name}</button>`;
        }
    })
    const buttonArea = tabs.querySelector('.button-wrap');
    buttonArea.innerHTML = renderButton;

    //-------------------- render panel
    function renderTabsContent(panel) {
        let renderTabsContent = 
        `
            <div class="pick-car">
                <div class="car">
                    <img id="pick-car--image" class="interactable" src="${panel.image}" alt="Car">
                    <div class="loader" style="display: none;"></div>
                </div>
                <div class="table interactable">
                    <div class="table-heading">
                        <h4><span>$${panel.price}</span> / rent per day</h4>
                    </div>
                    <div class="table-content">
                        <div class="table-content--row">
                            <span>Model</span>
                            <span>${panel.model}</span>
                        </div>
                        <div class="table-content--row">
                            <span>Mark</span>
                            <span>${panel.mark}</span>
                        </div>
                        <div class="table-content--row">
                            <span>Year</span>
                            <span>${panel.year}</span>
                        </div>
                        <div class="table-content--row">
                            <span>Doors</span>
                            <span>${panel.doors}</span>
                        </div>
                        <div class="table-content--row">
                            <span>AC</span>
                            <span>${panel.ac}</span>
                        </div>
                        <div class="table-content--row">
                            <span>Transmission</span>
                            <span>${panel.transmission}</span>
                        </div>
                        <div class="table-content--row">
                            <span>Fuel</span>
                            <span>${panel.fuel}</span>
                        </div>
                    </div>
                    <div class="table-footer interactable">
                        <a href="javascript:void(0)" class="uppercase btn-primary">Reserve Now</a>
                    </div>
            </div>
        `;
        const panelArea = tabs.querySelector('.panel');
        panelArea.innerHTML = renderTabsContent;
    };
    renderTabsContent(pickCars[0]);

    // img, table onload 
    function imgCheck() {
        const image = tabs.querySelector('#pick-car--image');
        let loaded = false;
        image.addEventListener('load', () => {
            loaded = true;
            image.style.display = 'inline-block';
            tabs.querySelector('.loader').style.display = 'none';
        });
        if(!loaded) {
            image.style.display = 'none';
            tabs.querySelector('.loader').style.display = 'flex';
        }
    }

    //-------------------- click button
    const buttonGroup = tabs.querySelectorAll('button');
    buttonGroup.forEach((element, i) => {
        const panel = pickCars[i];
        element.addEventListener('click', (e) => {
            const activeButton = tabs.querySelector('button.active');
            activeButton.classList.remove('active');
            // active
            e.target.classList.add('active');
            renderTabsContent(panel);
            imgCheck();
        });
    });
};
export default tabs;