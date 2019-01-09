function readyForPlay(){
	document.getElementById("btnPlay").style.opacity = "1";
	document.getElementById('loading').classList.remove("blink_me");
	if (/Mobi/.test(navigator.userAgent)) {
		var str = "MUSIC PLAYER";
		var result = str.fontsize(5);
		document.getElementById("loading").style.top = "calc(50% - 75px)";
		document.getElementById("loading").innerHTML = result + "<br/><br/><br/><br/><br/><br/><br/><br/>LISTEN & TOUCH";
	}else{
		var str = "MUSIC PLAYER";
		var result = str.fontsize(6);
		var str1 = "Visuals";
		var str2 = "Motion";
		var str3 = "Sound EQ";
		var result1 = str1.fontsize(2);
		var result2 = str2.fontsize(2);
		var result3 = str3.fontsize(2);
		document.getElementById("loading").style.top = "calc(50% - 83px)";
		document.getElementById("loading").innerHTML = result + "<br/><br/><br/><br/><br/><br/><br/><br/><br/>MOUSE MOVE / CLICK / SCROLL<br/><br/>SPACEBAR: PAUSE";
	}
	// document.getElementById("loading").style.marginTop = "50px";
	document.getElementById("black").style.opacity = ".6";
	animate();
}


function spin(n, freq){
	this.spinning = spinning;
	if (spinning == 1){
		spinning = 0;
	}else{
		sR = n;
		this.sR = sR;
		this.freq = freq;
		spinning = 1;

	}
	myTimer = setTimeout( function() {
		spinning=0;
		// console.log("reee")
		clearInterval( myTimer )
	}, freq*700);
}




function dragCheck(e){
	// e.preventDefault();
	// this.dragging = dragging;
	dragging = 1;
	// console.log(dragging);
	// console.log("5")
}







function pauseAnim(){
	this.pause = pause;
    // console.log(pause);
    if (pause == 1){
    	pause = 0;
    	streamBar();
    	document.getElementById("icoPlayPause").src = 'img/ico_pause.svg';
    	document.getElementById('s0').style.pointerEvents='all';
    	document.getElementById('s0').style.cursor='pointer';
    	if (sound == 0){playPause(sound);}
    }else if (pause == 0){
    	pause = 1;
    	clearInterval(streamBarId);
    	document.getElementById("icoPlayPause").src = 'img/ico_play.svg';
    	document.getElementById('s0').style.pointerEvents='none';
    	document.getElementById('s0').style.cursor='crosshair';
    	if (sound == 1){playPause(sound);}
    }
}




function keydown(e){
	if (e.keyCode == "72") { // H
		// dat.GUI.toggleHide();
		var st = document.getElementById('statsDiv');
		if (uiStats == 0){
			st.style.visibility='visible'; 
			var loading = document.getElementById('loading').style.opacity='1'; 
			document.getElementById("loading").style.top = "50%";
			var eq = document.getElementById('eq').style.opacity='1'; 
       		// document.getElementById("black").style.opacity = ".5";
       		uiStats = 1;
       	}else if (uiStats == 1){
       		st.style.visibility='hidden'; 
       		var loading = document.getElementById('loading').style.opacity='0'; 
       		var eq = document.getElementById('eq').style.opacity='0'; 
       		// document.getElementById("black").style.opacity = "0";
       		uiStats = 0;
       	}
       }
    // 1 = 49  -  2 = 50
    if (e.keyCode == "80") { // P
    	playPause(sound);
    }
    if (e.keyCode == "32") { // spacebar
    	if (beginPause == 1){startApp();
    	}else{playPause(sound);}
    	
    }
    if (e.keyCode == "49") { // 1 2 3 
    	spin(100, .2);
    }
    if (e.keyCode == "50") {
    	spin(1000, .2);
    }
    if (e.keyCode == "51") {
    	spin(500, 1);
    }
    if (e.keyCode == "52") {
    	spin(900, 2);
    }
  //   if (e.keyCode == "52") {
		// spin(4000);
  //   }
    if (e.keyCode == "48") { // 0
    	this.coreYes = coreYes;
    	// 
    	if (coreYes == 0){
    		coreYes = 1;
    		createCore();
    	} else {
    		this.core = core;
    		coreYes = 0;
    		scene.remove( core );

    	}
    }
    if (e.keyCode == "81") { // Q
    	var hhh = 100;
    	var mmm = 100;
    	var lll = 100;
    	changeGain(hhh, 'highGain');
    	changeGain(mmm, 'midGain');
    	changeGain(lll, 'lowGain');
    	document.getElementById('HH').value = hhh;
    	document.getElementById('MM').value = mmm;
    	document.getElementById('LL').value = lll;
    }
    if (e.keyCode == "87") { // W
    	var hhh = 100;
    	var mmm = 1;
    	var lll = 1;
    	changeGain(hhh, 'highGain');
    	changeGain(mmm, 'midGain');
    	changeGain(lll, 'lowGain');
    	document.getElementById('HH').value = hhh;
    	document.getElementById('MM').value = mmm;
    	document.getElementById('LL').value = lll;
    }
    if (e.keyCode == "69") { // E
    	var hhh = 1;
    	var mmm = 100;
    	var lll = 1;
    	changeGain(hhh, 'highGain');
    	changeGain(mmm, 'midGain');
    	changeGain(lll, 'lowGain');
    	document.getElementById('HH').value = hhh;
    	document.getElementById('MM').value = mmm;
    	document.getElementById('LL').value = lll;
    }
    if (e.keyCode == "82") { // R
    	var hhh = 1;
    	var mmm = 1;
    	var lll = 100;
    	changeGain(hhh, 'highGain');
    	changeGain(mmm, 'midGain');
    	changeGain(lll, 'lowGain');
    	document.getElementById('HH').value = hhh;
    	document.getElementById('MM').value = mmm;
    	document.getElementById('LL').value = lll;
    }
    if (e.keyCode == "84") { // T
    	var hhh = 10;
    	var mmm = 10;
    	var lll = 10;
    	changeGain(hhh, 'highGain');
    	changeGain(mmm, 'midGain');
    	changeGain(lll, 'lowGain');
    	document.getElementById('HH').value = hhh;
    	document.getElementById('MM').value = mmm;
    	document.getElementById('LL').value = lll;
    }
    if (e.keyCode == "77") { // M
    	playMute(sound);
    }
}


function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	if (retinaCheck == 0){
		windowHalfX = window.innerWidth / 2;
		windowHalfY = window.innerHeight / 2;
		renderer.setSize( window.innerWidth, window.innerHeight );
	} else {
		windowHalfX = window.innerWidth / 4;
		windowHalfY = window.innerHeight / 4;
		renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
	}
}

function onDocumentMouseMove(event) {
	mouseY = ( event.clientY - windowHalfY ) * .5;
	mouseX = ( event.clientX - windowHalfX ) * .5;
	// mouse.x = (( event.clientX / windowHalfX ) ) -1;
	// mouse.y = (( event.clientY / windowHalfY ) ) -1;
	mouseRealX = event.clientX;
	mouseRealY = event.clientY;
	followMouse.style.top = mouseRealY + 'px';
	followMouse.style.left = mouseRealX + 'px';
}



function animate() {
	render();	
	
}

function render() {
	delta = clock.getDelta();

	deltaX = -camera.position.x;
	deltaY = -camera.position.y;
	deltaZ = -camera.position.z;

	distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);
	ddd=distance*.000005

	x = camera.position.x,
	y = camera.position.y,
	z = camera.position.z;

	if (spinning == 0){
		if(mouseX<0){
			speedW=mouseX*.00014;
		}else{
			speedW=mouseX*.0001;
		};
    // speedX=www/2+(mouseX*2); spin one side only
	// speedW=(speedX*.0001)/5+.005;
}else{
    	// console.log("sdf") QUANDOOOOOO va questo??
    	speedW = 0;
    	z=(Math.cos(-angle*(freq*100))*(sR))+sR; // Math.random()*1000+1;
    	// console.log(freq)
    	// console.log(sR)
    	// console.log(sYeah)
    }
    
	// this.pause = pause;
	angle-=0.01;
	if (pause == 1){
		// audioWaitingTime = audio.context.currentTime - audioCurrentTime; useless!
		audioPrevTime = audioCurrentTime;

		speedRot=0.001;
		if (/Mobi/.test(navigator.userAgent)) {
			knot.rotation.x += .0004;
		} else {	        
			speedY=(mouseY*1*ddd);
			// waveY=-(ddd*17000)*Math.sin(angle*2);
			waveY = prevWaveY;
			camera.position.y = waveY-(prevSpeedY-speedY/5)*300;
			camera.position.x = x * Math.cos(speedW/8) + z * Math.sin(speedW/8);
			camera.position.z = z * Math.cos(speedW/8) - x * Math.sin(speedW/8);
			
		}
	} else if (pause == 0){
		audioCurrentTime = audio.context.currentTime - audio.startTime + audioPrevTime;

		// streaming player
		audioPercentage = (audioCurrentTime*100)/audio.buffer.duration;
		streamBarWidth = audioPercentage;
		elem.style.width = streamBarWidth + '%'; 

		if (audioCurrentTime >= audio.buffer.duration){
			songLoops += 1;
			console.log('end song');
			streamBarId=0;
            streamBarWidth = 0;
            elem.style.width = streamBarWidth + '%';
            audioPrevTime = 0;
            audio.stop();
			audio.play();
		}
		flashy = analyser.getAverageFrequency()/70;
		audioDOM.currentTime += 1/60; // mhmhmhm trick - can't get audio.currentTime NOR audioDOM === audio -------
		// audioDOM === audio;
		// console.log(audioDOM.currentTime, audio.offset);
		if (/Mobi/.test(navigator.userAgent)) {
			speedRot=.007;
			knot.rotation.x += .007;
			// speedRot=.03;
			// speedW = speedW/5;
		}else{
			speedRot=.005;
			speedY=(mouseY*1*ddd);
			waveY=-(ddd*17000)*Math.sin(angle*2);
			camera.position.y = waveY-speedY*300;
			camera.position.x = x * Math.cos(speedW) + z * Math.sin(speedW);
			camera.position.z = z * Math.cos(speedW) - x * Math.sin(speedW);
			prevSpeedY = speedY;
		}
	}
	// console.log(audioWaitingTime);
	// console.log(audioCurrentTime);
	// console.log('next');
	// document.getElementById("currentTime").innerHTML = "Current: " + audioCurrentTime;
	// document.getElementById("waitTime").innerHTML = "Waiting: " + audioWaitingTime;
	// console.log(audio.context)
	// console.log(speedY, waveY)
	// console.log(distance);
	// knot1.scale.set( 2,2,2 )

	if (distance <= 0.0002){
		camera.position.z = 850000;
	}

	// camera.zoom = camera.zoom * 1.01;
	// camera.updateProjectionMatrix();

	// console.log(camera.fov)
	// zoom += inc;
	// if ( zoom <= 0.2 || zoom >= 1.0 ){
	//    inc = -inc;
	// }


	// if (beginZoom == 1 && pause == 0){
	// 	// sceneSize += .1
	// 	if (scene.scale.x <= 800){
	// 		sceneSize = sceneSize * 1.01;		
			
	// 	} else {
	// 		sceneSize = sceneSize * 1.001;
	// 		coreSize = coreSize * 1.01
	// 		ratio = 8;
	// 		core.scale.set(coreSize,coreSize,coreSize)
	// 	}	
	// 	scene.scale.set(sceneSize,sceneSize,sceneSize)
	// 	if (scene.scale.x >= 1170){
	// 		fCratio = finalCore.scale.x + .1
	// 		finalCore.scale.set(fCratio,fCratio,fCratio)
	// 	}	
	// }

	// if (finalCore.scale.x >= 120){
	// 	sceneSize = 1;
	// 	scene.scale.set(1,1,1);
	// 	core.scale.set(1,1,1);
	// 	finalCore.scale.set(1,1,1);
	// }
	// core.scale.set(100,100,100);
	// console.log(scene.scale.x);
	// console.log(core.scale.x);
	// console.log(camera.position.z);

	requestAnimationFrame(animate); 
	// scene.rotation.z += speedRot;
	// scene.rotation.x += .001;
	// scene.rotation.y += .001;
	controls.update();

	
	directionalLight1.position.x = 1+5000*Math.sin(angle*.1);
	directionalLight1.position.y = 10+1500*Math.cos(angle*.1);
	// dL1.position = directionalLight1.position;
	directionalLight2.position.x = 5*Math.sin(angle*.2);
	directionalLight2.position.y = 3*Math.sin(angle*.4);
	directionalLight3.position.x = 1+3000*Math.sin(angle*.4);
	directionalLight3.position.z = 10+3000*Math.cos(angle*.4);
	directionalLight4.position.y = 1+500*Math.sin(angle*.8);
	directionalLight4.position.z = 10+500*Math.cos(angle*.8);

	filmPass.uniforms[ "time" ].value = delta;
	effectVignette.uniforms["darkness"].value = Math.sin(angle*.1)+1.9;



	if (flashy <= .5){
		if (beginPause == 1){ // all'inizio è dichiarato all'inizio
		}else {flashy = 1;}		
	}
	// console.log(data, data*data*data);
	if (distance > 7.5){
		// renderer.toneMappingExposure = flashy*flashy*flashy;
	} else{
		renderer.toneMappingExposure = flashy/2;
	}

	// prevWaveY
	prevMouseX = mouseX;
	prevMouseY = mouseY;
	prevWaveY = waveY;
	// console.log(prevSpeedY);
	
	camera.lookAt(scene.position);
	
	composer.render(delta);
	stats.update();
}
