function linearSearch(arr,target) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i
    } else {
      return -1;
    }
  }
}
linearSearch([1,2,3,4,5,6], 5)

//Linear Search is used in a bunch of built in methods link .indexOf, /includes.

//Main thing is we are going to each node and checking if it is the value we are searching for.
//Linear Search is not fast but if we need a simple way to check if vaulue is there and the list is not orginized this is a solid way.

