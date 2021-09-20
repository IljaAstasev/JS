// Tabs

window.addEventListener('DOMContentLoaded', function() {

    let tabs = document.quarySelectorAll('.tabheader_item'),
        tabsContent = document.quarySelectorAll('tabcontent'),
        tabsParent = document.quarySelectorAll('tabheader_items');

    function hideTabContent() {

        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader_item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader_item_active');
    }


    hideTabContent();
    showTabContent();


    tabsParent.addEventListener('click', function(event) {
        const target = event.target;
        if(target && target.classList.contains('tabheader_item')) {
            tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
      });
    }
});

// timer

const deadline = '2021-12-11';

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
    days = MathFloor( (t/(1000*60*60*24)) ),
    seconds = Math.floor( (t/1000) % 60), 
    minutes = Math.floor( (t/1000/60) % 60 ),
    hours = Math.floor( (t/(1000*60*60) % 24) );

    return {
        'total' : t,
        'days' : days, 
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}

function getZero(num){
    if (num >= 0 && num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}

    function setClock(selector, endtime) {

        const timer = document.quarySelector(selector),
            days = timer.quarySeector("#days"),
            hours = timer.quarySelector('#hours'),
            minutes = timer.quarySelector('#minutes'),
            seconds = timer.quarySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
            updateClock();

          
    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);
        
        if (t.total <= 0 ) {
            clearInterval(timeInterval);
        }
    } 
}       

    setClock('.timer' , deadline);
    });

    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
     modal = document.querySelector('.modal');

     modalTrigger.forEach(btn => {
         btn.addEventListener('click, openModal');
     });

     function closeModal() {
         modal.classList.add('hide');
         modal.classList.remove('show');
         document.body.style.overflow = '';
     }

     function openModal() {
         modal.classList.add('show');
         modal.classList.remove('hide');
         document.body.style.overflow = 'hidden';
         clearInterval(modalTimerId);
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.getAttribute('data-close') == "") {
                closeModal();
            }
        });

        const modalTimerId = setTimeout(openModal, 3000);

        function showModalByScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
                openModal();
                window.removeEventListener('scroll', showModalByScroll);
            }
        }

        window.addEventListener('scroll', showModalByScroll);

        // Используем классы для создания кирточек меню

        class MenuCard {
            constructor(src, alt, title, descr, price, parentSelector, ...classes) {
                this.src = src;
                this.alt = alt;
                this.title = title;
                this.descr = descr;
                this.price = price;
                this.classes = classes;
                this.parent = document.querySelector(parentSelector);
                this.transfer = 1;
                this.changeToUSD();
            }
        }

        changeToUSD() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.lenght === 0) {
                this.classes = "menu_item";
                element.classList.add(this.classes);
            }else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
            <img src=${this.src} alt=${this.alt}> 
            <h3 class="menu__item-subtitle">
            `
        }