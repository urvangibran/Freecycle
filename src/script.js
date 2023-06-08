var counter = 1;
setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    const counterPicture = document.getElementById("countPic");
    counterPicture.textContent = '0' + counter;
    counter++;
    if (counter > 5)
        counter = 1;
}, 3000);
