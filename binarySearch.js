const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

const findPosition = (list, num) => {
    let low = 0;
    let high = list.length-1;
    
    console.log(list)
    

    while (low <= high) {
        let mid = Math.floor((low + high) /2);
        let guess = list[mid];
        console.log(low, high, mid, guess)
        if(guess == num){
            console.log('found it','M:', mid, "G:", guess)
            return
        } else if(guess < num) {
            console.log('less')
            low = mid + 1
        } else {
            console.log('higher')
            high = mid - 1
        }
    }
   
    return 'none'
} 

findPosition(list, 22);