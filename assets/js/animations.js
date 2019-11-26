// if ( document.getElementById('patternLines')) {
	var anim;
	var animData = {
			container: document.getElementById('patternLines'),
			renderer: 'svg',
			loop: true,
			autoplay: true,
			rendererSettings: {
					progressiveLoad: false
			},
			path:'https://nclp.om/json/nclp_lines.json'
	};
	anim = bodymovin.loadAnimation(animData);
	anim.setSpeed(1);
// };

// if (document.getElementById('patternWhite')) {
	var anim;
	var animData = {
			container: document.getElementById('patternWhite'),
			renderer: 'svg',
			loop: true,
			autoplay: true,
			rendererSettings: {
					progressiveLoad: false
			},
			path:'https://nclp.om/json/nclp_pattern_white.json'
	};
	anim = bodymovin.loadAnimation(animData);
	anim.setSpeed(0.5);
// };

// if(document.getElementById('sphereWhite')) {
	var anim;
	var animData = {
			container: document.getElementById('sphereWhite'),
			renderer: 'svg',
			loop: true,
			autoplay: true,
			rendererSettings: {
					progressiveLoad: false
			},
			path:'https://nclp.om/json/nclp_sphere_white.json'
	};
	anim = bodymovin.loadAnimation(animData);
	anim.setSpeed(0.5);
// };