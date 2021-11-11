let btns = document.querySelectorAll('.btn-tab');
let tabs = document.querySelectorAll('.tab');

// ---------------- TAB-MENU ----------------

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => {
    let tabId = btns[i].getAttribute('data-tab');
    let block = document.querySelector(tabId);
    for (let j = 0; j < btns.length; j++) {
      btns[j].classList.remove('active');
    }
    for (let k = 0; k < tabs.length; k++) {
      tabs[k].classList.remove('active-tab');
    }
    block.classList.add('active-tab');
    btns[i].classList.add('active');
  });
}

// ------------------------------------------

// --------------- Objects ------------------

let clothes1 = {
  title: "Boy's PARAJUMPERS Beige Windbreaker Inside Duffle Bag Jacket",
  price: 50,
  brand: 'PARAJUMPERS',
  url: './img/jacket_PNG8058.png',
  size: '',
};
let clothes2 = {
  title: "Boy's BARBOUR Quilited Heritage Liddesdale Jacket P2P",
  price: 39,
  brand: 'BARBOUR',
  url: './img/shape-jacket-30377.png',
  size: '',
};
let clothes3 = {
  title: 'BRIONI Blue Wool Pleated Cuffed Delta New Dress Pants',
  price: 78,
  brand: 'BRIONI',
  url: './img/wg9AJfCTortxcriEJsosw.png',
  size: '',
};
let clothes4 = {
  title: 'BRIONI Black Floral Pleated 100% Silk Italy Tie Necktie',
  price: 57,
  brand: 'BRIONI',
  url: './img/25D025BA25D025BE25D1258125D1258225D1258E25D025BC_DoV-2B2B252862529.png',
  size: '',
};

let men = [clothes1, clothes2, clothes3, clothes4];

let clothes5 = {
  title: "Women's JIL SANDER Pure Wool Peak Lapel Casual Blazer Jacket",
  price: 60,
  brand: 'Jil Sander',
  url: './img/209-2096148_ladies-jacket-png-image-with-transparent-background-womens.png',
  size: '',
};
let clothes6 = {
  title: "Women's Vintage MCM SPORTS LEGERE Coat Jacked",
  price: 72,
  brand: 'MCM',
  url: './img/2W5A7008-950x950.png',
  size: '',
};
let clothes7 = {
  title: "Women's Vintage BURBERRYS Cotton Long Casual Trench Coat",
  price: 48,
  brand: 'Burberrys',
  url: './img/jacket-transparent-30390.png',
  size: '',
};
let clothes8 = {
  title: "Women's Vintage BURBERRYS London Navy Cotton Trench Coat",
  price: 37,
  brand: 'Burberrys',
  url: './img/1108631-2424001-4_3.png',
  size: '',
};

let women = [clothes5, clothes6, clothes7, clothes8];

// ------------------------------------------

// ----------------- DOM --------------------

let menCont = document.querySelector('.men');
let womenCont = document.querySelector('.women');
let priceBlock = document.querySelector('#price');
let cartBlock = document.querySelector('#cart');
let buyPrice = 0;
let boughtClothes = [];
let cartMenu = document.querySelector('.cart-menu')
let boughtBlocks = document.querySelector('.bought-items')
let confirmBut = document.querySelector('.confirm')

cartMenu.firstElementChild.addEventListener('click', () => {
  cartMenu.classList.remove('menu-show')
})

cartBlock.addEventListener('click', () => {
  cartMenu.classList.add('menu-show')
});

confirmBut.addEventListener('click', () => {
  if (boughtClothes != '') {
    cartMenu.classList.remove('menu-show')
    let boughtBlocksCount = boughtBlocks.querySelectorAll('.bought-item-block')
    for (let index = 0; index < boughtBlocksCount.length; index++) {
      boughtBlocksCount[index].remove() 
    }
    console.log(boughtClothes);
    boughtClothes = [];
    buyPrice = 0;
    priceBlock.innerHTML = `<span>${buyPrice}$</span>`;
    let alertBlock = document.createElement('div');
    document.body.append(alertBlock);
    alertBlock.innerHTML = 'You have successfully bought these clothes!';
    alertBlock.style.position = 'fixed';
    alertBlock.style.top = '0';
    alertBlock.style.left = '0';
    alertBlock.style.width = '100%';
    alertBlock.style.padding = '5px 10px';
    alertBlock.style.color = '#fff';
    alertBlock.style.zIndex = '100';
    alertBlock.style.backgroundColor = 'rgba(8, 60, 110, 1)';
    setTimeout(() => {
      alertBlock.remove();
    }, 2000);
  }
})

for (let i = 0; i < men.length; i++) {
  let clothesBlock = document.createElement('div');
  clothesBlock.classList.add('clothes-block');
  menCont.append(clothesBlock);
  let clothesTop = document.createElement('div');
  clothesTop.classList.add('clothes-block-top');
  clothesBlock.append(clothesTop);
  let clothesBottom = document.createElement('div');
  clothesBottom.classList.add('clothes-block-bottom');
  clothesBlock.append(clothesBottom);
  let clothesImg = document.createElement('img');
  clothesImg.classList.add('clothes-img');
  clothesImg.setAttribute('src', `${men[i].url}`);
  clothesTop.append(clothesImg);
  let clothesTitle = document.createElement('h3');
  clothesTitle.classList.add('clothes-title');
  clothesTitle.innerHTML = `${men[i].title}`;
  clothesBottom.append(clothesTitle);
  let clothesBrand = document.createElement('span');
  clothesBrand.classList.add('clothes-brand');
  clothesBrand.innerHTML = `${men[i].brand}`;
  clothesBottom.append(clothesBrand);
  let clothesPrice = document.createElement('strong');
  clothesPrice.classList.add('clothes-price');
  clothesPrice.innerHTML = `$${men[i].price}`;
  clothesBottom.append(clothesPrice);
  let addCart = document.createElement('button');
  addCart.innerHTML = `Add to Cart`;
  addCart.classList.add('clothes-button');
  clothesBottom.append(addCart);
  addCart.addEventListener('click', () => {
    if (men[i].size != '') {
      buyPrice += men[i].price;
      priceBlock.innerHTML = `<span>${buyPrice}$</span>`;
      let boughtItem = {
        title: men[i].title,
        price: men[i].price,
        size: men[i].size,
        img: men[i].url
      }
      let boughtItemBlock = document.createElement('div')
      boughtItemBlock.classList.add('bought-item-block')
      boughtBlocks.append(boughtItemBlock)
      boughtItemBlock.innerHTML = `
      <div class="left">
        <img src="${boughtItem.img}" alt="" />
      </div>
      <div class="right">
        <ul>
          <li>Price: $${boughtItem.price}</li>  
          <li>Size: ${boughtItem.size}</li>
        </ul>
      </div>
      `
      console.log(boughtItem);
      boughtClothes.push(boughtItem);
    } else {
      alert('Please select size.');
    }
  });
  let clothesSizeBlock = document.createElement('div');
  clothesTop.append(clothesSizeBlock);
  clothesSizeBlock.classList.add('clothes-size-block');
  clothesSizeBlock.innerHTML = `
  <div class="size-section">
    <button class="size-btn" data-attr="sBtn">S</button>
    <button class="size-btn" data-attr="mBtn">M</button>
    <button class="size-btn" data-attr="lBtn">L</button>
  </div>
  `;
  clothesSizeBlock.setAttribute('data-attr', 'true');
  clothesTop.addEventListener('click', (ev) => {
    ev.stopPropagation();
    clothesSizeBlock.classList.add('size-show');
  });
  clothesSizeBlock.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.getAttribute('data-attr') == 'true') {
      clothesSizeBlock.classList.remove('size-show');
    }
  });
  let sizeBtns =
    clothesSizeBlock.firstElementChild.querySelectorAll('.size-btn');
  for (let l = 0; l < sizeBtns.length; l++) {
    sizeBtns[l].addEventListener('click', () => {
      men[i].size = `${sizeBtns[l].innerHTML}`;
      for (let p = 0; p < sizeBtns.length; p++) {
        sizeBtns[p].classList.remove('active-btn');
      }
      sizeBtns[l].classList.add('active-btn');
    });
  }
}

for (let i = 0; i < women.length; i++) {
  let clothesBlock = document.createElement('div');
  clothesBlock.classList.add('clothes-block');
  womenCont.append(clothesBlock);
  let clothesTop = document.createElement('div');
  clothesTop.classList.add('clothes-block-top');
  clothesBlock.append(clothesTop);
  let clothesBottom = document.createElement('div');
  clothesBottom.classList.add('clothes-block-bottom');
  clothesBlock.append(clothesBottom);
  let clothesImg = document.createElement('img');
  clothesImg.classList.add('clothes-img');
  clothesImg.setAttribute('src', `${women[i].url}`);
  clothesTop.append(clothesImg);
  let clothesTitle = document.createElement('h3');
  clothesTitle.classList.add('clothes-title');
  clothesTitle.innerHTML = `${women[i].title}`;
  clothesBottom.append(clothesTitle);
  let clothesBrand = document.createElement('span');
  clothesBrand.classList.add('clothes-brand');
  clothesBrand.innerHTML = `${women[i].brand}`;
  clothesBottom.append(clothesBrand);
  let clothesPrice = document.createElement('strong');
  clothesPrice.classList.add('clothes-price');
  clothesPrice.innerHTML = `$${women[i].price}`;
  clothesBottom.append(clothesPrice);
  let addCart = document.createElement('button');
  addCart.innerHTML = `Add to Cart`;
  addCart.classList.add('clothes-button');
  clothesBottom.append(addCart);
  addCart.addEventListener('click', () => {
    if (women[i].size != '') {
      buyPrice += women[i].price;
      priceBlock.innerHTML = `<span>${buyPrice}$</span>`;
      let boughtItem = {
        title: women[i].title,
        price: women[i].price,
        size: women[i].size,
        img: women[i].url
      }
      let boughtItemBlock = document.createElement('div')
      boughtItemBlock.classList.add('bought-item-block')
      boughtBlocks.append(boughtItemBlock)
      boughtItemBlock.innerHTML = `
      <div class="left">
        <img src="${boughtItem.img}" alt="" >
      </div>
      <div class="right">
        <ul>
          <li>Price: $${boughtItem.price}</li>  
          <li>Size: ${boughtItem.size}</li>
        </ul>
      </div>
      `
      console.log(boughtItem);
      boughtClothes.push(boughtItem);
    } else {
      alert('Please select size.');
    }
  });
  let clothesSizeBlock = document.createElement('div');
  clothesTop.append(clothesSizeBlock);
  clothesSizeBlock.classList.add('clothes-size-block');
  clothesSizeBlock.innerHTML = `
  <div class="size-section">
    <button class="size-btn" data-attr="sBtn">S</button>
    <button class="size-btn" data-attr="mBtn">M</button>
    <button class="size-btn" data-attr="lBtn">L</button>
  </div>
  `;
  clothesSizeBlock.setAttribute('data-attr', 'true');
  clothesTop.addEventListener('click', (ev) => {
    ev.stopPropagation();
    clothesSizeBlock.classList.add('size-show');
  });
  clothesSizeBlock.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.getAttribute('data-attr') == 'true') {
      clothesSizeBlock.classList.remove('size-show');
    }
  });
  let sizeBtns =
    clothesSizeBlock.firstElementChild.querySelectorAll('.size-btn');
  for (let l = 0; l < sizeBtns.length; l++) {
    sizeBtns[l].addEventListener('click', () => {
      women[i].size = `${sizeBtns[l].innerHTML}`;
      for (let p = 0; p < sizeBtns.length; p++) {
        sizeBtns[p].classList.remove('active-btn');
      }
      sizeBtns[l].classList.add('active-btn');
    });
  }
}

// ------------------------------------------
