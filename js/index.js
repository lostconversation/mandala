// state vars
var gameState = 0;
// var beginPause = 1; // 0 on "ready for play"
// var beginZoom = 0; // 1 startApp - 2 "GO!"
var beginHover;
var beginInfo = 0;
// var timeBegin;
var finito = 0;
var firstClick = 0;
var beginClick = 0;
// var analyser, data;
var flashy = 1;
var prevFlash = 1;
var dragging = 0;
var pause = 1;
// var spinning = 0;
// var sR = 1;
var camera, controls, scene, stats, renderer, geometry;
var angle = 0;
var pointLight;
var composer, mixer;
var params = {
	exposure: 1.1,
	bloomThreshold: .2,
	bloomStrength: .7,
	bloomRadius: 1,
	noise: .4,
	vignetteOffset: .3,
	vignetteDarkness: 1
};
var uniforms;
var uiStats = 0;
var counter = 0;
// var coreYes = 1;
// var prevAngle = 0;
// var fov, zoom, inc;
// var camSpeed = 1;
// var postprocessing = {};
var mainTitle = "MANDALA"
var title = "THE EYE OF THE MIND";
var payoff, payoff2;
// var countDown = 10;
// var audioSfx = document.createElement('audio');
// audioSfx.src = 'audio/sfx.mp3';
var AudioContext;
var audioCtx;
var listener, audioLoader, audio, analyser, audioPrevTime = 0, audioCurrentTime = 0, audioWaitingTime, songLoops = 0;
var musicLoaded = 0;
var audioSfx1 = document.createElement('audio');
audioSfx1.src = 'audio/sfx1/11.mp3';
var audioSfx2 = document.createElement('audio');
audioSfx2.src = 'audio/sfx1/12.mp3';
var audioSfx3 = document.createElement('audio');
audioSfx3.src = 'audio/sfx1/13.mp3';
var audioSfx4 = document.createElement('audio');
audioSfx4.src = 'audio/sfx1/14.mp3';
var audioSfx5 = document.createElement('audio');
audioSfx5.src = 'audio/sfx1/15.mp3';
// var audioSfx6 = document.createElement('audio');
// audioSfx6.src = 'audio/sfx1/06.mp3';
var audioSfxLong = document.createElement('audio');
audioSfxLong.src = 'audio/Long.mp3';
var dragLong = 1;
var knotCount = 0;
// var btnHover = document.getElementById("btnHover").style;
// var btnHoverOpac, btnHoverScale;
var prevMouseX=0;
var prevMouseY=0;
// var prevWaveY=0;
// var waveY;
var mouseRealX;
var mouseRealY;
var followMouse;
var loadingText;
// var dragAround; 
var camBegin = 120000;

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var hoverObjects = [];
var intersects;

var sfxToggle=1;
var prevSfx;
var clickBeat = 0;
var speedY, speedW, delta;
// var prevSpeedY = 0;
var prevBeat = 0;
var introBeat = 0;
var downMouseX, downMouseY;
var mylatesttap;
var elem = document.getElementById("myBar"); 

var streamBarId;
var audioPercentage;
var streamBarWidth = 0;

var color1 = 0xe6430a;
var color2 = 0xf40696;
var color4 = 0x07184e;
var colorBG = 0x020b10;
var beginFog = .000005;
// var finalCoreSize = 1;
var matOut;
var cluster;
// loop vars

var kSize=400;
var kThick= 8;
var ks1=155;
var ks2=8;
var kP=154;
var kQ=66;

var bpCam0 = 150000;
var bpCam1 = 2000;
var bpCam1b = 900;
var bpCam2 = 300;
var bpCam3 = 7;
var bpCam4 = 2.8;
var bpCam5 = .021;
var bpCam6 = .007;
// var bpCam7 = .007;

var bpTime0 = 4;
var bpTime1 = 11;
var bpTime1b = 23;
var bpTime2 = 59;
var bpTime3 = 71;
var bpTime4 = 83;
var bpTime5 = 107;
var bpTime6 = 119;
var bpTime7 = 121;
var bpTime8 = 137;
var sfxNum = 0;
var loadedObjs = 0;
let loader = [];
// var objects = [];

var oldX = Math.PI/2; // rotation of the knot

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


// retina screen check

var retinaCheck, www, hhh;
var query = "(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)";

if (matchMedia(query).matches) {
  // do high-dpi stuf
  retinaCheck = 2;
  www = window.innerWidth/2;
  hhh = window.innerHeight/2;

} else {
  // do non high-dpi stuff
  retinaCheck = 1;
  www = window.innerWidth;
  hhh = window.innerHeight;
}


window.onerror = function() {
	// location.reload();
	document.getElementById("backup").style.backgroundImage = 'url("backup.jpg")';
	document.getElementById("container").remove();
	document.getElementById("loading").classList.remove("blink_me");
	document.getElementById("loading").style.top = 'calc(50% - 70px)';
	document.getElementById("loading").style.opacity = 1;
	document.getElementById("loading").style.fontSize = '16px';
	document.getElementById("loading").style.lineHeight = '6px';
	document.getElementById("loading").innerHTML = ("INTRO NOT LOADING, <br><br><br><br>MAYBE CHANGE BROWSER? <br><br><br><br><br> OR RELOAD THE PAGE");
	document.getElementById("loading").style.pointerEvents = "all";
	document.getElementById("loading").style.touchAction = "all";
	document.getElementById("infoPage").style.opacity= 1;
	document.getElementById("infoPage").style.pointerEvents = 'all';
	document.getElementById("infoPage").style.touchAction = 'all';
	document.getElementById("infoBtn").innerHTML = 'X';
	document.getElementById("infoBtn").style.paddingRight = '27px';
	document.getElementById("infoBegin").innerHTML = 'X';
	return true;
};

window.addEventListener("load",function() {
	// Set a timeout...
	setTimeout(function(){
		// Hide the address bar!
		window.scrollTo(0, 1);
	}, 0);
});
if (window.PointerEvent) {
	document.getElementById('container').addEventListener( 'pointerdown', onDown, false);
} else {
	document.getElementById('container').addEventListener( 'mousedown', onDown, false);
}
document.getElementById('container').addEventListener( 'mousemove', onDocumentMouseMove, false);
document.getElementById('container').addEventListener( 'mouseup', oneClick, false);
document.getElementById('container').addEventListener( 'dblclick', doubleClick, false);
document.getElementById('container').addEventListener( 'touchstart', function( event ){
	event.preventDefault();
}, false);
document.getElementById('container').addEventListener( 'touchmove', function( event ){
	event.preventDefault();
}, false);
document.getElementById('container').addEventListener( 'touchend', function( event ){
	oneClick();
	event.preventDefault();
}, false);
document.onmouseout = function() {
		mouseX=prevMouseX;
		mouseY=prevMouseY;
	};
window.addEventListener('resize', onWindowResize, false);
document.addEventListener("DOMContentLoaded", function(event) {
	
	mouseX = 0, mouseY = 0;
	windowHalfX = www / 2;
	windowHalfY = hhh / 2;
	followMouse = document.getElementById('follower');
	loadingText = document.getElementById('loading');
	mouseRules = document.getElementById('mouseRules');

	// document.getElementById('container').addEventListener("touchstart", (event) => {
	// 	const onTouchMove = () => {
	//         // handle touchmove here
	//         dragCheck();
	//     }
	//     const onTouchEnd = () => {
	//     	event.target.removeEventListener("touchmove", onTouchMove);
	//     	// event.target.removeEventListener("touchend", onTouchEnd);
	//         // handle touchend here
	//         event.preventDefault();
	//         oneClick();
	//         // this.dragAround = dragAround;
	//         // clearInterval(dragAround);
	//         // console.log(dragAround)
	//     }
	//     event.target.addEventListener("touchmove", onTouchMove);
	//     // event.target.addEventListener("touchend", onTouchEnd);
	//     // handle touchstart here
	//     event.preventDefault();
	// });
	// document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	// document.addEventListener( 'keydown', keydown, false);
	
	// document.getElementById('container').addEventListener( 'click', oneClick, false);
	

	setTimeout(function () {
	  window.scrollTo(0, 1);
	}, 1000);

	init();
	// loadBrain();
	// soundLoad();
});






function init() {
	
	clock = new THREE.Clock();
	scene = new THREE.Scene();
	scene.background = new THREE.Color(colorBG);
	scene.fog = new THREE.FogExp2( 0x0e0e0e, .0000045 );
	renderer = new THREE.WebGLRenderer({
		antialias: true
	});
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(www, hhh);
	var container = document.getElementById('container');
	container.appendChild(renderer.domElement);
	stats = new Stats();
	container.appendChild( stats.dom );
	var st = document.getElementById('statsDiv').style.visibility='hidden'; 
	camera = new THREE.PerspectiveCamera(80, www / hhh, .006, 20000000);
	camera.position.z = camBegin;
	if (/Mobi/.test(navigator.userAgent)) {
		// document.documentElement.requestFullscreen();
		controls = new THREE.DeviceOrientationControls( camera, renderer.domElement );
	} else {
		controls = new THREE.TrackballControls(camera, renderer.domElement); 
	}

	controls.minDistance = 60000;
	controls.maxDistance = camBegin+80000;

	var renderScene = new THREE.RenderPass( scene, camera );

	composer = new THREE.EffectComposer( renderer );
	composer.setSize( window.innerWidth, window.innerHeight );
	composer.addPass( renderScene );

	var bloomPass = new THREE.UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
	bloomPass.radius = params.bloomRadius;

	filmPass = new THREE.ShaderPass(THREE.FilmShader);
	this.filmPass = filmPass;
	filmPass.uniforms["grayscale"].value = 0;
	filmPass.uniforms["nIntensity"].value = params.noise;
	filmPass.uniforms["sIntensity"].value = .5;
	filmPass.uniforms["sCount"].value = 444;


	// simplified
	// var effectFilm = new THREE.FilmPass( .8, .2, 444, false );
	// composer.addPass( effectFilm );
	

	var effectVignette = new THREE.ShaderPass(THREE.VignetteShader);
	this.effectVignette = effectVignette;
	effectVignette.uniforms[ "offset" ].value = params.vignetteOffset;
	effectVignette.uniforms[ "darkness" ].value = params.vignetteDarkness;
	

	if (/Mobi/.test(navigator.userAgent)) {
		// controls.noZoom = true;
		// controls.noPan = true;
		// controls.noRotate = true;
		renderer.toneMappingExposure = Math.pow( 1.1, 4.0 );
		bloomPass.threshold = .1;
		bloomPass.strength = 1;
		composer.addPass( bloomPass );
		bloomPass.renderToScreen = true;
	}else{
		// controls.noZoom = true;
		controls.noPan = true;
		controls.noRotate = true;
		renderer.toneMappingExposure = Math.pow( params.exposure, 4.0 );
		bloomPass.threshold = params.bloomThreshold;
		bloomPass.strength = params.bloomStrength;
		composer.addPass( filmPass );
		composer.addPass( effectVignette );
		composer.addPass( bloomPass );
		bloomPass.renderToScreen = true;
	}


 	// renderScene.renderToScreen = true;



	// lights
	cluster = new THREE.Object3D();
	cluster.name="cluster";
	scene.add(cluster);


	var sphereLight = new THREE.SphereGeometry( 111, 16, 8 );

	directionalLight1 = new THREE.PointLight( color1, 12);
	directionalLight1.position.set(0, 500, 500);
	// directionalLight1.add( new THREE.Mesh( sphereLight, new THREE.MeshBasicMaterial( { color: color1 } ) ) );
	cluster.add( directionalLight1 );
	
	

	directionalLight2 = new THREE.PointLight( color1, 7);
	// directionalLight2.position.set(-350, 0, -1600); // position 000
	// directionalLight2.add( new THREE.Mesh( sphereLight, new THREE.MeshBasicMaterial( { color: color1 } ) ) );
	cluster.add( directionalLight2 );

	directionalLight3 = new THREE.PointLight( color2, 8);
	directionalLight3.position.set(650, 0, 0);
	// directionalLight3.add( new THREE.Mesh( sphereLight, new THREE.MeshBasicMaterial( { color: color2 } ) ) );
	cluster.add( directionalLight3 );

	directionalLight4 = new THREE.PointLight( color4, 10);
	directionalLight4.position.set(-350, 0, -1600);
	// directionalLight4.add( new THREE.Mesh( sphereLight, new THREE.MeshBasicMaterial( { color: color4 } ) ) );
	cluster.add( directionalLight4 );

	mandala = new THREE.Object3D();
	mandala.name="mandala"
	// cluster.rotation.y=Math.PI/2;
	cluster.add(mandala);

	createCore();
	createKnot_1();
	createKnot_2();
	createKnot_3();
	

	var geometryBG = new THREE.IcosahedronGeometry( 3333, 1); //r72
	var materialBG = new THREE.MeshBasicMaterial( { color: 0x34c4b5, transparent: true, opacity: .03, wireframe: true, fog: false } );
	var bg = new THREE.Mesh( geometryBG, materialBG );
	bg.name="bg";
	// boolen.position.y=1;
	cluster.add( bg );



	document.getElementById("loading").innerHTML = "LOADING";
	

	
	// readyForPlay();
	document.getElementById('container').click();
	soundLoad();

} // end init

function createCore(){
	var coreBig = 3;
	var geometry1 = new THREE.IcosahedronGeometry( coreBig, 2 ); //BLACK
	// var geometry = new THREE.SphereGeometry( 2, 44, 3 );
	var material1 = new THREE.MeshPhongMaterial( { color: 0x000000, transparent: true, opacity: .8, flatShading: true, side: THREE.DoubleSide } );
	var core = new THREE.Mesh( geometry1, material1 );
	core.name="core";
	// boolen.position.y=1;
	mandala.add( core );
	// this.core = core;

	var geometry1w = new THREE.IcosahedronGeometry( coreBig*1.1, 1 ); //BLACK wireframe
	var mat = new THREE.MeshBasicMaterial( { color: color2, transparent:true, opacity: .1, wireframe: true  } );
	var coreW1 = new THREE.Mesh( geometry1w, mat );
	coreW1.name="coreW1";
	// boolen.position.y=1;
	core.add( coreW1 );

	var finalCoreGeo = new THREE.SphereGeometry( coreBig*.0015, 88, 88 ); //chromatic
	var matCore = new THREE.MeshPhongMaterial( { color: color4, transparent:false, side: THREE.DoubleSide, wireframe: false  } );
	finalCore = new THREE.Mesh( finalCoreGeo, matCore );
	// console.log(finalCore.scale.x)
	finalCore.name="finalCore";
	core.add( finalCore );

	

	finalCore1 = finalCore.clone(); // eyes at the end
	finalCore1.name = "finalCore1";
	core.add( finalCore1 );
	finalCore1.scale.set(1.2,1.2,1.2);

	finalCore2 = finalCore.clone();
	finalCore2.name = "finalCore2";
	core.add( finalCore2 );
	finalCore2.scale.set(1.4,1.4,1.4);

	finalCore3 = finalCore.clone();
	finalCore3.name = "finalCore3";
	core.add( finalCore3 );
	finalCore3.scale.set(1.6,1.6,1.6);

	finalCore5 = finalCore.clone();
	finalCore5.name = "finalCore5";
	core.add( finalCore5 );
	finalCore5.scale.set(2.5,2.5,2.5);

	finalCore6 = finalCore.clone();
	finalCore6.name = "finalCore6";
	core.add( finalCore6 );
	finalCore6.scale.set(3.31,3.31,3.31);


	

	var finalCoreBlackGeo = new THREE.SphereGeometry( coreBig*.00005, 32, 32 ); //black smallest
	var matBlack = new THREE.MeshBasicMaterial( { color: colorBG, transparent:true, opacity: .7, side: THREE.DoubleSide, wireframe: false  } );
	finalCoreBlack = new THREE.Mesh( finalCoreBlackGeo, matBlack );
	finalCoreBlack.name="finalCoreBlack";
	// boolen.position.y=1;
	finalCore.add( finalCoreBlack );


	finalCoreBlack2 = core.clone();
	finalCoreBlack2.name = "finalCoreBlack2";
	finalCore.add( finalCoreBlack2 );
	finalCoreBlack2.scale.set(.005,.005,.005);

	finalCoreBlack3 = core.clone();
	finalCoreBlack3.name = "finalCoreBlack3";
	finalCore.add( finalCoreBlack3 );
	finalCoreBlack3.scale.set(.003,.003,.003);


	var coreOutGeo = new THREE.SphereGeometry( coreBig*23000, 66, 66, 0, Math.PI * 2, 0, Math.PI / 2 ); //r72
	matOut = new THREE.MeshPhongMaterial( { color: color4, transparent:true, opacity: .2, side: THREE.DoubleSide, wireframe: false  } );
	coreOut = new THREE.Mesh( coreOutGeo, matOut );
	coreOut.name="coreOut";
	coreOut.rotation.x = -Math.PI/2;
	coreOut.position.z = -100000;
	// coreOut.scale.set(1.3,2,1.3)
	coreOut.scale.set(4,2,4)
	// boolen.position.y=1;
	mandala.add( coreOut );
	

	var finalCoreBlackOutGeo = new THREE.TorusGeometry( coreBig*18000, coreBig*11000, 2, 88 ); //r72
	// var matBlack = new THREE.MeshBasicMaterial( { color: color4, transparent:true, opacity: .7, side: THREE.DoubleSide, wireframe: false  } );
	finalCoreBlackOut = new THREE.Mesh( finalCoreBlackOutGeo, matBlack );
	finalCoreBlackOut.name="finalCoreBlackOut";
	finalCoreBlackOut.position.z = -35000
	// boolen.position.y=1;
	mandala.add( finalCoreBlackOut );
	hoverObjects.push( finalCoreBlackOut );

	

		var clonerMarker = new THREE.Group();
		// scene.add( clonerMarker );

		var markerGeo = new THREE.TetrahedronBufferGeometry( 1444, 0 );
		var matCoreMarker = new THREE.MeshNormalMaterial( { transparent:true, opacity:.7, side: THREE.DoubleSide, wireframe: false  } );
		var marker = new THREE.Mesh( markerGeo, matCoreMarker );
		this.matCoreMarker = matCoreMarker;
		marker.name="marker";
		marker.scale.set(1,1,.3);
		clonerMarker.add( marker );
		marker.position.set(0,500,camBegin+99000)

		var clonerMarkers = [];
		for (i = 0; i <7; i++) { 
			clonerMarkers[i] = clonerMarker.clone();
			clonerMarkers[i].rotation.y=Math.PI/20*(i-3);
			clonerMarkers[i].rotation.x=Math.PI*.03*(i-3);
			clonerMarkers[i].position.y=80000*(i-3);
			clonerMarkers[i].position.x=-3000*(i-3);
			clonerMarker.add( clonerMarkers[i] );
		}

		var clonerMarker2 = new THREE.Group();
		scene.add( clonerMarker2 );

		var clonerMarkers2 = [];
		for (i = 0; i < 8; i++) { 
			clonerMarkers2[i] = clonerMarker.clone();
			clonerMarkers2[i].rotation.z=Math.PI/3*(i-4);
			// clonerMarkers2[i].position.y=80000*(i-4);
			// clonerMarkers2[i].rotation.z=Math.PI/7*(i-4);
			clonerMarker2.add( clonerMarkers2[i] );
		}

		this.marker = marker;
		this.clonerMarker = clonerMarker;
		this.clonerMarker2 = clonerMarker2;



		if (/Mobi/.test(navigator.userAgent)) {
		} else {
			clonerMarker2.visible = false;
			// clonerMarker2b.visible = false;
		}

}


function createKnot_1(){
	var geometryKnot = new THREE.TorusKnotGeometry(kSize, kThick, ks1, ks2, kP, kQ);
	var materialKnot = new THREE.MeshPhongMaterial({color: color1, flatShading: true, side: THREE.DoubleSide, wireframe:false, transparent:true, opacity: .2,
		polygonOffset: true,
		polygonOffsetFactor: 1, // positive value pushes polygon further away
		polygonOffsetUnits: 1
	});

	knot1 = new THREE.Mesh( geometryKnot, materialKnot );
	knot1.name = "knot1";
	mandala.add( knot1 );
	knot1.rotation.x = Math.PI/2;
	knot1.rotation.z = 1;
	var geo = new THREE.EdgesGeometry( knot1.geometry ); // or WireframeGeometry
	var matLine = new THREE.LineBasicMaterial( { color: color2, transparent:true, opacity: .2 } );
	var wireframe = new THREE.LineSegments( geo, matLine );
	knot1.add( wireframe );

}

function createKnot_2(){
	var geometryKnot = new THREE.TorusKnotGeometry(kSize*100, kThick*10, ks1, ks2, kP, kQ);
	var materialKnot = new THREE.MeshBasicMaterial({color: color1, flatShading: true, side: THREE.DoubleSide, wireframe:false, transparent:true, opacity: .2,
		polygonOffset: true,
		polygonOffsetFactor: 1, // positive value pushes polygon further away
		polygonOffsetUnits: 1
	});

	knot2 = new THREE.Mesh( geometryKnot, materialKnot );
	knot2.name = "knot2";
	mandala.add( knot2 );
	// knot2.rotation.x = Math.PI/2;

	var geo = new THREE.EdgesGeometry( knot2.geometry ); // or WireframeGeometry
	var matLine = new THREE.LineBasicMaterial( { color: color1, transparent:true, opacity: .8 } );
	var wireframe = new THREE.LineSegments( geo, matLine );
	knot2.add( wireframe );

	knot2b = knot2.clone();
	knot2b.name = "knot2b";
	finalCore.add( knot2b );
	knot2b.rotation.x = 0;
	knot2b.scale.set(.00004,.00004,.00004);


}

function createKnot_3(){
	var geometryKnot = new THREE.TorusKnotGeometry(kSize/3000, kThick/6000, ks1, ks2, kP, kQ);
	var materialKnot = new THREE.MeshBasicMaterial({color: colorBG, flatShading: true, side: THREE.DoubleSide, wireframe:false, transparent:true, opacity: .4,
		polygonOffset: true,
		polygonOffsetFactor: 1, // positive value pushes polygon further away
		polygonOffsetUnits: 1
	});

	knot3 = new THREE.Mesh( geometryKnot, materialKnot );
	knot3.name = "knot3";
	finalCore.add( knot3 );
	knot3.rotation.x = Math.PI/2;

	var geo = new THREE.EdgesGeometry( knot3.geometry ); // or WireframeGeometry
	var matLine = new THREE.LineBasicMaterial( { color: colorBG, transparent:true, opacity: .8 } );
	var wireframe = new THREE.LineSegments( geo, matLine );
	knot3.add( wireframe );

	knot4 = knot3.clone();
	knot4.name = "knot4";
	finalCore.add( knot4 );
	knot4.rotation.x = 0;
	knot4.scale.set(.008,.008,.008);

}




