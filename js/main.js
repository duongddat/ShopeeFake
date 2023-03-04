const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const items =  $$('.pagination-item');
const itemActive = $('.pagination-item.pagination-item--active');

items.forEach((item) => {
    item.onclick = function () {
        $('.pagination-item.pagination-item--active').classList.remove('.pagination-item--active');
        
        this.classList.add('.pagination-item--active');
    }
})
