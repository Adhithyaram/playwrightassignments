function reverseString(inputString) {
    let originalString = ""
    let reversedString = ""
    originalString = inputString
    for (let index = originalString.length - 1; index >= 0; index--) {
        let readChar = originalString.charAt(index)
        reversedString = `${reversedString}${readChar}`
    }
    console.log(`original string is ${originalString}`);
    console.log(`reversed string is ${reversedString}`);

    palindromeCheck(originalString, reversedString)
    // palindromeCheck(originalString, "nonmatch")
}

function palindromeCheck(origString, revString) {
    let matchCount = 0;
    for (let origIndex = 0, revIndex = revString.length - 1; origIndex < origString.length && revIndex >= 0; origIndex++, revIndex--) {
        origChar = origString.charAt(origIndex)
        revChar = revString.charAt(revIndex)
        if (origChar === revChar)
            matchCount++
    }
    if ((matchCount === origString.length) && (matchCount === revString.length))
        console.log(`${revString} is a palindrome of ${origString}`);
    else
        console.log(`${revString} is not a palindrome of ${origString}`);
}

reverseString("home-assignment")