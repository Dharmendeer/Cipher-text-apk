document.getElementById('encodeButton').addEventListener('click', () => {
    const text = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);
    const encodedText = caesarCipher(text, shift);
    document.getElementById('outputText').value = encodedText;
});

document.getElementById('decodeButton').addEventListener('click', () => {
    const text = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);
    const decodedText = caesarCipher(text, -shift);
    document.getElementById('outputText').value = decodedText;
});

function caesarCipher(str, shift) {
    return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt();
            const lower = (char === char.toLowerCase()) ? 97 : 65;
            return String.fromCharCode(((code - lower + shift) % 26) + lower);
        }
        return char;
    }).join('');
}
