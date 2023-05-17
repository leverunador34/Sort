function sortByName(arr) {
  const numberWords = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];
  
  function compareNumbers(a, b) {
    const nameA = numberWords[a];
    const nameB = numberWords[b];
    return nameA.localeCompare(nameB);
  }
  
  return arr.sort(compareNumbers);
}

// Example usage:
const numbers = [1, 2, 3, 4];
const sortedNumbers = sortByName(numbers);
console.log(sortedNumbers); // Output: [4, 1, 3, 2]
