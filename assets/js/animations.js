if ( document.getElementById('anim-lines')) {
	var anim;
	var animData = {
			container: document.getElementById('anim-lines'),
			renderer: 'svg',
			loop: true,
			autoplay: true,
			rendererSettings: {
				progressiveLoad: false
			},
			path:'../json/anim-lines.json'
	};
	anim = bodymovin.loadAnimation(animData);
	anim.setSpeed(1);
};

if (document.getElementById('anim-white')) {
	var anim;
	var animData = {
			container: document.getElementById('anim-white'),
			renderer: 'svg',
			loop: true,
			autoplay: true,
			rendererSettings: {
				progressiveLoad: false
			},
			path:'../json/anim-white.json'
	};
	anim = bodymovin.loadAnimation(animData);
	anim.setSpeed(0.5);
};

if(document.getElementById('anim-sphere')) {
	var anim;
	var animData = {
			container: document.getElementById('anim-sphere'),
			renderer: 'svg',
			loop: true,
			autoplay: true,
			rendererSettings: {
				progressiveLoad: false
			},
			path:'../json/anim-sphere.json'
	};
	anim = bodymovin.loadAnimation(animData);
	anim.setSpeed(0.5);
};

if(document.getElementById('anim-header')) {
	var anim;
	var animData = {
			container: document.getElementById('anim-header'),
			renderer: 'svg',
			loop: true,
			autoplay: true,
			rendererSettings: {
				progressiveLoad: false
			},
			path:'../json/anim-header.json'
	};
	anim = bodymovin.loadAnimation(animData);
	anim.setSpeed(1);
};