import data from './data.js';

const navigation = document.querySelector('.navigation');
const menuList = document.querySelector('.menu-list');
const menuItem = document.querySelector('.menu-item');


const setElementContent = (element, content) => {
    element.innerText = content;
};

const setImageAttributes = (imangeElement, src, altText) => {
    imangeElement.src = src;
    imangeElement.alt = altText;
};

const getContent = ({name, imgUrl, description, price}) => {
    const content = menuItem.cloneNode(true);
    const [imgElement, textContainer] = content.children;
    const [titleElement, priceElement, descptionElement] = 
        textContainer.children;

        setElementContent(titleElement, name);
        setImageAttributes(imgElement, imgUrl, `${name} 이미지`);
        setElementContent(priceElement, `${price}원`);
        setElementContent(descptionElement, description);

        return content;
};

const renderMenuList = menu => {
    const renderList = menu.map(item => getContent(item));

     menuList.replaceChildren(...renderList);
    // menuList.replaceChildren(renderList[0], renderList[1], renderList[2]);
};

const getRenderData = e => {
    const filter = e.target.id.replace('select-','');
    const renderData = 
        filter == 'all' ? data : data.filter(item => item.type === filter);

    return renderData;
};

navigation.addEventListener('change', e => {
    console.log(e)
    renderMenuList(getRenderData(e));
});

renderMenuList(data);