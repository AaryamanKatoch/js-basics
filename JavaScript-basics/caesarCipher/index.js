// Given a phrase, substitute each character by shifting it up
// the alphabet by a given integer. If necessary, the shifting
// should wrap around back to the beginning of the alphabet.
// Make sure the function only shifts letters.
// --- Examples
// caeserCipher("abcd", 1) === "bcde";
// caeserCipher("yz", 1) === "za";
// caeserCipher("abcd", 100) === "wxyz";
// caeserCipher("gurer ner 9 qbtf!", 13) === "there are 9 dogs!"

function caesarCipher(str, shift) {
let alphabets= "abcdefghijklmnopqrstuvwxyz";
let arrayalphabets = alphabets.split("");
let res ="";
for(i=0;i<str.length;i++)
{
  let char = str[i];
  let index= arrayalphabets.indexOf(char);
  if(index===-1)
  {
    res += char;
    continue;
  }
  let idx= (index+shift)%26;
res += arrayalphabets[idx];


}


return res;




}





//et all="abcdefghijklmnopqrstuvwxyz";
//let array = all.split("");
//let res=""
//for(i=0;i<str.length;i++)
//{
//char=str[i];
//let index= array.indexOf(char);
//if(index===(-1))
//{
//res +=char;
//continue;
//}
//let idx= (index+shift)%26;


//res+=array[idx];



//}
//return res;













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

describe("caesarCipher()", () => {
  it("shifts letters correctly.", () => {
    assert.equal(caesarCipher("abcd", 1), "bcde");
    assert.equal(caesarCipher("yz", 1), "za");
    assert.equal(caesarCipher("abcd", 100), "wxyz");
  });
  it("does not shift digits or other characters such as '!'.", () => {
    assert.equal(caesarCipher("gurer ner 9 qbtf!", 13), "there are 9 dogs!");
  });
});

mocha.run();
