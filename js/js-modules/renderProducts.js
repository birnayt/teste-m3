import products from '../json/products.js'

const productSection = document.querySelector('.products')

// Initializing
renderProducts(6)

// Render

function makeProduct(id) {
  const productModel = document.querySelector('.products-model').cloneNode(true)
  const product = products[id]

  const imgUri = product.imgUri
  const name = product.name
  const price = product.price

  productModel.querySelector('.imgUri').setAttribute('src', imgUri)
  productModel.querySelector('.name').innerText = name
  productModel.querySelector('.price').innerHTML = `R$${price.toFixed(2)}`.replace('.', ',')
  productModel.querySelector('.installment').innerHTML = `até 3x de R$${(price / 3).toFixed(2)}`
    .replace('.', ',')
  productModel.addEventListener('click', addToCart)

  return productModel
}

function renderProducts(quantity) {
  for (let id = 0; id < products.length; id++) {
    let productSectionAll = Object.values(document.querySelectorAll('.products .products-model'))

    if (id < quantity) {
      productSection.appendChild(makeProduct(id))
    }
  }
}