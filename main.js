objects="";
percentage=0;
status="";
function setup()
{
    canvas=createCanvas(420,320);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video,0,0,420,320);
    if(status != "")
    {
    objectDetector.detect(video,gotResult);
        
    for(i=0;i<objects.length;i++)
{
percentage=floor(objects[i].confidence*100);
fill("#FF0000");
stroke("#FF0000");
noFill();
rect(objects[i].x,objects[i].y,275,275);
stroke("#FF0000");
text(objects[i].label+""+percentage,objects[i].x,objects[i].y)
main_object=document.getElementById("input").value;

document.getElementById("status").innerHTML="Objects Are Detected";
document.getElementById("objects_detected").innerHTML="Objects Are Detected";
if(objects[i].label == main_object)
{
    var synth=window.speechSynthesis;

    speak_data="Main Object Detected "

    var utterthis=new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterthis);
}else{
    var synth=window.speechSynthesis;

    speak_data="Main Object Not Detected "

    var utterthis=new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterthis);
}
}

    }


}
function start()
{
objectDetector=ml5.objectDetector("cocossd",modelLoaded);

}
function modelLoaded()
{
    console.log("Model Loaded");
    status="true"
}


function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }else{
        console.log(results);
        objects=results;
    }
}
