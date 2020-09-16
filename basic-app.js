 const inputWord = document.getElementById('kata');
 const btnCheck = document.getElementById('palindrome');
 const alertPalindrome = document.getElementById('alert-palindrome');
 
 function isPalindrome () {
    let wordValue = inputWord.value;
    let toUppercaseWord = wordValue.toUpperCase();
    let character = toUppercaseWord.split('');
    let first = character.shift();
    let last = character.pop();

    if (first !== last) {
        return alert('Not Palindrome');
    }else {
        return alert('Palindrome');
    }

 }
 btnCheck.addEventListener("click",isPalindrome);