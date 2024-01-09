let WordCount = 0;
let LettersCount = 0;
let LineCount = 0;

document.getElementsByTagName('button')[0].addEventListener('click', () => {
    let text = document.getElementById('textarea').value

    let i = 0;
    let j = 0;
    while (i < text.length) {
        if (text[i] == ' ') {
            i++;
        }
        else if (text[i] == '\n') {
            LineCount++;
            i++;
        }
        else {
            WordCount++;
            console.log(text[i]);
            j = i;
            while (j < text.length && text[j] != ' ' && text[j] != '\n') {
                LettersCount++;
                j++;
            }
            i = j;
        }

    }
let childElement  = document.createElement('h2');
childElement.innerText = `WordCount-${WordCount} LetterCount-${LettersCount} LineCount-${LettersCount&&LineCount+1}`
document.querySelector('.container_2').appendChild(childElement);
//document.getElementById('textarea').value = ''
setTimeout(()=>{
    location.reload();
},4000)

})











