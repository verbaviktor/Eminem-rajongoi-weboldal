
function changeBg() {
    const images = [
        'url("kepek/wallpaperflare.com_wallpaper.jpg")',
        'url("kepek/wallpaper 2.jpg")',
    ]
    const header = document.querySelector('header');
    const bg = images[Math.floor(Math.random() * images.length)];
    header.style.backgroundImage = bg;
}
setInterval(changeBg(), 1000);
