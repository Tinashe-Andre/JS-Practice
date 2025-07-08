function count(){
    var input = document.getElementById("inputText").value;
    var words = input.trim().split(/\s+/);
    var wordCount = words.filter(function(word) {
        return word.length > 0; // Filter out empty strings
    }).length;
    
    document.getElementById("wordCount").innerText = "Word Count: " + wordCount;
}