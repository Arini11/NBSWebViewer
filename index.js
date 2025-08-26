let input_songFile = document.getElementById("input_songFile");
let fileInfo = document.getElementById("fileInfo");
let fileName = document.getElementById("fileName");
let fileSize = document.getElementById("fileSize");
let fileType = document.getElementById("fileType");
let songInfo = document.getElementById("songInfo");

const song = null;

input_songFile.addEventListener("change", () => {   

    fileInfo.style.visibility = "visible";
    fileName.textContent = "File Name: " + input_songFile.files[0].name;
    fileSize.textContent = "File Size: " + (input_songFile.files[0].size / 1024).toFixed(2) + " KB";

    input_songFile.files[0].arrayBuffer()
    .then(buffer => {
        loadSongToMemory(buffer)
        .then(song => {
            console.log("Song loaded successfully");
            console.log(song);
            this.song = song;
            displaySongInfo(song);
        })
    });
});

function loadSongToMemory(buffer) {
    return new Promise((resolve) => {
        resolve(NBSjs.fromArrayBuffer(buffer))
    });
}

function displaySongInfo(song) {
    songInfo.style.visibility = "visible";
}
