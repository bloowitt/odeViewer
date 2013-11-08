
function renderManager(pContainer){
	var container = document.getElementById('OVview');
	var camera, controls, scene, renderer, objects, dae;

	var loader = new THREE.ColladaLoader();
	loader.options.convertUpAxis = true;
	var colData = loader.load( '../objects/02.dae',
	function ( collada ) {

		dae = collada.scene;
		//skin = collada.skins[ 0 ];

		//dae.scale.set(120,120,120);
		//dae.updateMatrix();

		init();
		animate();

	} );

	function init() {


		

		camera = new THREE.OrthographicCamera( window.innerWidth / - 200, window.innerWidth / 200, window.innerHeight / 200, window.innerHeight / - 200, -500, 1000 );
		camera.position.x = 100;
		camera.position.y = 100;
		camera.position.z = 100;
		camera.lookAt(0,0.5,0);
		scene = new THREE.Scene();

		// Grid

		var size = 15, step = 1;

		var geometry = new THREE.Geometry();

		for ( var i = - size; i <= size; i += step ) {

			geometry.vertices.push( new THREE.Vector3( - size, 0, i ) );
			geometry.vertices.push( new THREE.Vector3(   size, 0, i ) );

			geometry.vertices.push( new THREE.Vector3( i, 0, - size ) );
			geometry.vertices.push( new THREE.Vector3( i, 0,   size ) );

		}

		var material = new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } );

		var line = new THREE.Line( geometry, material );
		line.type = THREE.LinePieces;
		scene.add( line );
		/**/

		
		
		scene.add(dae);
		
		


		

		
		var directionalLight = new THREE.DirectionalLight( 0xFF0000 );
		directionalLight.position.x = 0;
		directionalLight.position.y = 1;
		directionalLight.position.z = 0;
		directionalLight.position.normalize();

		
		var directionalLight2 = new THREE.DirectionalLight( 0xFF0000 );
		directionalLight2.position.x = 0;
		directionalLight2.position.y = -1;
		directionalLight2.position.z = 0;
		directionalLight2.position.normalize();
		
		var directionalLight3 = new THREE.DirectionalLight( 0x00FF00 );
		directionalLight3.position.x = 0;
		directionalLight3.position.y = 0;
		directionalLight3.position.z = -1;
		directionalLight3.position.normalize();
		
		var directionalLight4 = new THREE.DirectionalLight( 0x00FF00 );
		directionalLight4.position.x = 0;
		directionalLight4.position.y = 0;
		directionalLight4.position.z = 1;
		directionalLight4.position.normalize();
		
		var directionalLight5 = new THREE.DirectionalLight( 0x0000FF );
		directionalLight5.position.x = -1;
		directionalLight5.position.y = 0;
		directionalLight5.position.z = 0;
		directionalLight5.position.normalize();
		
		var directionalLight6 = new THREE.DirectionalLight( 0x0000FF );
		directionalLight6.position.x = 1;
		directionalLight6.position.y = 0;
		directionalLight6.position.z = 0;
		directionalLight6.position.normalize();
		
		scene.add( directionalLight );
		scene.add( directionalLight2 );
		scene.add( directionalLight3 );
		scene.add( directionalLight4 );
		scene.add( directionalLight5 );
		scene.add( directionalLight6 );
		
		renderer = new THREE.CanvasRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight );

		container.appendChild( renderer.domElement );

		window.addEventListener( 'resize', onWindowResize, false );
		document.addEventListener( 'keydown', onKeyDown, false );
		
		controls = new THREE.OrbitControls(camera);
		controls.rotateSpeed = 1.0;
		controls.zoomSpeed = 1.2;
		controls.panSpeed = 0.8;

		controls.noZoom = false;
		
		controls.dynamicDampingFactor = 0.3;


		controls.addEventListener( 'change', render );
	}

	function onKeyDown ( event ) {
		
		
		switch( event.keyCode ) {
			
		case 49: /*1*/
			//controls.reset();
			camera.position.x = 0;
			camera.position.y = 150;
			camera.position.z = 0;
			break;
		case 50: /*2*/
			//controls.reset();
			camera.position.x = 0;
			camera.position.y = 0;
			camera.position.z = -150;
			break;
		case 51: /*3*/
			//controls.reset();
			camera.position.x = -150;
			camera.position.y = 0;
			camera.position.z = 0;
			break;
		case 52: /*4*/
			//controls.reset();
			camera.position.x = 100;
			camera.position.y = 100;
			camera.position.z = 100;
			break;
		}
		render();
	};

	function onWindowResize() {

		camera.left = window.innerWidth / - 2;
		camera.right = window.innerWidth / 2;
		camera.top = window.innerHeight / 2;
		camera.bottom = window.innerHeight / - 2;
		
		renderer.setSize( window.innerWidth, window.innerHeight );
		//controls.handleResize();
		render();

	}

	//

	function animate() {

		requestAnimationFrame( animate );
		controls.update();

		render();

	}

	function render() {

		renderer.render( scene, camera );

	}
}
