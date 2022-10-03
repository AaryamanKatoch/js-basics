var str; let array =[]; let reversearray =[]; let reversed; let i=0; let negreversed;
function reverseInt(n) {
str = n.toString();
array = str.split("");
i= array.length-1;
while(array[i]==0 )
{
array.pop();
i--;
}
if(n>0)
{
    reversearray = array.reverse();
    reversed = reversearray.join("")
    console.log(reversed);  
}
if(n<0)
{
array.splice(0,1);
reversearray = array.reverse();
reversed= reversearray.join("");
negreversed = "-" + reversed;
console.log(negreversed);

}

}
reverseInt(-1010);