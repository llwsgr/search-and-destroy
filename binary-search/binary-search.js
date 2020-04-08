'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let midIndex = Math.floor(array.length/2);
	let midValue = array[midIndex];
	if(target < midValue){
		array = array.slice(0, midIndex);
		if(array.length ===1){
			if(array[0]=== target) return true;
		} else{
			binarySearch(array, target);
		}
	} else {
		array = array.slice(midIndex);
		if(array.length ===1){
			if(array[0]=== target) return true;
		} else{
			binarySearch(array, target);
		}
	}
	return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
