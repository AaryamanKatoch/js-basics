function reverse(str) {
	var array =[]; var reversed1 ; var reversed_array=[];
	
	array = str.split("");
    for(i=0;i<str.length;i++)
    {
    reversed_array.push(array.pop());
    }
   


    console.log(reversed_array);


}
reverse('atpk')