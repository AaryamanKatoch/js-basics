
function iteminCommon(arr1,arr2){
let countobj={};
for(i=0;i<arr1.length;i++)
{
  countobj[arr1[i]]=true;
}

for(j=0;j<arr2.length;j++)
{
if(countobj[arr2[j]])
return true;
}
return false;
}
arr1=[9,3,6];
arr2=[1,4,5];
console.log(iteminCommon(arr1,arr2));