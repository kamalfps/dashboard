function getVideoID(url){

let regExp = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&]+)/;
let match = url.match(regExp);

return match ? match[1] : null;

}

function generateClips(){

let url=document.getElementById("videoURL").value;
let videoID=getVideoID(url);

if(!videoID){
alert("Invalid link");
return;
}

let container=document.getElementById("player");

container.innerHTML="";

let clips=[10,45,90,150,210]; // automatic timestamps

clips.forEach((time,i)=>{

let clip=`

<div style="margin:25px">

<h3>Auto Clip ${i+1}</h3>

<iframe width="420" height="236"
src="https://www.youtube.com/embed/${videoID}?start=${time}&autoplay=0"
frameborder="0"
allowfullscreen>
</iframe>

</div>

`;

container.innerHTML+=clip;

});

}
