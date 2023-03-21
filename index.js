const name = document.querySelector('.name');
const image = document.querySelector('.image');
const comment = document.querySelector('.comment');
const userImage = document.querySelector('.user__image');
const userName = document.querySelector('.user__name');
const userComment = document.querySelector('.user__comment');
const userTime = document.querySelector('.user__date-time');
const dateTime = new Date();
const radio = document.querySelector('.notShow');
const wrapper = document.querySelector('.user');

function getImage() {
    const defaultAvatar = [
        "img/img1.png",
        "img/img2.jpg",
        "img/img3.jpg",
        "img/img4.png",
        "img/img5.png"
    ];
    const randomAvatar = defaultAvatar[Math.floor(Math.random() * defaultAvatar.length)];
    return randomAvatar;
}


function checkSpam(str) {
    return str.replace(/viagra|xxx/gi, '***');
}

function sendMessage() {
    userName.textContent = name.value.trim().toLowerCase().replace(/(^|\s)\S/g, chr => chr.toUpperCase());
    userImage.setAttribute('src', image.value);
    userComment.textContent = checkSpam(comment.value);

    const dateTime = new Date();
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth();
    const date = dateTime.getDate();
    const hour = dateTime.getHours();
    const min = dateTime.getMinutes();
    const time = date + '.' + month + '.' + year + ' ' + hour + ':' + min;
    userTime.textContent = time;

    if (radio.checked) {
        userName.textContent = "Username";
    }

    let post = document.createElement('div');
    post.classList.add('post-item');
    wrapper.append(post);

    let container = document.createElement('div');
    container.classList.add('container');
    post.append(container);

    const messageAvatar = document.createElement('img');
    if (image.value !== '' && image.value.includes(".jpg") || image.value.includes(".png")) {
        messageAvatar.setAttribute('src', image.value);
    } else {
        messageAvatar.setAttribute('src', getImage());
    }
    container.append(messageAvatar);
}