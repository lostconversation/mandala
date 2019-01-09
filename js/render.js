
function render() {

     // console.log(camera.position.z)
    // console.log(scene.position)
    // document.getElementById("currentTime").innerHTML = mouseRealX + '<br>' + mouseX + '<br>' + windowHalfX + '<br>' + www;
    delta = clock.getDelta();
    flashy = analyser.getAverageFrequency()/120;

    if (gameState > 0 && firstClick <= 2){
        if (/Mobi/.test(navigator.userAgent)) {
        }else{
        // mouseRules.style.top = mouseRealY-25 + 'px';
        // mouseRules.style.left = mouseRealX + 'px';
        }
    }



    speedY = mouseY * .002;
    speedW = (mouseX+.5) * .00014;
    
    // this.pause = pause;
    // angle-=0.01
    if (pause == 1){
        flashy = prevFlash;
        audioPrevTime = audioCurrentTime;
        // speedRot=0.001;
        if (/Mobi/.test(navigator.userAgent)) {
            
            if (gameState == 2 ){
                if (camera.rotation.x < .4 && camera.rotation.x > -.4 && camera.rotation.y < .4 && camera.rotation.y > -.4){
                    // document.getElementById("black").style.opacity = .4;
                    // payoff = "<br>THE EYE OF THE MIND<br><br><br>YES!"//<br><br><br>INTERACTIVE<br>MEDITATIONAL<br>EXPERIENCE"
                    document.getElementById("btnPlay").style.opacity = 1;
                    document.getElementById("btnPlay").style.pointerEvents = "all"; 

                    payoff = "<br>THE EYE OF THE MIND<br><br><br><br><br><br>INTERACTIVE<br>MUSIC<br>MAKER"
                    loadingText.innerHTML = mainTitle + payoff.fontsize(1); 
                    if (beginHover < 30){
                        beginHover += 1;
                    } else if (beginHover >= 30){
                        oneClick();
                        beginHover = 0;
                    }

                } else{
                    beginHover = 0;
                    firstClick = 0;
                    // document.getElementById("black").style.opacity = .7;
                    document.getElementById("btnPlay").style.pointerEvents = "none";  
                    document.getElementById("btnPlay").style.opacity = 0;
                    
                    if (www <= 768/2){
                        payoff = "<br>THE EYE OF THE MIND<br><br><br><br><br><br><br>Move your phone,<br>Find the MANDALA<br><br>";
                    } else {
                        payoff = "<br>THE EYE OF THE MIND<br><br><br><br><br><br><br>Move your tablet,<br>Find the MANDALA<br><br>";
                    }
                    
                    loadingText.innerHTML = mainTitle + payoff.fontsize(1); 
                }
            } else if (gameState > 2){
                cluster.rotation.y += .0005; // ruota solo dopo startApp
                cluster.rotation.z += .0005;
            }
        } else {   

            if (gameState <= 2){
                cluster.rotation.x = -speedY / 4; // follow mouse
                cluster.rotation.y = -speedW * 4;
                
                
                raycaster.setFromCamera( mouse, camera );
                intersects = raycaster.intersectObjects( hoverObjects, true );
                // console.log(mouse.y)
                // document.getElementById("checkText").innerHTML = mouse.y;
                if ( intersects.length > 0 ) {
                    if (beginHover == 0){
                        if (beginClick == 2){
                            // console.log('asdf')
                            oneClick();
                        }
                    } if (beginHover < 60){
                        beginHover += 1;

                    } else if (beginHover >= 60){
                        beginHover = 0;
                        // introBeat += 1;
                        // if (introBeat == 4){
                            // soundBtn();
                            // introBeat = 0;
                        // }
                    }
                }else{

                    beginHover = 0;
                    firstClick = 0;
                }
            } else if (gameState > 2){
                
                // console.log("asdfs")
                cluster.rotation.x -= speedY / 280; // constant rotation
                cluster.rotation.y -= speedW / 40;
            }
        }
    } else if (pause == 0){
        // document.getElementById("btnPlay").style.opacity = 0;
        // document.getElementById("btnPlay").style.pointerEvents = "none"; 
        audioCurrentTime = audio.context.currentTime - audio.startTime + audioPrevTime;
        audioPercentage = (audioCurrentTime*100)/audio.buffer.duration;
        streamBarWidth = audioPercentage;
        elem.style.width = streamBarWidth + '%'; 
        if (audioCurrentTime >= bpTime8){
            ending();
            flashy = 3;
            // reStart();
            if (audioCurrentTime >= audio.buffer.duration){
                audio.stop();
                pause = 1;
                songLoops += 1;
                // console.log(audioCurrentTime);
                streamBarId=0;
                streamBarWidth = 0;
                elem.style.width = streamBarWidth + '%';
                audioCurrentTime = 0;
                audioPrevTime = 0;
                // playPause();
                
                document.getElementById("audioPlayer").style.opacity = 0;
                document.getElementById("streamBar").style.opacity = 0;
            }
        }
        if (gameState == 3 ){
                controls.noZoom = true;
                document.getElementById("btnPlay").style.opacity = 0;
                document.getElementById("btnPlay").style.pointerEvents = "none"; 
            // if (matOut.opacity <= 0.01){
                coreOut.visible = false;
                finalCoreBlackOut.visible = false;
            // } else { matOut.opacity -= .004 };
            // console.log (matOut.opacity)
            if (/Mobi/.test(navigator.userAgent)) {
                // body.visible = false;
                payoff2 = "<br><br><br><br><br>... READY ...";
                payoff = "";
            } else {
                payoff2 = "<br><br><br><br>MOVE THE MOUSE";
                payoff = "<br>to control speed and rotation";
            }
            if (audioCurrentTime <= 1){
                 
                // console.log('ehhh')
                // scene.fog.density = 0;
                scene.fog.density = scale(audioCurrentTime, 0, 1, .000003, .0); // 0
                
                titleCountDown = "";
                loadingText.style.top = "70%" //"calc(100% - 200px)";
                

                // // titleCountDown = 'GO!';
                loadingText.innerHTML = payoff2.fontsize(4) + payoff.fontsize(2); 
                
            } else if (audioCurrentTime > 1 && audioCurrentTime <= 2){
                titleCountDown = '4';
                // payoff = "<br>to drive the experience";
                document.getElementById("black").style.opacity = "0";
            } else if (audioCurrentTime > 2 && audioCurrentTime <= 3){
                titleCountDown = '3';
                // payoff = "<br>to drive the experience";
            } else if (audioCurrentTime > 3 && audioCurrentTime <= 4){
                titleCountDown = '2';
                // payoff = "<br>to drive the experience";
            } else if (audioCurrentTime > 4 && audioCurrentTime <= 5){
                titleCountDown = '1';
                // payoff = "<br>to drive the experience";
            } else if (audioCurrentTime > 5){
                titleCountDown = 'GO!';
                
                // titleCountDown = 'GO!';
                loadingText.style.opacity = 0;
                // beginZoom = 2;
                gameState = 4;
                // clonerMarker2.visible = true;
                // clonerMarker2b.visible = true;
                firstClick = 0;
            }
                loadingText.innerHTML = titleCountDown.fontsize(6) + payoff2.fontsize(4) + payoff.fontsize(2); 
                // loadingText.innerHTML = titleCountDown.fontsize(6) + payoff2.fontsize(4) + payoff.fontsize(2) + payoff3.fontsize(4) + payoff4.fontsize(2);   
            camera.position.z = scale(audioCurrentTime, 0, 5, camBegin, bpCam0); // 0
            // body.position.y = scale(audioCurrentTime, 0, bpTime0, 1800000, 9500000); // 0
            // camera.position.z = bpCam0;
        } else if (gameState == 4){

            if (audioCurrentTime >= bpTime0 && audioCurrentTime < bpTime1){
                // console.log(1)
                camera.position.z = scale(audioCurrentTime, bpTime0, bpTime1, bpCam0, bpCam1); // 0
                scene.fog.density = 0;
                // material1.opacity = scale(audioCurrentTime, bpTime0, bpTime1, .5, -.1); // 0
                // body.position.y = scale(audioCurrentTime, bpTime0, bpTime1, 9500000, 1800000); // 0
            } else if (audioCurrentTime >= bpTime1 && audioCurrentTime < bpTime1b){
                scene.fog.density = 0;
                camera.position.z = scale(audioCurrentTime, bpTime1, bpTime1b, bpCam1, bpCam1b); // 0
                if (audioCurrentTime > 11 && audioCurrentTime <= 15){
                    loadingText.style.opacity = 1;
                    // loadingText.style.top = "calc(50% + 110px)";
                    if (/Mobi/.test(navigator.userAgent)) {
                        payoff2 = "<br>TAP and DOUBLE TAP";
                        payoff = "<br><br>to make music and visuals"
                        loadingText.innerHTML = payoff2.fontsize(5) + payoff.fontsize(2); 
                    } else {
                        payoff2 = "CLICK<br><br><br>DOUBLE CLICK<br><br><br>DRAG";
                        payoff = "<br>to interact"

                        // // titleCountDown = 'GO!';
                        loadingText.innerHTML = payoff2.fontsize(5) + payoff.fontsize(2); 
                    }
                // } else if (audioCurrentTime > 17 && audioCurrentTime <= 22.5){
                //     loadingText.style.opacity = 1;
                //     payoff2 = "<br><br>MOVE THE MOUSE";
                //     payoff = "<br>- to drive the experience -"

                //     // // titleCountDown = 'GO!';
                //     loadingText.innerHTML = payoff2.fontsize(5) + payoff.fontsize(2); 
                } else {
                    loadingText.style.opacity = 0;
                }

            } else if (audioCurrentTime >= bpTime1b && audioCurrentTime < bpTime2){
                
                scene.fog.density = scale(audioCurrentTime, bpTime1, bpTime2, .000001, .0001); // 0
                camera.position.z = scale(audioCurrentTime, bpTime1b, bpTime2, bpCam1b, bpCam2); // 0
                // if (audioCurrentTime > 24 && audioCurrentTime <= 28){
                //     loadingText.style.opacity = 1;
                //     loadingText.style.top = "calc(50% - 50px)";
                //     if (/Mobi/.test(navigator.userAgent)) {
                //         payoff2 = "<br>ENJOY";
                //         payoff = "<br><br>the journey!"
                //         loadingText.innerHTML = payoff2.fontsize(5) + payoff.fontsize(2);  
                //     } else {
                //         payoff2 = "<br><br>ENJOY";
                //         payoff = "<br>- and resonate with the Universe -"
                //         // // titleCountDown = 'GO!';
                //         loadingText.innerHTML = payoff2.fontsize(5) + payoff.fontsize(2); 
                //     }
                // } else {
                //     loadingText.style.opacity = 0;
                // }
            } else if (audioCurrentTime >= bpTime2 && audioCurrentTime < bpTime3){
                camera.position.z = scale(audioCurrentTime, bpTime2, bpTime3, bpCam2, bpCam3); // 0
            } else if (audioCurrentTime >= bpTime3 && audioCurrentTime < bpTime4){
                camera.position.z = scale(audioCurrentTime, bpTime3, bpTime4, bpCam3, bpCam4); // 0
            } else if (audioCurrentTime >= bpTime4 && audioCurrentTime < bpTime5){
                camera.position.z = scale(audioCurrentTime, bpTime4, bpTime5, bpCam4, bpCam5); // 0
            } else if (audioCurrentTime >= bpTime5 && audioCurrentTime < bpTime6){
                camera.position.z = scale(audioCurrentTime, bpTime5, bpTime6, bpCam5, bpCam6); // 0
            } else if (audioCurrentTime >= bpTime6 && audioCurrentTime < bpTime7){
                // console.log('last bit')
                camera.position.z = scale(audioCurrentTime, bpTime6, bpTime7, bpCam6, bpCam5); // 0
            } else if (audioCurrentTime >= bpTime7 && audioCurrentTime < bpTime8){
                // body.visible = true;
                scene.fog.density = 0 //scale(audioCurrentTime, bpTime1, bpTime2, .001, .006); // 0
                camera.position.z = scale(audioCurrentTime, bpTime7, bpTime8, bpCam5, bpCam0); // 0
            }
        }

        if (/Mobi/.test(navigator.userAgent)) {
            // document.getElementById("currentTime").innerHTML = "Mobile";
            mandala.rotation.y += .01;
            mandala.rotation.z += .005;
            // speedRot=.03;
            // speedW = speedW/5;
        }else{
            // speedRot=.005;
            // speedY=(mouseY*1*ddd);
            // waveY=-(ddd*17000)*Math.sin(angle*2);
            // camera.position.y = waveY-speedY*300;
            // camera.position.x = x * Math.cos(speedW) + z * Math.sin(speedW);
            // camera.position.z = z * Math.cos(speedW) - x * Math.sin(speedW);
            cluster.rotation.x -= speedY/60;
            cluster.rotation.y -= mouseRealX/90000;
            // console.log(cluster.rotation.y)
            // prevSpeedY = speedY;
        }
    }
   

    // console.log(mouse)


   
    if (flashy >= 1.6){
        if (audioCurrentTime > prevBeat + .1){    
        }
        prevBeat = audioCurrentTime;
    }



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
        if (audioCurrentTime < 5){
            flashy = scale(audioCurrentTime, 0, 5, 1, .7); // 0
        }else {
            flashy = .5;
        }        
    }
    prevFlash = flashy;

    // console.log(data, data*data*data);
    if (audioCurrentTime < bpTime4 && finito == 0){
        renderer.toneMappingExposure = flashy*flashy;
    } else{
        renderer.toneMappingExposure = flashy/3;
    }

    if (gameState > 3 && clickBeat == 1){
        renderer.toneMappingExposure = renderer.toneMappingExposure * 4;
    }
    if (gameState > 2 && dragging == 1){
        dragLong += .05;
        renderer.toneMappingExposure = renderer.toneMappingExposure * dragLong;
    }
     document.getElementById("checkText").innerHTML = speedW+'<br>'+mouseX+'<br>'+mouseRealX;
    // marker.rotation.y+=.01;
    // clonerMarker.rotation.y+=.01;
    clonerMarker2.rotation.z+=.004;
    // clonerMarker2b.rotation.z+=.004;
    // clonerMarker3.rotation.z+=.004;

    // prevWaveY
    prevMouseX = mouseX;
    prevMouseY = mouseY;
    // flatT.lookAt(camera.position);
    // prevWaveY = waveY;
    // console.log(camera.rotation);
    
    // camera.lookAt(scene.position);
    
    composer.render(scene, camera);
    stats.update();
}
