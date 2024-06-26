class Node{
  constructor(value){
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.size = 0
  }

  isEmpty(){
    return this.size === 0
  }

  getSize(){
    return this.size
  }

  prepend(value){
    const node = new Node(value)
    if(this.isEmpty){
      this.head = node
      this.tail = node
    }else{
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
    this.size++
  }

  append(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
      this.tail = node
    }else{
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
    this.size++
  }

  removeFromFront(){
    if(this.isEmpty()){
      return null
    }
    const value = this.head.value
    this.head = this.head.next
    return value
  }

  removeFromEnd(){
    if(this.isEmpty()){
      return null
    }
    const value = this.tail.value
    this.tail = this.tail.prev
    this.tail.next = null
    return value
  }

}