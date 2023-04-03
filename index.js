function isPalindrome(word) {
  // Write your algorithm here
  //iterate from the beginning to the middle
  for(let i=0; i<word.length/2; i++){
   //check each letter to the corresponding letter fro the end
   const j = word.length -1-i;
   const startChar =word(i);
   const endChar =word(j);
   // if any letters dont match,return false;
   if (starChar !==endChar) return false;
  }
}

/* 
  Add your pseudocode here
  that means if the first letter is the same as the last letter, and the second letter is the same as the second to last letter,etc. until we reach the middle, return true;
  iterate from beginng to the middle
  check each letter to correspondig letter fro the end
  if any letter don't match, return false;
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
