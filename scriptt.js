
window.addEventListener('DOMContentLoaded,' function() {
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



})
