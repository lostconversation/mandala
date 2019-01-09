function loadBrain(){

// var geometry = new THREE.PlaneGeometry( 6000, 6000 );
// var materialINV = new THREE.MeshBasicMaterial( { color: 0xffffff, transparent: true, opacity: 0.3, alphaTest: 0, visible: false } );
// flatT = new THREE.Mesh( geometry, materialINV );
// flatT.lookAt(camera.position);
// flatT.name="flatTarget";
// scene.add( flatT );
// flatTarget.push(flatT)

body = new THREE.Object3D();
body.name="body"
// cluster.rotation.y=Math.PI/2;
cluster.add(body);
// body.position.z = -20000
// body.position.z = 30000;
body.position.y = 40000;
// body.visible=false;
body.rotation.x = -.1;
body.scale.set(.7,.6,.5);

var material1 = new THREE.MeshBasicMaterial( { flatShading: false, color: 0xe6430a, transparent:true, opacity: .6, wireframe: true  } ); //blue
var matBrain = new THREE.MeshLambertMaterial( { flatShading: false, color: 0xe6430a, transparent: true, opacity: .007, premultipliedAlpha: true  } );// rosa 0xec6078
var matCavity = new THREE.MeshStandardMaterial( { flatShading: false, color: 0xe6430a, transparent: false, opacity: 1, premultipliedAlpha: true  } );
var matEyes = new THREE.MeshPhongMaterial( { flatShading: false, color: 0x561e08, transparent: true, opacity: .06, premultipliedAlpha: false, wireframe: true, side: THREE.BackSide  } );
var matNerves = new THREE.MeshStandardMaterial( { flatShading: false, color: 0xe6430a, transparent:true, opacity: .1, premultipliedAlpha: true  } );
var matSkeleton = new THREE.MeshStandardMaterial( { flatShading: false, color: 0x06f4b9, transparent:true, opacity: .06, premultipliedAlpha: true  } );
var matBody = new THREE.MeshStandardMaterial( { flatShading: false, color: 0x00304c, transparent:true, opacity: .07, premultipliedAlpha: true, side: THREE.BackSide  } );
this.material1 = material1;

var ooo=0;


// loader[0] = new THREE.OBJLoader( );
//         loader[0].load( '3d/01_Brain1_big.obj', function ( object ) {
//           object.traverse( function ( child ) {
//         if ( child instanceof THREE.Mesh ) {
//             child.material = matBrain;
//             // ooo+=1;
//             // console.log(ooo)
//         }
//     } );
//           // object.position.x=10;
          
//         // object.rotation.y = 80.1;
//         object.name="0";
//         // cluster.add( object );
//         // objects.push( object );

// });

loader[1] = new THREE.OBJLoader( );
        loader[1].load( '3d/01_Brain1_big2.obj', function ( object ) {
          object.traverse( function ( child ) {
        if ( child instanceof THREE.Mesh ) {
            child.material = matBrain;
            // ooo+=1;
        }
    } );
          // object.position.x=10;
          
        // object.rotation.y = 80.1;
        object.name="1";
        // body.add( object );
        // objects.push( object );

});

loader[2] = new THREE.OBJLoader( );
        loader[2].load( '3d/02_Cavity_big2.obj', function ( object ) {
          object.traverse( function ( child ) {
        if ( child instanceof THREE.Mesh ) {
            child.material = matCavity;
            // ooo+=1;
        }
    } );
          // object.position.z=10;
          // object.position.x=10;
        // object.rotation.y = 80.01;
        object.name="2";
        // body.add( object );
        // objects.push( object );
});

loader[3] = new THREE.OBJLoader( );
        loader[3].load( '3d/03_Eyes_big2.obj', function ( object ) {
          object.traverse( function ( child ) {
        if ( child instanceof THREE.Mesh ) {
            child.material = matEyes;
            child.material.needsUpdate = true;
            // ooo+=1;
        }
    } );
          // object.position.x=10;
          
        // object.rotation.y = 80.1;
        object.name="3";
        body.add( object );
        // objects.push( object );

});




// loader[4] = new THREE.OBJLoader( );
//         loader[4].load( '3d/04_Nervous_big2.obj', function ( object ) {
//           object.traverse( function ( child ) {
//         if ( child instanceof THREE.Mesh ) {
            
//             // child.material.opacity=.1;
//             child.material = matNerves;
//             // ooo+=1;
//         }
//     } );
//         // object.rotation.y = 80;
//         object.name="4";
//         // object.material.opacity=.3;
//         // body.add( object );
//         // objects.push( object );
// });

// loader[5] = new THREE.OBJLoader( );
//         loader[5].load( '3d/05_Skeleton_big2.obj', function ( object ) {
//           object.traverse( function ( child ) {
//         if ( child instanceof THREE.Mesh ) {
            
//             // child.material.opacity=.1;
//             child.material = matSkeleton;
//             // ooo+=1;
//             // ooo+=1;
//             // console.log(ooo)
//         }
//     } );
//         // object.rotation.y = 80;
//         object.name="5";
//         // object.material.opacity=.3;
//         // body.add( object );
//         // objects.push( object );
// });

var loader6 = new THREE.OBJLoader( );
        loader6.load( '3d/06_Body3.obj', function ( object ) {
          object.traverse( function ( child ) {
        if ( child instanceof THREE.Mesh ) {
            
            child.material.opacity=.1;
            child.material = matBody;
            // ooo+=1;
        }
    } );
        // object.rotation.y = 80;
        object.name="6";
        // object.material.opacity=.3;
        body.add( object );
        // objects.push( object );
});







}