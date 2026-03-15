function getVideoID(url){

let regExp = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&]+)/;
let match = url.match(regExp);

return match ? match[1] : null;

}

function generateClips(){

let url=document.getElementById("videoURL").value;
let videoID=getVideoID(url);

if(!videoID){
alert("Invalid YouTube link");
return;
}

let container=document.getElementById("player");

container.innerHTML="";

for(let i=0;i<5;i++){

let start=i*30;
let end=start+30;

let clip=`
<div style="margin:30px">

<h3>Clip ${i+1}</h3>

<iframe width="400" height="225"
src="https://www.youtube.com/embed/${videoID}?start=${start}&end=${end}"
frameborder="0"
allowfullscreen></iframe>

</div>
`;

container.innerHTML+=clip;

}

}
