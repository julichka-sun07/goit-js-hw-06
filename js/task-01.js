const categoriesAll = document.querySelectorAll('li.item')
console.log(`Number of categories: ${categoriesAll.length}`)

const categoriesArray = [...categoriesAll]
.map(categories => `Category:${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
)
console.log(categoriesArray)