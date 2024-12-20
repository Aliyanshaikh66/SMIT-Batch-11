// Bold button
document.getElementById('bold').addEventListener('click', function() {
    document.execCommand('bold');
});

// Italic button
document.getElementById('italic').addEventListener('click', function() {
    document.execCommand('italic');
});

// Underline button
document.getElementById('underline').addEventListener('click', function() {
    document.execCommand('underline');
});

// Text alignment buttons
document.getElementById('align-left').addEventListener('click', function() {
    document.execCommand('justifyLeft');
});

document.getElementById('align-center').addEventListener('click', function() {
    document.execCommand('justifyCenter');
});

document.getElementById('align-right').addEventListener('click', function() {
    document.execCommand('justifyRight');
});

// Font size change
document.getElementById('font-size').addEventListener('change', function() {
    let size = this.value;
    document.execCommand('fontSize', false, size);
});

// Clear the editor
document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('editor').innerHTML = '';
});
