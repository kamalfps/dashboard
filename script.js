function getVideoID(url){

let regExp = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&]+)/;
let match = url.match(regExp);

return match ? match[1] : null;
}

function generateClip(){

let url = document.getElementById("videoURL").value;
let start = document.getElementById("startTime").value;
let end = document.getElementById("endTime").value;

let videoID = getVideoID(url);

if(!videoID){
alert("Invalid YouTube link");
return;
}

let embed = `
<iframe width="560" height="315"
src="https://www.youtube.com/embed/${videoID}?start=${start}&end=${end}"
frameborder="0"
allowfullscreen>
</iframe>
`;

document.getElementById("player").innerHTML = embed;

document.getElementById("downloadBtn").style.display="inline-block";
}

function downloadClip(){

alert("Download feature will require server processing (coming soon).");

}
