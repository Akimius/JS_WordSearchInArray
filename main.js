var entryText = prompt("Enter some text","This is A TEXT to Find a WorD in it");
var entryWord = prompt("Enter a word to search","find");

entryText = entryText.toLocaleLowerCase();
entryWord = entryWord.toLocaleLowerCase();

var entryArray = entryText.split(" ");


for (i = 0; i < entryArray.length; i++) {
    
    if (entryArray[i] == entryWord) {
        console.log("The text : '" + entryText + "' contains the word '" + entryWord + "'.");
    }    
}




/*for (i = 0; i < entryArray.length; i++) {
    
    if (entryArray[i] !== entryWord) {
        console.log("There is NO such word as '" + entryWord + "' in this text '" + entryText + "'.");
    }  
}*/
