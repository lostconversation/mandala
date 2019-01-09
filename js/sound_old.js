
// audioSfx1 = document.createElement('audio');
// audioSfx1.src = 'audio/SFX/sfx-1.mp3';
// audioSfx2 = document.createElement('audio');
// audioSfx2.src = 'audio/SFX/sfx-2.mp3';
// audioSfx3 = document.createElement('audio');
// audioSfx3.src = 'audio/SFX/sfx-3.mp3';



// function soundBtn(){
//     this.sfxToggle = sfxToggle;
//     // console.log(sfxToggle)
//     var rand = Math.floor(Math.random() * 7+1);
//     var audioSfxReal = eval("audioSfx"+sfxToggle)
//     // console.log(audioSfxReal)
//     // audioSfxReal.src = audioSfxArray[rand];
//     // console.log(audioSfxReal.src)
//     audioSfxReal.volume=1;
//     audioSfxReal.play(); 
//     sfxToggle++;
//     if(sfxToggle==8){sfxToggle=1;}
//     // console.log(sfxToggle, rand) 

// }



//function fff(){
////    document.querySelector('#loading').innerHTML='sssss'; 
//    this.context = context;
//   document.querySelector('#loading').innerHTML=context; 
//}
//  
var audio = document.createElement('audio');
//    this.audio = audio;
    // var rand = Math.floor(Math.random() * 2)+1;
    audio.src = 'audio/01.mp3';
    audio.preload= "auto";
    audio.volume=.8;
    audio.loop=true;



var AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
// const audioSrc = context.createMediaElementSource(audio);
var mediaElement = audio; //document.getElementById('audio');
var sourceNode = context.createMediaElementSource(mediaElement);


const analyser = context.createAnalyser();
sourceNode.connect(analyser);
analyser.connect(context.destination);
// this.analyser = analyser;

analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
const frequencyData = new Uint8Array(bufferLength);
// analyser.getByteFrequencyData(frequencyData);







function Sound() {
    this.context = context;
    // this.name = name;
    // audio = scene.getObjectById( 'audio');
    audio = document.createElement('audio');
//    this.audio = audio;
    // var rand = Math.floor(Math.random() * 2)+1;
    audio.src = 'audio/01.mp3';
    audio.preload= "auto";
    audio.volume=.8;
    audio.loop=true;


    // audioSfx = document.createElement('audio');
    // audioSfxArray = new Array;
    // for ( var i = 1; i < 8; i ++ ) {
    // audioSfxArray.push('audio_1/SFX/sfx-'+i+'.mp3');
    // }
    // var AudioContext = window.AudioContext || window.webkitAudioContext;
    // var context = new AudioContext();

    
    
//    console.log(context) 
    // EQ Properties
    //
    var gainDb = -40.0;
    var bandSplit = [360,3600];

    var hBand = context.createBiquadFilter();
    hBand.type = "lowshelf";
    hBand.frequency.value = bandSplit[0];
    hBand.gain.value = gainDb;

    var hInvert = context.createGain();
    hInvert.gain.value = -1.0;

    var mBand = context.createGain();

    var lBand = context.createBiquadFilter();
    lBand.type = "highshelf";
    lBand.frequency.value = bandSplit[1];
    lBand.gain.value = gainDb;

    var lInvert = context.createGain();
    lInvert.gain.value = -1.0;

    sourceNode.connect(lBand);
    sourceNode.connect(mBand);
    sourceNode.connect(hBand);

    hBand.connect(hInvert);
    lBand.connect(lInvert);

    hInvert.connect(mBand);
    lInvert.connect(mBand);

    var lGain = context.createGain();
    var mGain = context.createGain();
    var hGain = context.createGain();

    lBand.connect(lGain);
    mBand.connect(mGain);
    hBand.connect(hGain);

    var sum = context.createGain();
    lGain.connect(sum);
    mGain.connect(sum);
    hGain.connect(sum);
    sum.connect(context.destination);

    this.lGain = lGain;
    this.mGain = mGain;
    this.hGain = hGain;


//    return context;

  }

function startApp(){
//    this.context = context;
//    console.log(sound, context, this.context);
//    document.querySelector('#loading').innerHTML=context;
    
//    context.resume().then(() => {
//    console.log('Playback resumed successfully');
//    });
    
    // console.log("222")
    // event.preventDefault();
    // e.stopPropagation();
    // event.preventDefault();
    // event.handled = true;
    document.getElementById("loading").style.marginTop = "10px";
    
    document.getElementById("loading").innerHTML = "LOADING SOUND";
    // console.log(audio, this.audio)
    // this.audio = audio;
    // this.audio = audio;
    
    var soundCheck = setInterval(function(){

        if (audio.networkState == 1){
            // console.log("yesss");
            
            // document.getElementById("eq").style.opacity = "1";
            document.getElementById("audioPlayer").style.opacity = "1";
            document.getElementById("loadBar").style.opacity = ".7";
            document.getElementById("btnPlay").style.opacity = "0";
            document.getElementById("btnPlay").style.pointerEvents = "none";
            document.getElementById("loading").style.top = "calc(50% - 150px)";
            // document.getElementById("loading").style.top = "50%";
            document.getElementById("loading").innerHTML = "HAVE FUN!";
            document.getElementById('loading').style.opacity='0'; 
            document.getElementById("black").style.opacity = "0";
            console.log('Playback resumed successfully');
            playSound(sound);
            loadBar();
            clearInterval(soundCheck);
        }

    }, 200);

}


function playSound(sound){
    // e.preventDefault();
    
    // this.audio=audio;
    this.sound=sound;
    // console.log(xxx)
    if (sound==1){
        this.audio.pause();
        this.sound=0;
        pause = 1;
        // $('.s0').fadeIn()
        document.getElementById("icoPlayPause").src = 'img/ico_play.svg';
        document.getElementById("s0").style.opacity='1';
        // document.getElementById("soundIcon").src = "img/sound_no.svg";
        // $('.soundIco').removeAttr('id', 'focusP');
        // $('.s1').removeAttr('id', 'focusP');
    }else if (sound==0){
        this.audio.play();  
        this.sound=1;
        audio.muted=false;
        pause = 0;
        document.getElementById("icoPlayPause").src = 'img/ico_pause.svg';
        document.getElementById("s0").style.opacity='0';
        // $('.s0').fadeOut();
        // $('.soundIco').attr('id', 'focusP');
    }
}   

function changeGain(string,type) {
    // this.hGain = params.highGain;
    // this.mGain = params.midGain;
    // this.lGain = params.lowGain;
    // console.log(lGain)
  var value = parseFloat(string) / 100.0;

  // this.lGain = lGain;
  switch(type)
  {
    case 'lowGain': lGain.gain.value = value; break;
    case 'midGain': mGain.gain.value = value; break;
    case 'highGain': hGain.gain.value = value; break;
  }
}


function playMute(sound){
    // this.audio.pause();
    // this.sound=sound;
    // audio=this.audio;
    // this.audio = audio;
    // console.log(audio, this.audio)
    if (mute == 0){
        audio.muted=true;
        document.getElementById("s0").style.opacity='1';
        mute = 1;
    } else if (mute == 1){
        audio.muted=false;
        document.getElementById("s0").style.opacity='0';
        mute = 0;
    }
}


function loadBar() {
            var elem = document.getElementById("myBar");             
            loadBarId = setInterval(frame, 50);
            // console.log(window.timerSpace)
            function frame() {
            var audioPercentage = (audio.currentTime*100)/audio.duration;
                if (loadBarWidth >= 100) {
                    loadBarId=0;
                    loadBarWidth = 0;
                    // loadBar(window.timerSpace) riparte timeline
                    clearInterval(loadBarId);
                } else {
                    loadBarWidth = audioPercentage; //loadBarWidth+=window.timerSpace; 
                    elem.style.width = loadBarWidth + '%'; 
                }
            }
        }