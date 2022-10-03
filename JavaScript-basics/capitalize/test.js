
function capitalize(str) {
 let array =[]; let capitarray =[];
 array = str.split(" ");

 for(i=0;i<array.length;i++)
 {
const word = array[i];
capitarray.push(word[0].toUpperCase()+ word.slice(1).toLowerCase());
}
console.log(capitarray.join(" "));

}


capitalize('iam dope');