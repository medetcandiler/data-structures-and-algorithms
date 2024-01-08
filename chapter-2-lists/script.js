function List() {
  this.listSize = 0;
  this.pos = 0
  this.data = [];
  // this.clear = clear;
  this.find = find;
  this.append = append;
  this.remove = remove;
  this.length = length;
  this.toString = toString;
  this.insert = insert;
}

function append(el) {
  this.data[this.listSize++] = el;
}
function length() {
  return this.listSize;
}
function toString() {
  return this.data;
}
function insert(el, after) {
  const index = this.find(after);
  if (index !== -1) {
    this.data.splice(index + 1, 0, el)
    ++this.listSize
    return true
  }
  return false
}





// function findAt(el) {
//   for (let i = 0; i < this.data.length; i++) {
//     if (this.data[i] === el) {
//       console.log(i)
//       return i;
//     }
//   }
//   return -1
// }

function find(el) {
  let index = this.data.indexOf(el);
  return index
}

function remove(el) {
  let index = this.find(el);
  if (index !== -1) {
    this.data.splice(index, 1);
    --this.listSize;
    return true
  }
  return false
  // below aproach creates new array and causes more memory usage that's why I revised it to above version...
  // const newList = this.data.filter(listEl => listEl !== this.data[index]);
  // this.data = newList
  // this.listSize -= 1;
}




const tryList = new List();
tryList.append('medet')
tryList.append('aybike')
tryList.append('mia')
tryList.remove('aybike')
tryList.insert('aybike', 'mia')

console.log(tryList);