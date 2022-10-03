// Write a function that returns the provided string with
// the first letter of each word capitalized. Make sure the
// rest of the word is in lower case.
// --- Examples
//   capitalize("I'm a little tea pot") --> 'I'm A Little Tea Pot'
//   capitalize('sHoRt AnD sToUt') --> 'Short And Stout'

function capitalize(str) {
  let array =[]; 
array=str.split(" ");
let sol="";
let casedarray=[];
for(i=0;i<array.length;i++)
{
  
word=array[i];
casedarray.push(word[0].toUpperCase()+word.slice(1).toLowerCase());
sol = casedarray.join(" ");
}
return sol;
}















//let array =[]; let casedarray =[];
//array=str.split(" ");
//for(i=0;i<array.length;i++)
//{
 // const word= array[i];
  //casedarray.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
//}
//casedarray = casedarray.join(" ");
//return casedarray;/
//}

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
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("Capitalization", () => {
  it("capitalizes the first letter of each word", () => {
    assert.equal(capitalize("I'm a little tea pot"), "I'm A Little Tea Pot");
  });
  it("lowercases the rest of the word", () => {
    assert.equal(capitalize("sHoRt AnD sToUt"), "Short And Stout");
  });
});

mocha.run();
