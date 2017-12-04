function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list li')

  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n
  }
}

function deepestChild() {
  let current = document.querySelector("#grand-node")
  let next = current.children[0]

  while (next) {
    current = next
    next = current.children[0]
  }
return current
}
