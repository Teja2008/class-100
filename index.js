var SpeechRecognition=window.webkitSpeechRecognition
var Recognition= new SpeechRecognition()

function start(){
document.getElementById("textbox").innerHTML=""
Recognition.start()
}
Recognition.onresult=function(event){
    console.log(event)
    var content= event.results[0][0].transcript
    document.getElementById("textbox").innerHTML= content
    console.log(content)
    if(content=="take my selfie"){
    console.log("take my selfie")
    speak()
}
}

Webcam.attach(camera)

function speak() {
    var synth = window.speechSynthesis;

    speak_data = "taking your selfie in five seconds"

    var utterThis = new SpeechSynthesisUtterance(speak_data)

    synth.speak(utterThis)


    setTimeout(function ( ){
take_snapshot()
save()




    },5000)
}

camera = document.getElementById("camera")

webcam.set({
    width: 360,
    height: 250,
    image_format : 'png' ,
    png_quality: 90
})
 

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ='<img id="selfie_image" src="' + data_uri + '">'
        console.log(data_uri)
    })
}

function save(){
    link= document.getElementById("link")
    console.log(link)
    image= document.getElementById("selfie_image").src
    link.href = image
    link.click()
}
