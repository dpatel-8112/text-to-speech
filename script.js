function speak(){
		if ('speechSynthesis' in window) {
 // Speech Synthesis supported 🎉
}else{
  // Speech Synthesis Not Supported 😣
  alert("Sorry, your browser doesn't support text to speech!");
}


var msg = new SpeechSynthesisUtterance();
msg.text = document.getElementById('fileContent').innerHTML;

window.speechSynthesis.speak(msg);
inputTxt.blur();

}
var button2 = document.getElementById('pause');
button2.addEventListener('click', function(e) {
  console.log("window.speechSynthesis.speaking = " + window.speechSynthesis.speaking);
  console.log("window.speechSynthesis.paused = " + window.speechSynthesis.paused);

  if (window.speechSynthesis.speaking) {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      button2.innerText = "Pause";
    } else {
      window.speechSynthesis.pause();
      button2.innerText = "Resume";
    }
  }
});


function init(){
  document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
}

function handleFileSelect(event){
  const reader = new FileReader()
  reader.onload = handleFileLoad;
  reader.readAsText(event.target.files[0])
}

function handleFileLoad(event){
  console.log(event);
  document.getElementById('fileContent').textContent = event.target.result;
}