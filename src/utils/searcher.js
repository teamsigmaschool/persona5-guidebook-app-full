/**
 * BINARY SEARCH FUNCTION (For Parallel Arrays)
 * 
 * Target: Find a card by its ID using Binary Search.
 * 
 * Parameters:
 *  - targetId: The ID number we are searching for (e.g. 105)
 *  - idArray: Sorted array of card IDs [101, 102, 103, ...]
 *  - detailArray: Parallel array containing card details matching each ID
 */
export function find(targetId, idArray, detailArray) {
  // Step 1: Set up starting bounds (pointers)
  let left = 0;
  let right = idArray.length - 1;
  let log = []; // Stores step-by-step logs for students to trace

  // Step 2: Loop while search range is valid
  while (left <= right) {
    // Step 3: Find middle index
    let mid = Math.floor((left + right) / 2);
    let currentId = idArray[mid];

    log.push(`Checking index ${mid}: ID is ${currentId}`);

    // Case A: Found the target ID!
    if (currentId === targetId) {
      log.push(`Success! Found ID ${targetId} at index ${mid}.`);
      
      return {
        found: true,
        index: mid,
        data: detailArray[mid], // Retrieve matching card from parallel array
        log: log
      };
    }

    // Case B: Target ID is larger -> Search right half
    if (currentId < targetId) {
      log.push(`${currentId} is smaller than target ${targetId}. Searching right half...`);
      left = mid + 1;
    } 
    // Case C: Target ID is smaller -> Search left half
    else {
      log.push(`${currentId} is larger than target ${targetId}. Searching left half...`);
      right = mid - 1;
    }
  }

  // Step 4: Target not found
  log.push(`ID ${targetId} was not found in the database.`);
  
  return {
    found: false,
    index: -1,
    data: null,
    log: log
  };
}
