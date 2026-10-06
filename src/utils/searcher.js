export function find(targetId, idArray, detailArray) {
  let left = 0;
  let right = idArray.length - 1;
  let log = []; 

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let currentId = idArray[mid];

    log.push(`Checking index ${mid}: ID is ${currentId}`);

    if (currentId === targetId) {
      log.push(`Success! Found ID ${targetId} at index ${mid}.`);
      
      return {
        found: true,
        index: mid,
        data: detailArray[mid], 
        log: log
      };
    }

    if (currentId < targetId) {
      log.push(`${currentId} is smaller than target ${targetId}. Searching right half...`);
      left = mid + 1;
    } 
  
    else {
      log.push(`${currentId} is larger than target ${targetId}. Searching left half...`);
      right = mid - 1;
    }
  }

  log.push(`ID ${targetId} was not found in the database.`);
  
  return {
    found: false,
    index: -1,
    data: null,
    log: log
  };
}
