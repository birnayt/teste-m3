
/* Load more products, colors and addToCart  */

function moreColors() {
  const extraColors = Object.values(document.querySelectorAll('.checkbox.hide'))
  document.querySelector('.more-colors').addEventListener('click', () => {
    extraColors.map(inputInvisible => {
      inputInvisible.classList.toggle('invisible')
    })
  })
}

function buttonLoadMore() {
  productSection.innerHTML = ''
  renderProducts(9)
}

document.querySelector('.load-more').addEventListener('click', buttonLoadMore)

/* Add to cart */
let inCart = 0
function addToCart() {
  if (inCart => 1) {
    document.querySelector('.bagNumberArea').classList.remove('invisible')
  }
  inCart++
  document.querySelector('.bagNumber').innerText = inCart
}