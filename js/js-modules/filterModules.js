/* 
 *Filter Modules
 */

function verifyIfSomeChecked() {
  const filterArray = Object.values(document.querySelectorAll('input'))
  const isAllFilterUnchecked = filterArray.every(filter => {
    return !filter.classList.contains('checked')
  })

  return isAllFilterUnchecked
}

function filter(filterClicked) {
  const prices = makePricesList(filterClicked)
  const productSectionAll = Object.values(productSection.querySelectorAll('.products .products-model'))

  if (verifyIfSomeChecked()) {
    productSection.innerHTML = ''
  }

  if (filterClicked.checked) {
    filterClicked.classList.add('checked')

    products.map(product => {
      const idProduct = products.indexOf(product)
      const sameColor = product.color == filterClicked.classList[0]
      const sameSize = product.size == filterClicked.classList[0]
      const rangeOfPrice = (typeof prices !== 'undefined' ? (prices[filterClicked.classList[0]].rangeOne < product.price && product.price < prices[filterClicked.classList[0]].rangeTwo) : false)
      const actualProductsOfSection = Object.values(document.querySelectorAll('.products > .products-model'))

      if (sameColor || sameSize || rangeOfPrice) {
        const alreadyExist = actualProductsOfSection.some(actualProduct => {
          return actualProduct.querySelector('.name').innerText == product.name
        })
        if (!alreadyExist) {
          productSection.appendChild(makeProduct(idProduct))
        }
      }
    })
  }

  else {
    filterClicked.classList.remove('checked')

    products.map(product => {
      const idProduct = products.indexOf(product)
      const sameColor = product.color == filterClicked.classList[0]
      const sameSize = product.size == filterClicked.classList[0]
      const rangeOfPrice = (typeof prices !== 'undefined' ? (prices[filterClicked.classList[0]].rangeOne < product.price && product.price < prices[filterClicked.classList[0]].rangeTwo) : false)

      if (sameColor || sameSize || rangeOfPrice) {
        const productsSectionArray = Object.values(productSection.querySelectorAll('.products-model'))

        productsSectionArray.map(productRendered => {
          if (productRendered.querySelector('.name').innerText == product.name)
            productSection.removeChild(productRendered)
        })
      }
    })
  }
}

function filterPrice(filterClicked) {
  const prices = makePricesList(filterClicked)
  const actualProductsOfSection = Object.values(document.querySelectorAll('.products > .products-model'))

  if (filterClicked.checked) {
    filterClicked.classList.add('checked')

    products.map(product => {
      const idProduct = products.indexOf(product)
      const rangeOfPrice = (typeof prices !== 'undefined' ? (prices[filterClicked.classList[0]].rangeOne < product.price && product.price < prices[filterClicked.classList[0]].rangeTwo) : false)
      const actualProductsOfSection = Object.values(document.querySelectorAll('.products > .products-model'))

      if (!rangeOfPrice) {
        actualProductsOfSection.map(productToRemove => {
          const nameProduct = productToRemove.querySelector('.name').innerText
          console.log()
          if (product.name == nameProduct) {
            productSection.removeChild(productToRemove)
          }
        })
      }
    })
  }
  else {
    filterClicked.classList.remove('checked')

    products.map(product => {
      const idProduct = products.indexOf(product)
      const sameColor = product.color == filterClicked.classList[0]
      const sameSize = product.size == filterClicked.classList[0]
      const rangeOfPrice = (typeof prices !== 'undefined' ? (prices[filterClicked.classList[0]].rangeOne < product.price && product.price < prices[filterClicked.classList[0]].rangeTwo) : false)

      if (sameColor || sameSize || rangeOfPrice) {
        const productsSectionArray = Object.values(productSection.querySelectorAll('.products-model'))

        productsSectionArray.map(productRendered => {
          if (productRendered.querySelector('.name').innerText == product.name)
            productSection.removeChild(productRendered)
        })
      }
    })
  }
}

function makePricesList(filterClicked) {
  if (filterClicked.classList.contains('price')) {
    const prices = {
      "first-price": { rangeOne: 0, rangeTwo: 50 },
      "second-price": { rangeOne: 51, rangeTwo: 150 },
      "third-price": { rangeOne: 151, rangeTwo: 300 },
      "fourth-price": { rangeOne: 301, rangeTwo: 500 },
      "fifth-price": { rangeOne: 0, rangeTwo: Infinity }
    }
    return prices
  }
}