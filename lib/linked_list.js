// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newTail = new Node(val)
        if(this.tail !== null){
            this.tail.next = newTail
        } else {
            this.head = newTail
        }

        this.tail = newTail
        this.length++
        return this
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if(this.length === 0) return undefined
        let currentNode = this.head
        let oldTail = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
        } else {
            while(currentNode.next !== this.tail){
                currentNode = currentNode.next
            }
            this.tail = currentNode
            currentNode.next = null
        }
        this.length--
        return oldTail
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newHead = new Node(val)

        if(this.head != null){
            newHead.next = this.head
        } else {
            this.tail = newHead
        }

        this.head = newHead
        this.length++

        return this
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if(this.length === 0) return undefined

        let oldHead = this.head
        this.head = this.head.next
        if(this.length === 1){
            this.tail = null
        }
        this.length--
        return oldHead
    }

    // TODO: Implement the contains method here
    contains(target) {
        if(this.length === 0) return false
        let currentNode = this.head
        for(let i = 0; i < this.length; i++){
            if(currentNode.value === target){
                return true
            }
            currentNode = currentNode.next
        }
        return false
    }

    // TODO: Implement the get method here
    get(index) {
        if(index > this.length) return null
        let currentNode = this.head
        for(let i = 0; i < index; i++){
            currentNode = currentNode.next
        }
        return currentNode
    }

    // TODO: Implement the set method here
    set(index, val) {
        if(index >= this.length) return false

        this.get(index).value = val

        return true
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if(index >= this.length) return false

        if(index === 0){
            this.addToHead(val)
        } else {
            let newNode = new Node(val)
            let prevNode = this.get(index - 1)
            let nextNode = prevNode.next
            prevNode.next = newNode
            nextNode.next = nextNode
            this.length++

        }
        return true
    }

    // TODO: Implement the remove method here
    remove(index) {
        if(index >= this.length) return undefined;
        if(index === 0) return this.removeHead();
        let prevNode = this.get(index - 1);
        let targetNode = prevNode.next;
        prevNode.next = targetNode.next;
        this.length--;
        return targetNode;
    }

    // TODO: Implement the size method here
    size() {

    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
