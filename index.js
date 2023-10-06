function hasTargetSum(array, target) {
    const seenNumbers = new Set();
  
    for (const num of array) {
      const complement = target - num;
  
      // If the complement (number needed to reach the target) is in the set, return true
      if (seenNumbers.has(complement)) {
        return true;
      }
  
      // Otherwise, add the current number to the set
      seenNumbers.add(num);
    }
  
    // If no pair was found, return false
    return false;
  }
  
  /*function hasTargetSum(array, target):
  Initialize an empty set called seenNumbers
  For each num in array:
      Calculate the complement (target - num)
      If complement is in seenNumbers:
          Return true
      Add num to seenNumbers
  Return false*/
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
