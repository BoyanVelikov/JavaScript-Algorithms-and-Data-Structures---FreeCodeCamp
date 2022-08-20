function reverseString(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
      arr.push(str[i]);
    }
    let newArr = arr.reverse();
    return newArr.join('');
  }
  
  reverseString("hello");