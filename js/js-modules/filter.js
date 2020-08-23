// ------------Filter------------

function filterOfColorsAndSize(event) {
  const filterClicked = event.target

  if (filterClicked.tagName == "INPUT") {
    filter(filterClicked)
    if (verifyIfSomeChecked()) {
      renderProducts(6)
    }
  }
}

function filterOfPrice(event) {
  const filterClicked = event.target

  if (filterClicked.tagName == "INPUT") {
    filterPrice(filterClicked)
    if (verifyIfSomeChecked()) {
      renderProducts(6)
    }
  }
}

function filterAction() {
  const filterArray = Object.values(document.querySelectorAll('.filterColorsAndSize'))
  filterArray.map(filter => {
    filter.addEventListener('click', filterOfColorsAndSize)
  })
  const filterPriceArray = Object.values(document.querySelectorAll('input.filterPrice'))
  filterPriceArray.map(filter => {
    filter.addEventListener('click', filterOfPrice)
  })
}

filterAction()
moreColors()
