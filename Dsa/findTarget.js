let arr  = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

let start = 0;
let end = arr.length-1;
while(start<=end){
    let mid = Math.floor(start+end)
    if(arr[mid]==target){
        console.log(mid)
        return
    }else if(arr[mid]<target){
        start = mid+1
    }else{
        end = mid-1
    }
}
console.log(-1)