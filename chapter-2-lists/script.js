function List() {
  this.listSize = 0;
  this.pos = 0
  this.data = [];
  this.find = find;
  this.append = append;
  this.remove = remove;
  this.length = length;
  this.toString = toString;
  this.insert = insert;
  this.removeAll = removeAll;
  this.isContained = isContained;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
}

function front() {
  this.pos = 0
}
function end() {
  this.pos = this.data.length;
}
function prev() {
  if (this.pos > 0) {
    --this.pos
  }
}
function next() {
  if (this.pos < this.data.length) {
    ++this.pos
  }
}
function currPos() {
  return this.pos
}
function moveTo(position) {
  if(position > 0 && position < this.data.length ) {
    this.pos = position
  }
}
function getElement() {
  return this.data[this.pos];
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
function removeAll() {
  delete this.data;
  this.data = [];
  this.listSize = this.pos = this.data.length;
}
function isContained(el) {
  const isFounded = this.data.find(data => data === el);
  if (!isFounded) return false;
  return true
}

const tryList = new List();
tryList.append('medet')
tryList.append('aybike')
tryList.append('mia')
tryList.remove('aybike')
tryList.insert('aybike', 'mia')
console.log(tryList.getElement())


console.log(tryList);