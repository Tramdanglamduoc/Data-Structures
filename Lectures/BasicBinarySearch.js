// linear search example 1 / (“Found”) and (“not Found”) based on linear search algorithm

// Linear search takes an array and a target value.
// Linear search searches target value from the beginning to until target value found.
// It returns undefined if target value does not exist in that array

//  we have number of items
const items = [2, 5, 3, 6, 7, 10, 34, 63, 20, 14];

// the number we are looking for
const item = 10;

function searchItem() {
 //go over the number of items
 for (let i = 0; i < items.length; i++) {
  //if found,print found
  if (items[i] == item) {
   console.log(`Item is found, it is ${items[i]}`);
  } else {
   //   print not found, if not found
   console.log('Item not found!');
  }
 }
}

searchItem();



// linear search example 2 /  loop over each element in the array, and check to see if the current element is equal to the target

function linearSearch(arr, target) {
  for (let i in arr) {
    if (arr[i] === target) return i
  }
  return -1
}
console.log(linearSearch([1, 2, 3, 4], 1)) // 0
console.log(linearSearch([1, 2, 3, 4], 4)) // 3
console.log(linearSearch([1, 2, 3, 4], 6)) // -1
console.log(linearSearch([3, 4, 1, 6, 3], 6)) // 3


// Binary search example 1 / divide and conque

/*
Binary Search: Example implementation.
Receives an ordered array and the element to search for. If you find the element
will return the index of the element found, if not found it will return `-1`.
*/


function binarySearch(array, item) {

    function recurse(min, max) {
  
      if (min > max) {
        return -1;
      }
  
      var middle = Math.floor((min + max) / 2);
  
      if (array[middle] === item) {
        return middle;
      }
  
      if (array[middle] > item) {
        return recurse(min, middle - 1);
      }
  
      return recurse(middle + 1, max);
    }
  
    return recurse(0, array.length - 1);
  }
  
  
  console.log(binarySearch([1, 2, 3, 4, 6, 8, 9], 8)); // 5
  console.log(binarySearch([1, 2, 3, 4, 6, 8, 9], 7)); // -1
  console.log(binarySearch([1, 2, 3, 4, 6, 8, 9], 9)); // 6
  console.log(binarySearch([1], 0)); // -1


// Binary search example 2 / divide and conque

// Binary search find the middel root value in given array elements

const sortedArray = [1,3,5,5,7,8,11,12,14,14,15,16,16,17,17,17,17,18,19,19,19];

const bs = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let tries = 1;

while(start <= end){
  console.log("TRY NUMBER ", tries);

    let middle = Math.floor((start + end)/ 2);

        console.log("end is ", end)
        console.log("start is ", start)
        console.log(`looking now at position ${middle} where the value is ${arr[middle]}`)
        console.log("\n")

      if(arr[middle] === target){
        console.log("found the target at this location!! : ", arr[middle]);
        return true;
      }
      else if(arr[middle] > target){
        console.log("target is smaller than the midpoint so next look to the left half of the array" )
        end = middle-1
      }
      else{
        console.log("target is bigger than the midpoint so next look to the right half of the array" );
        start = middle+1;
    }
            tries ++;
  }
  return false

}

bs(sortedArray, 18)



 