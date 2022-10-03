// Implement classes Node and Linked List
/*
class Node
{
constructor(data,next){
	this.data=data;
	this.next=next;
}}

class LinkedList
{constructor(){
this.head=null;
this.length=0;
}
unshift(data)
{
const newHead=new Node(data,this.head)
this.length++;
this.head=newHead;
}
getFirst(){
return this.head;
}
getLast(){
let currentNode = this.head;
while(currentNode && currentNode.next){
currentNode=currentNode.next;
}
return currentNode;
}
clear(){
	this.head=null;
	this.length=0;
}
shift(){
	if(!this.head)
	return ;
const oldhead = this.head;
this.head = oldhead.next;
this.length--;
return oldhead;
}
pop(){



}
}

*/
/*
class Node {
	constructor(data,next){
this.data=data;
this.next=next;
	}
}
class LinkedList{
	constructor(){
this.head=null;
this.length=0;
	}
unshift(data){
const newnode = new Node(data,this.head)
this.head=newnode;
this.length++;
}
getFirst(){
	return this.head;
}
getLast(){
let currentnode = this.head;

while(currentnode && currentnode.next)
{
	currentnode=currentnode.next;

}
return currentnode;
}
clear(){
this.head=null;
this.length=0;
}
shift()
{
	if(!this.head)
	return null;
const first = this.head;
this.head=first.next;
this.length--;
return first;
}
pop(){
if(this.length==1){
	return this.shift();
}
{
	if(this.head==null)
	return null;
}
const last = this.getLast();
var currentnode=this.head;
while(currentnode.next!==last){
	currentnode=currentnode.next;
}
currentnode.next=null;
this.length--;
return last;
}

push(data)
{
	if(!this.head){
		
		return this.unshift(data);
	}
let last = this.getLast();
 last.next=new Node(data,null);
 this.length++;
}
get(index){
let i;let last=this.getLast();
if(index<0||index>this.length){
	return null;
}
let current = this.head;
for(i=0;i<index;i++){
current=current.next;
}
return current;
}
set(index,data){
if(index<0 || index>this.length)
return false;
const node = this.get(index); 
node.data=data;
return true;
}
remove(index){
	if(index<0 || index>this.length)
return false;
if(index==0)
return this.shift();
	const prev = this.get(index-1);
	  const nodetoremove = this.get(index);
	  prev.next=prev.next.next;
	  this.length--;
	  return nodetoremove;
}
insert(index,data)
{
	
	if(index<0 || index>this.length)
	return false;
	if(index===0){
	this.unshift(data);
	return true;
	}
	const prev = this.get(index-1);const nodetoremove = this.get(index);
	prev.next = new Node(data,nodetoremove);

	this.length++;
	return true;


}
}

*/
class Node{
	constructor(data,next){
		this.data=data;
		this.next=next;
	}
}
class LinkedList{
	constructor(){
		this.head=null;
		this.length=0;
	}
unshift(data){
let cur=this.head;
this.head=new Node(data,cur)
this.length++;
}
getFirst(){
return this.head;
}
getLast(){
let cur=this.head;
if(!this.head)
return null;
while(cur.next)
{
cur=cur.next;
}
return cur;
}
clear(){
this.head=null;
this.length=0;
}
shift()
{
if(this.length===1)
{
let cur=this.head;
this.length=0;
this.head=null;
return cur;
}
let first=this.head;
while(first && first.next){
this.head=first.next;
this.length--;
return first;}
}
pop()
{
let cur=this.head;
if(this.length===1)
{
	let ele=this.head;
	this.head=null;
	this.length=0;
	return ele;
}
if(this.length==0){
	return null;
}
while(cur && cur.next)
{
	cur=cur.next;

}
this.length--;
return cur;
}
push(data){
	if(this.length==0)
	{
		this.unshift(data);
		return;
	}
let last= this.getLast();	
last.next=new Node(data,null);
this.length++;
}
get(index){
if(index<0 || index>this.length)
return null;
let cur=this.head;

for(let i=0;i<index;i++){
cur=cur.next
}
return cur;
}
set(index,data)
{
	if(index<0 || index>this.length)
return false;
let eletochange=this.get(index);
eletochange.data=data;
return true;
}
remove(index){
	if(index==0)
	{
		return this.shift();
	}
if(index<0 || index>this.length)
	return false;
	let ele=this.get(index);
let next1=this.get(index+1);
let prev = this.get(index-1);
prev.next=next1;
this.length--;
return ele;
}
insert(index,data){
if(index===0)
{
this.unshift(data);
return true;
}
{
	if(index<0 || index>this.length)
	return false;
let prev=this.get(index-1);
let next=this.get(index);
prev.next=new Node(data,next);
this.length++;
return true;




}

}}




// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/

mocha.setup('bdd');
const { assert } = chai;

describe('A Node', () => {
	it("has properties 'data' and 'next'", () => {
		const node = new Node(1, 2);
		assert.equal(node.data, 1);
		assert.equal(node.next, 2);
	});
});

describe('unshift(data)', () => {
	it('adds new node to start of list by correctly setting head and updating length.', () => {
		const l = new LinkedList();
		l.unshift('Kevin');
		assert.equal(l.head.data, 'Kevin');
		assert.equal(l.length, 1);
	});

	it('Does not overwrite old head.', () => {
		const l = new LinkedList();
		l.unshift('Kevin');
		assert.equal(l.head.data, 'Kevin');
		assert.equal(l.length, 1);

		l.unshift('eric');
		assert.equal(l.head.data, 'eric');
		assert.equal(l.head.next.data, 'Kevin');
		assert.equal(l.length, 2);
	});
});

describe('getFirst()', () => {
	it('returns the first node in linked list.', () => {
		const l = new LinkedList();
		assert.equal(l.getFirst(), null);
		l.unshift(1);
		assert.equal(l.getFirst().data, 1);
		l.unshift(2);
		assert.equal(l.getFirst().data, 2);
	});
});

describe('getLast()', () => {
	it('returns the last node in linked list.', () => {
		const l = new LinkedList();
		l.unshift(1);
		assert.equal(l.getLast().data, 1);
		l.unshift(2);
		assert.equal(l.getLast().data, 1);
	});
	it('does not crash AND returns null on empty list.', () => {
		const l = new LinkedList();
		assert.equal(l.getLast(), null);
	});
});

describe('clear()', () => {
	it('clears out the linked list and resets length to 0.', () => {
		const l = new LinkedList();
		assert.equal(l.length, 0);
		l.unshift(1);
		l.unshift(1);
		l.unshift(1);
		assert.equal(l.length, 3);
		l.clear();
		assert.equal(l.length, 0);
		assert.equal(l.head, null);
	});
});

describe('shift()', () => {
	it('removes AND returns first node, updates length for linked list w/ one node.', () => {
		const l = new LinkedList();
		l.unshift(1);
		assert.equal(l.shift().data, 1);
		assert.equal(l.length, 0);
		assert.equal(l.getFirst(), null);
	});
	it('removes the first node and returns it, decreases length of list.', () => {
		const l = new LinkedList();
		l.unshift(3);
		l.unshift(2);
		l.unshift(1);
		assert.equal(l.shift().data, 1);
		assert.equal(l.length, 2);
		assert.equal(l.getFirst().data, 2);
		assert.equal(l.shift().data, 2);
		assert.equal(l.length, 1);
		assert.equal(l.getFirst().data, 3);
	});
	it('does not crash AND returns null on empty list. Does not decrease length.', () => {
		const l = new LinkedList();
		assert.equal(l.shift(), null);
		assert.equal(l.length, 0);
	});
});

describe('pop()', () => {
	it('removes AND returns last node, decreases length.', () => {
		const l = new LinkedList();
		l.unshift('b');
		l.unshift('a');
		assert.equal(l.pop().data, 'b');
		assert.equal(l.length, 1);
		assert.equal(l.head.data, 'a');
	});
	it('removes AND returns last node, decreases length on linked-list w/ one node.', () => {
		const l = new LinkedList();
		l.unshift(1);
		assert.equal(l.pop().data, 1);
		assert.equal(l.head, null);
		assert.equal(l.length, 0);
	});
	it('Returns null on empty list AND does not decrease length.', () => {
		const l = new LinkedList();
		assert.equal(l.pop(), null);
		assert.equal(l.length, 0);
	});
});

describe('push(data)', () => {
	it('adds to the end of the list and increases length.', () => {
		const l = new LinkedList();
		l.unshift(1);
		l.push(2);
		assert.equal(l.length, 2);
		assert.equal(l.getLast().data, 2);
	});
	it('adds to end of empty list and increases length without crashing.', () => {
		const l = new LinkedList();
		l.push(1);
		assert.equal(l.length, 1);
		assert.equal(l.getLast().data, 1);
		assert.equal(l.getFirst().data, 1);
	});
});

describe('get(index)', () => {
	it('returns null on negative or out of bounds index.', () => {
		const l = new LinkedList();
		l.push('Kevin');
		assert.equal(l.get(-1), null);
		assert.equal(l.get(100), null);
	});
	it('returns the node at given index.', () => {
		const l = new LinkedList();
		l.push('Kevin');
		l.push('is');
		l.push('kewl');

		assert.equal(l.get(0).data, 'Kevin');
		assert.equal(l.get(1).data, 'is');
		assert.equal(l.get(2).data, 'kewl');
	});
});

describe('set(index, data)', () => {
	it('returns falsy value on out of bounds or negative index.', () => {
		const l = new LinkedList();
		l.push(2);
		assert.isNotOk(l.set(-1, 'meow'));
		assert.isNotOk(l.set(100, 'meow'));
	});
	it('Updates node and returns true.', () => {
		const l = new LinkedList();
		l.push(2);
		l.push(4);
		assert.equal(l.set(1, 'meow'), true);
		assert.equal(l.getLast().data, 'meow');
	});
});

describe('remove(index)', () => {
	it('returns falsy value on out of bounds OR negative index.', () => {
		const l = new LinkedList();
		l.push(2);
		assert.isNotOk(l.remove(-1));
		assert.isNotOk(l.remove(100));
	});
	it('removes and returns node at given index. Decreases length.', () => {
		const l = new LinkedList();
		l.push(1);
		l.push(2);
		l.push(3);
		l.push(4);

		assert.equal(l.get(3).data, 4);
		assert.equal(l.remove(3).data, 4);
		assert.isNotOk(l.get(3));
		assert.equal(l.length, 3);
	});
	it('removes node at index 0, decreases length, and returns removed node.', () => {
		const l = new LinkedList();
		l.push(1);
		l.push(2);
		l.push(3);
		l.push(4);

		assert.equal(l.get(0).data, 1);
		assert.equal(l.remove(0).data, 1);
		assert.equal(l.get(0).data, 2);
		assert.equal(l.length, 3);
	});
});

describe('insert(index, data)', () => {
	it('returns false on index greater than length or negative index.', () => {
		const l = new LinkedList();
		assert.equal(l.insert(1, 'meow'), false);
		assert.equal(l.insert(-10, 'meow'), false);
		assert.equal(l.length, 0);
	});
	it('inserts new node at given index, increases length, and returns true.', () => {
		const l = new LinkedList();
		l.push(1);
		l.push(2);
		l.push(3);
		l.push(4);
		assert.equal(l.insert(2, 'kevin'), true);
		assert.equal(l.get(0).data, 1);
		assert.equal(l.get(1).data, 2);
		assert.equal(l.get(2).data, 'kevin');
		assert.equal(l.get(3).data, 3);
		assert.equal(l.get(4).data, 4);
		assert.equal(l.length, 5);
	});
	it('inserts node at 0 index correctly, increases length, returns true.', () => {
		const l = new LinkedList();
		l.push(1);
		l.push(2);
		l.push(3);
		assert.equal(l.insert(0, 'kevin'), true);
		assert.equal(l.get(0).data, 'kevin');
		assert.equal(l.get(1).data, 1);
		assert.equal(l.get(2).data, 2);
		assert.equal(l.get(3).data, 3);
		assert.equal(l.length, 4);
	});
});

mocha.run();
