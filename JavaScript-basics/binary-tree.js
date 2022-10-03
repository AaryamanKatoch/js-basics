class Node{
    constructor(val){
        this.val=val;
        this.right=null;
        this.left=null;
    }
}

const a =new Node('a');
const b =new Node('b');
const c =new Node('c');
const d =new Node('d');
const e =new Node('e');
const f =new Node('f');
a.left =b;
a.right=c;
b.left=d;
b.right=e;
c.right=f;
 
function depthfirstvalues(root){let res=[];
 /*   if(root===null) return [];
    const stack=[root];
while(stack.length>0){
    const current = stack.pop();
  res.push(current.val);
  if(current.left)
  stack.push(current.left);
  if(current.right)
  stack.push(current.right)
} return res; */

if(root===null) return [];
const left = depthfirstvalues(root.left);
const right = depthfirstvalues(root.right);
return [root.val,...left,...right];


}
// depthfirstvalues(a);


 function breadthfirstvalues(root){
let res=[];
if(root===null) return [];
const queue=[root];
while(queue.length>0){
    const current = queue.shift();
    res.push(current.val);
 if(current.left!=null)
 queue.push(current.left);
 if(current.right!=null)
 queue.push(current.right)
}
console.log( res);
 }

 function findbybreadth(root,va)
 {
let queue=[root];
if(root===null) return false;
while(queue.length>0){
    const current=queue.shift();
    if(current.val===va)
    return true;
if(current.left!=null)
queue.push(current.left);
if(current.right!=null)
queue.push(current.right)
}
return false;
 }
 console.log(findbybreadth(a,'g'))
    




 