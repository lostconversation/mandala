


function soundLoad() {
	var firstTime = localStorage.getItem("first_time");
	if( !firstTime || firstTime == "1" ) {
	    // first time loaded!
	    localStorage.setItem("first_time","2");
	    location.reload();
	}
	// console.log(firstTime)
	// AudioContext = window.AudioContext || window.webkitAudioContext;
	// audioCtx = new AudioContext();

    listener = new THREE.AudioListener();
	audio = new THREE.Audio( listener );
	analyser = new THREE.AudioAnalyser( audio, 32 );
    audioLoader = new THREE.AudioLoader();
    
    audioLoader.load( 'audio/mandala.mp3', function( buffer ) {

        // audioDOM.src = audio.src;
        // document.querySelector("#text").innerHTML = ('Ready');
        audio.setBuffer( buffer );
        audio.setLoop( false );
        musicLoaded = 1;
        // audio.setVolume( .2 );
        // bpTime7 = audio.buffer.duration;
        // audio.onEnded();
        // this.knot.add( audio );
        // console.log(audio.currentTime);
        
        
        // audio.source.onended = function() {
        //     console.log('sound1 ended #2');
        //     this.isPlaying = false;
        // };
       readyForPlay();
    });
}

function soundBtn(){
    // this.sfxToggle = sfxToggle;
    // console.log(sfxToggle)
    // console.log(prevSfx)
    if (!prevSfx){
    	// console.log('ahi')
    } else{
    	// console.log(prevSfx)
    	prevSfx.pause();
    	prevSfx.currentTime=0;
    }
    // var rand = Math.floor(Math.random() * 5+1);
    sfxNum += 1;
    if (sfxNum >= 6){
    	sfxNum = 1;
    }
    rand = sfxNum;
    var audioSfxReal = eval("audioSfx"+rand)
    // console.log(rand)
    prevSfx = audioSfxReal;
    this.prevSfx = prevSfx;
    // console.log(audioSfxReal)
    // console.log(prevSfx)
    // console.log(audioSfxReal)	
    // audioSfxReal.src = audioSfxArray[rand];
    // console.log(audioSfxReal.src)
    // audioSfxReal.volume=.2;
    audioSfxReal.play(); 
    
    // console.log(sfxToggle, rand) 

}


function readyForPlay(){
	// var original = document.getElementById('lastRow');
 //    var clone = original.cloneNode(true);
 //    clone.classList.add("endShare");
 //    clone.style.top = 'calc(50% + 0px)';
    // document.body.appendChild(clone);
	loadingText.classList.remove("blink_me");
	// loadingText.style.opacity = 0;
	gameState = 1;
	// soundLoad();
	// mouseRules.style.opacity = 1;
	// mouseRules.innerHTML = "INTERACTIVE VIDEO EXPERIENCE<br><br><br>CLICK: change eye<br>SPACEBAR: play/pause<br><br><br>- SOUND REQUIRED - "; 
	// document.getElementById('loading').classList.remove("blink_me");
			// console.log('asdf2')
	loadingText.style.top = "calc(50% - 50px)";
	setTimeout(function(){

		gameState = 2;
		loadingText.style.opacity = 1;
		loading.style.fontSize = '55px';
		document.getElementById("black").style.opacity = .5;
		document.getElementById("infoBegin").style.opacity = 1;
		if (/Mobi/.test(navigator.userAgent)) {
			beginClick = 1;
			document.getElementById("follower").style.opacity = 0;
		    if (www >= 769/2) document.getElementById("btnPlay").style.top = 'calc(50% - 20px)';
			loadingText.style.top = "calc(50% - 123px)";
			// loadingText.style.letterSpacing = "1px";
			// loadingText.style.lineHeight = "1px";
			// loadingText.innerHTML = mainTitle.fontsize(9) + '<br>' + title.fontsize(6) + payoff.fontsize(1); 
		}else{
			// titleBig = title1.fontsize(6);
			payoff = "<br>"
			// payoff2 = "CLICK<br><br><br>";
			// payoff3 =  "<br><br>- SOUND REQUIRED - ";
			
			loadingText.innerHTML = mainTitle + '<br><br>' + title.fontsize(2) + payoff.fontsize(2) //+ countDown + payoff3.fontsize(2); 
			setTimeout(function(){
				beginClick = 1;
				// console.log('asdf1')
				loadingText.style.top = "calc(50% - 107px)";
			    payoff = "<br><br>CLICK<br>to enable sound"
			    // payoff2 = "CLICK<br><br><br>";
			    // payoff3 =  "<br><br>- SOUND REQUIRED - ";
			    // loadingText.style.top = "calc(50% - 122px)";
			    loadingText.innerHTML = mainTitle + '<br><br>' + title.fontsize(2) + payoff.fontsize(2) //+ countDown + payoff3.fontsize(2); 
			}, 2000)
		}
	},1000)

	
	// document.getElementById("loading").style.marginTop = "50px";
	document.getElementById("black").style.opacity = 0;
	animate();
}







function startApp(){
	soundBtn();
	playPause();
	gameState = 3;
	// audioSfx.play();
    // document.getElementById("infoPageSubTitle").style.display = 'block';
    // document.getElementById("infoPageTitle").style.display = 'block';
    document.getElementById("loading").style.opacity = 1;
    document.getElementById("audioPlayer").style.opacity = 1;
    document.getElementById("streamBar").style.opacity = .7;
    document.getElementById("infoBegin").style.opacity = 0;
    document.getElementById("btnPlay").style.opacity = 0;
    document.getElementById("btnPlay").style.pointerEvents = "none";
    document.getElementById("infoPage").style.opacity = 0;
    document.getElementById("infoPage").style.pointerEvents = 'none';
	document.getElementById("infoPage").style.touchAction = 'none';
	document.getElementById("infoBtn").innerHTML = 'INFO';
	document.getElementById("infoBegin").innerHTML = 'INFO';
	// matCoreMarker.opacity=.02;
	beginInfo = 0;
    // document.getElementById("loading").style.top = "calc(50% - 20px)";
    // document.getElementById("loading").style.top = "50%";
    // var titleCountDown = "OK";
    // var titleBig2 = countDown.fontsize(6);
    
    

    
    // var elem = document.documentElement;
    if (/Mobi/.test(navigator.userAgent)) {
    	
    	var elem = document.documentElement;
		if (elem.requestFullscreen) {
		elem.requestFullscreen();
		} else if (elem.mozRequestFullScreen) { /* Firefox */
		elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
		elem.webkitRequestFullscreen();
		} else if (elem.msRequestFullscreen) { /* IE/Edge */
		elem.msRequestFullscreen();
		}
    } else{
    	// document.documentElement.requestFullscreen();
    }
}

function infoBegin() {

	if (beginInfo == 1){
		// loadingText.style.opacity = 1;
		if (gameState < 3) {
			// if (www <= 769/2){
				document.getElementById("loading").style.opacity = 1
			// }
		} else{
			if (pause == 1){
				playPause();
			}
		};
		document.getElementById("infoPage").style.bottom = '-500px';
		document.getElementById("infoPage").style.opacity='0';
        document.getElementById("infoPage").style.pointerEvents = 'none';
    	document.getElementById("infoPage").style.touchAction = 'none';
    	document.getElementById("infoBtn").innerHTML = 'INFO';
    	document.getElementById("infoBegin").innerHTML = 'INFO';
    	document.getElementById("infoBtn").style.paddingRight = '17px';
    	beginInfo = 0;
		
	} else {
		// loadingText.style.opacity = 0;
		if (gameState < 3) {
			// if (www <= 769/2){
				
			// }	
		} else {
			if (pause == 0){
				playPause();
			}
		}
		document.getElementById("infoPage").style.bottom = 0;
		document.getElementById("loading").style.opacity = 0;
		document.getElementById("infoPage").style.opacity= 1;
        document.getElementById("infoPage").style.pointerEvents = 'all';
    	document.getElementById("infoPage").style.touchAction = 'all';
    	document.getElementById("infoBtn").innerHTML = 'X';
    	document.getElementById("infoBtn").style.paddingRight = '27px';
    	document.getElementById("infoBegin").innerHTML = 'X';
    	beginInfo = 1;
    	
	}
	
	
}

function playPause(){
    if (pause == 0){
    	// checkText = '333'
    	document.getElementById("icoPlayPause").src = 'img/ico_play.svg';
        audio.pause();
        pause = 1;
        if (gameState > 3){
	        document.getElementById("btnPlay").style.opacity = 1;
		    document.getElementById("btnPlay").style.pointerEvents = "all"; 
		}
    } else if (pause == 1){
    	// checkText = '111'
    	document.getElementById("icoPlayPause").src = 'img/ico_pause.svg';
        audio.play();  
        pause = 0;  
        document.getElementById("btnPlay").style.opacity = 0;
	    document.getElementById("btnPlay").style.pointerEvents = "none";      
    }
} 

function onDown(){
	// event.preventDefault();
		// console.log('2222')
		downMouseX = mouse.x;
		downMouseY = mouse.y;
		dragging = 1;
		audioSfxLong.currentTime = 0;
		audioSfxLong.volume = 1;
		
}

function oneClick(){
	firstClick += 1;
	var fadeOut = setInterval(function(){
		audioSfxLong.volume -= .001;
		if (audioSfxLong.volume <= .02){
			audioSfxLong.pause();
			audioSfxLong.currentTime = 0;
			audioSfxLong.volume = 1;					
			clearInterval(fadeOut);
		}
	},5)
	

	var checkX = Math.abs(downMouseX - mouse.x);
	var checkY = Math.abs(downMouseY - mouse.y);
// console.log(checkX)
	if (checkX < .01 && checkY < .01){
		dragging = 0;
		clickBeat = 1;
		setTimeout(function(){
			clickBeat = 0;
		}, 300)
	}
	
	if (/Mobi/.test(navigator.userAgent)) {
		var now = new Date().getTime();
		var timesince = now - mylatesttap;
		if((timesince < 600) && (timesince > 0)){
			doubleClick();  
		}else{
	        mylatesttap = new Date().getTime();
		  	clickBeat = 1;
			setTimeout(function(){
				clickBeat = 0;
			}, 300)
	    }
	  	
	} else {
		if (beginClick == 1){
			payoff = "<br><br><br><br>INTERACTIVE<br>MUSIC<br>MAKER"
	        loadingText.innerHTML = mainTitle + '<br><br>' + title.fontsize(2) + payoff.fontsize(2)
	        var go2 = setInterval(function(){
				if( musicLoaded == 1 ){
					clearInterval(go2);
					document.getElementById("btnPlay").style.opacity = 1;
			        document.getElementById("btnPlay").style.pointerEvents = "all"; 
			    }
			}, 500)
    	}
        beginClick = 2;
		 
	}


	dragLong = 1;
	if (dragging == 1){
		// console.log('dragged')
		// document.getElementById("checkText").innerHTML = 'drag stop'
		dragging = 0;
	}else{
		soundBtn();
		if (gameState < 3){
			doubleClick();
		}
		// }
	}
	// }
}

function doubleClick() {
	if (gameState > 0 && beginClick > 0){
		angle=Math.random()*500;

		kThick = Math.floor(Math.random() * 10) + 1 ;
		ks1= Math.floor(Math.random() * 63) + 120 ;
		ks2= Math.floor(Math.random() * 11) + 2 ;
		kP= Math.floor(Math.random() * 80) + 111 ;
		kQ= Math.floor(Math.random() * 100) + 2 ;
		// ks1 += .1;
		// kQ += .5;


		if (kP % ks1 == 0 || kQ % ks1 == 0){
			doubleClick();
		}

		// console.log('kQ ', kQ);
		

		oldX = knot1.rotation.x;
		mandala.remove( knot1 );
		mandala.remove( knot2 );
		finalCore.remove( knot3 );
		finalCore.remove( knot2b );
		finalCore.remove( knot4 );

		createKnot_1();
		createKnot_2();
		createKnot_3();
	}
}


function ending(){
	document.getElementById("black").style.opacity = ".6";
    // gameState = 0;
    finito = 1;
    // beginZoom = 0;
    controls.noZoom = false;
    loading.style.opacity = "1";
    var endTitle = "WELL DONE!"
    payoff = "<br><br>You have resonated with " + firstClick + " eyes of your mind...<br>you are in tune with the Universe right now!<br><br><br>"

	
	if (/Mobi/.test(navigator.userAgent)) {
		loadingText.innerHTML = endTitle.fontsize(6) + payoff.fontsize(1); 
	}else{
		loadingText.innerHTML = endTitle.fontsize(6) + payoff.fontsize(2); 
	}

    document.getElementById('lastRow2').style.display = 'block';
    document.getElementById('lastRow2').style.top = 'calc(50% + 150px)';
    document.getElementById('lastRow2').style.pointerEvents = 'all';
	// clone.style.top = 'calc(50% + 10px)';
	loadingText.style.top = 'calc(50% - 70px)';
	loadingText.style.pointerEvents = "all";
	loadingText.style.touchAction = "all";
	// loadingText.addEventListener( 'click', reStart(), false);


}
  


function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	// if (retinaCheck == 1){
		// console.log('asdf 0');
		windowHalfX = window.innerWidth / (retinaCheck*2);
		windowHalfY = window.innerHeight / (retinaCheck*2);
		renderer.setSize( window.innerWidth/retinaCheck, window.innerHeight/retinaCheck );
}

function onDocumentMouseMove( event ){
	// event.preventDefault();
	mouseY = ( event.clientY - (windowHalfY*retinaCheck) ) * .5;
	mouseX = ( event.clientX - (windowHalfX*retinaCheck) ) * .5;
	// document.getElementById("checkText").innerHTML = event.clientX;
	mouseRealX = event.clientX;
	mouseRealY = event.clientY;
	followMouse.style.top = mouseRealY + 'px';
	followMouse.style.left = mouseRealX + 'px';
	mouse.x =  event.clientX / (windowHalfX*retinaCheck) - 1;
    mouse.y = - ( event.clientY / (windowHalfY*retinaCheck)) + 1;
    if (dragging == 1){
    	// console.log('dragging')
    	audioSfxLong.volume=1;
    	audioSfxLong.play();
    }
}



function animate() {
	render();	
}

