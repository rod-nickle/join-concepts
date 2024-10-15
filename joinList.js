/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

const joinList = function(conceptsArr) {
  // Return the smallest value in numbers array.
  let concepts = "";

  for (let i = 0; i < conceptsArr.length; i++) {
    concepts += conceptsArr[i];
    if (i < (conceptsArr.length - 1)) {
      // Only add the comma separator if we are NOT at the end of the array.
      concepts += ", ";
    }
  }
  return concepts;
};

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log('Today I learned about', concepts);

const conceptList2 = ["gists"];
const concepts2 = joinList(conceptList2);
console.log('Today I learned about', concepts2);

const conceptList3 = [];
const concepts3 = joinList(conceptList3);
console.log('Today I learned about', concepts3);
