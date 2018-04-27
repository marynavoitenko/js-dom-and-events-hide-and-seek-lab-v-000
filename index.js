function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function deepestChild() {
  // my working solution

  // let condition = true
  // let arr = []
  // arr[0] = document.querySelector('div#grand-node').querySelector('div')
  // let i = 1
  // while (condition) {
  //   arr[i] = arr[i-1].querySelector('div')
  //   if (arr[i] === null) {
  //     condition = false
  //   } else {
  //     i++
  //   }
  // }
  // return arr[arr.length - 2]

  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}

function increaseRankBy(n) {
  // my working solution

  // const rankedLists = document.querySelectorAll('.ranked-list')
  // const firstList = rankedLists[0]
  // const secondList = rankedLists[1]
  //
  // let children = firstList.children
  // let start = 1
  // for (let i = 0, l = children.length; i < l; i++) {
  //   const old_v = parseInt(children[i].innerHTML)
  //   children[i].innerHTML = old_v + n
  // }
  //
  // children = secondList.children
  // start = 12
  //
  // for (let i = 0, l = children.length; i < l; i++) {
  //   const old_v = parseInt(children[i].innerHTML)
  //   children[i].innerHTML = old_v + n
  // }

  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }

}
