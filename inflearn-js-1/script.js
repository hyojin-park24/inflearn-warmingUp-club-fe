import data from './data.js';

const nvaigation = document.querySelector('.navigioan');
const menuList = document.querySelector('.menu-list');
const menuItem = document.querySelector('.menu-item');

const setElementContent = (element, content) => {
    element.innerHTML = content;
};

const setImageAttributes = (imangeElement, src, altText) => {
    imangeElement.src = src;
    imangeElement.alt = altText;
};

const getContent = ({name, imgUrl, descripton, price}) => {
    const content = menuItem.cloneNode(true);
    const [imgElement, textContainer] = content.children;
    const [titleElement, priceElement, descptionElement] = 
        textContainer.children;

        setElementContent(titleElement, name);
        setImageAttributes(imgElement, imgUrl, '${name} 이미지');
        setElementContent(priceElement, '${price}원');
        setElementContent(descptionElement, descripton);

        return content;
};

const renderMenuList = menu => {
    const filter = e.target.id.replace('select-','');
    const renderData = 
        filter == 'all' ? data : data.filter(item => item.type == filter);

    return renderData;
}
;

nvaigation.addEventListener('change', e => {
    renderMenuList(getRenderData(e));
});

renderMenuList(data);