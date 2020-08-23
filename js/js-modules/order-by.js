

/* Order by */

function orderRecent() {
  const actualProductsOfSection = Object.values(document.querySelectorAll('.products > .products-model'))
  let timeArray = []
  productSection.innerHTML = ''


  products.map(product => {
    const teste = actualProductsOfSection.map(productUnordered => {
      const nameProduct = productUnordered.querySelector('.name').innerText
      if (product.name == nameProduct)
        timeArray.push(product.time)
    })
  })

  timeArray = timeArray.sort((timeOne, timeTwo) => timeTwo - timeOne)

  timeArray.map(time => {
    products.map(product => {
      const idProduct = products.indexOf(product)
      if (time == product.time) {
        productSection.appendChild(makeProduct(idProduct))
      }
    })
  })
}

Object.values(document.querySelectorAll('.order-recent'))
  .map(orderRecentItem => {
    orderRecentItem.addEventListener('click', orderRecent)
  })

function orderMinorPrice() {
  const arrayMinorPrice = []
  const actualProductsOfSection = Object.values(document.querySelectorAll('.products > .products-model'))

  const arrayProductsOrdered = actualProductsOfSection
    .map(product => {
      const nameProductSection = product.querySelector('.name').innerText
      const priceProductSection = product.querySelector('.price').innerHTML
      const productSortedPrice = Number(priceProductSection.split('$')[1].replace(',', '.'))

      const productAndPrice = {
        name: nameProductSection,
        price: productSortedPrice
      }
      return productAndPrice
    })
    .sort((productOne, productTwo) => {
      return productOne.price - productTwo.price
    })

  orderArray(arrayProductsOrdered)
}

function orderGreaterPrice() {
  const arrayGreaterPrice = []
  const actualProductsOfSection = Object.values(document.querySelectorAll('.products > .products-model'))

  const arrayProductsOrdered = actualProductsOfSection
    .map(product => {
      const nameProductSection = product.querySelector('.name').innerText
      const priceProductSection = product.querySelector('.price').innerHTML
      const productSortedPrice = Number(priceProductSection.split('$')[1].replace(',', '.'))

      const productAndPrice = {
        name: nameProductSection,
        price: productSortedPrice
      }
      return productAndPrice
    })
    .sort((productOne, productTwo) => {
      return productTwo.price - productOne.price
    })

  orderArray(arrayProductsOrdered)
}

function orderArray(arr) {
  productSection.innerHTML = ''
  arr.map(productSorted => {
    products.map(product => {
      const idProduct = products.indexOf(product)
      const samePrice = product.price == productSorted.price
      const sameName = product.name == productSorted.name
      if (samePrice && sameName) {
        productSection.appendChild(makeProduct(idProduct))
      }
    })
  })
}

Object.values(document.querySelectorAll('.order-minor-price'))
  .map(orderMinorPriceItem => {
    orderMinorPriceItem.addEventListener('click', orderMinorPrice)
  })
Object.values(document.querySelectorAll('.order-greater-price'))
  .map(orderMinorPriceItem => {
    orderMinorPriceItem.addEventListener('click', orderGreaterPrice)
  })
