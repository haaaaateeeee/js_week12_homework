let name = document.querySelector('.name');
let image = document.querySelector('.image');
let comment = document.querySelector('.comment');
let userImage = document.querySelector('.user__image');
let userName = document.querySelector('.user__name');
let userComment = document.querySelector('.user__comment');
let userTime = document.querySelector('.user__date-time');
let dateTime = new Date();
let radio = document.querySelector('.notShow');

const defaultAvatar = [
    "img1.png",
    "img2.jpg",
    "img3.jpg",
    "img4.png",
    "img5.png"
];


function checkSpam(str) {
    return str.replace(/viagra|xxx/gi, '***');
}

function sendMessage() {
    userName.textContent = name.value.trim().toLowerCase().replace(/(^|\s)\S/g, chr => chr.toUpperCase());
    userImage.setAttribute('src', image.value);
    userComment.textContent = checkSpam(comment.value);

    if (radio.checked) {
        name = "Username";
    }

    let avatar = image.value;
    if (avatar === "") {
        let randomAvatar = defaultAvatar[Math.floor(Math.random() * defaultAvatar.length)];
        avatar = randomAvatar;
    }
}

function showTime() {
    const dateTime = new Date();
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth();
    const date = dateTime.getDate();
    const hour = dateTime.getHours();
    const min = dateTime.getMinutes();
    const time = date + '.' + month + '.' + year + ' ' + hour + ':' + min;
    userTime.textContent = time;
}