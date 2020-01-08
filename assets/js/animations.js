if ( document.getElementById('anim-lines')) {
	var anim1;
	var animData1 = {
			container: document.getElementById('anim-lines'),
			renderer: 'svg',
			loop: true,
			autoplay: true,
			rendererSettings: {
				progressiveLoad: false
			},
			path:'../json/anim-lines.json'
	};
	anim1 = bodymovin.loadAnimation(animData1);
	anim1.setSpeed(1);
};

if (document.getElementById('anim-white')) {
	var anim2;
	var animData2 = {
			container: document.getElementById('anim-white'),
			renderer: 'svg',
			loop: true,
			autoplay: true,
			rendererSettings: {
				progressiveLoad: false
			},
			path:'../json/anim-white.json'
	};
	anim2 = bodymovin.loadAnimation(animData2);
	anim2.setSpeed(0.5);
};

if(document.getElementById('anim-sphere')) {
	var anim3;
	var animData3 = {
			container: document.getElementById('anim-sphere'),
			renderer: 'svg',
			loop: true,
			autoplay: true,
			rendererSettings: {
				progressiveLoad: false
			},
			path:'../json/anim-sphere.json'
	};
	anim3 = bodymovin.loadAnimation(animData3);
	anim3.setSpeed(0.5);
};

if(document.getElementById('anim-header')) {
	var anim4;
	var animData4 = {
			container: document.getElementById('anim-header'),
			renderer: 'svg',
			loop: true,
			autoplay: true,
			rendererSettings: {
				progressiveLoad: false
			},
			path:'../json/anim-header.json'
	};
	anim4 = bodymovin.loadAnimation(animData4);
	anim4.setSpeed(1);
};