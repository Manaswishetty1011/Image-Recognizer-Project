//https://teachablemachine.withgoogle.com/models/makFumvva/model.json

Webcam.set({
    width:"300",
    height:"350",
    image_format : "png",
    png_quality: 90
    });
    camera=document.getElementById("camera").value;
    Webcam.attach("#camera")

    function takesnapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML="<img id='image'src="+ data_uri + ">"
        })
    }
    
function modelLoaded() {
    console.log("Model Loaded !")
}
console.log('ml5 version :',ml5.version);

function check(){
    img = document.getElementById("image");
    classifier.classify(img, gotresults)
}
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/o2hv3h-Sp/model.json",modelLoaded)
function gotresults(error,results){
    if(error){
    console.log(error)
    }
    else{
        console.log(results)
        document.getElementById("result_object_name").innerHTML=results[0].label
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3)
    }
}
