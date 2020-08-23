/* Mobile Modules */
if (screen.width <= 640) {
  document.querySelector('.filter-btn-mobile').addEventListener('click', toggleFilters)
  document.querySelector('.order-btn-mobile').addEventListener('click', toggleFilters)
}


function toggleFilters(event) {
  const elementClicked = event.target
  if (screen.width <= 640) {
    document.querySelector('.products-container .mobile-buttons').classList.remove('invisible')
    document.querySelector('.open-modal-filter').addEventListener('click', toggleFilters)
  }

  if (elementClicked.classList.contains('filter-btn-mobile')) {
    document.querySelector('.filter-mobile')
      .classList.toggle('invisible')
    console.log(document.querySelector('.container'))
    document.querySelector('.container')
      .classList.toggle('invisible')
    document.querySelector('footer')
      .classList.toggle('invisible')
  }
  else if (elementClicked.classList.contains('order-btn-mobile')) {
    document.querySelector('.order-mobile')
      .classList.toggle('invisible')
    document.querySelector('.container')
      .classList.toggle('invisible')
    document.querySelector('footer')
      .classList.toggle('invisible')
  }
}

function toggleFilterMobile(event) {
  const elementClicked = event.target
  if (screen.width <= 640) {
    document.querySelector('.order-by').classList.add('invisible')
    document.querySelector('.mobile-buttons').classList.remove('invisible')
    document.querySelector('.open-modal-filter').addEventListener('click', toggleFilters)
  }

  elementClicked.classList.toggle('fa-plus')
  elementClicked.classList.toggle('fa-minus')
  elementClicked.parentNode
    .nextElementSibling
    .classList.toggle('invisible')

  if (elementClicked.classList.contains('fa-times')) {
    if (elementClicked.classList.contains('filter-mobile')) {
      document.querySelector('div.filter-mobile')
        .classList.toggle('invisible')
      document.querySelector('.container')
        .classList.toggle('invisible')
      document.querySelector('footer')
        .classList.toggle('invisible')
    }
    else {
      document.querySelector('div.order-mobile')
        .classList.toggle('invisible')
      document.querySelector('.container')
        .classList.toggle('invisible')
      document.querySelector('footer')
        .classList.toggle('invisible')
    }
  }
}

Object.values(document.querySelectorAll('.modal-mobile i'))
  .map(toggleIcon => toggleIcon.addEventListener('click', toggleFilterMobile))


/* Reset Filter in Mobile */

function resetFilter() {
  productSection.innerHTML = ''
  renderProducts(6)

  Object.values(document.querySelectorAll('input')).map(input => {
    input.checked = false
  })
}

document.querySelector('.reset').addEventListener('click', resetFilter)