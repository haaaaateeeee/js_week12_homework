let name = document.querySelector('.name');
let image = document.querySelector('.image');
let comment = document.querySelector('.comment');
let userImage = document.querySelector('.user__image');
let userName = document.querySelector('.user__name');
let userComment = document.querySelector('.user__comment');

function checkSpam(str) {
    return str.replace(/viagra|xxx/gi, '***');
}

function sendMessage() {
    userName.textContent = name.value.trim().toLowerCase().replace(/(^|\s)\S/g, chr => chr.toUpperCase());
    userImage.setAttribute('src', image.value);
    userComment.textContent = checkSpam(comment.value);
}