var anim;
var animData = {
  container: document.getElementById('preloader'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  rendererSettings: {
      progressiveLoad: false
  },
  path: '../json/preloader.json'
};
anim = bodymovin.loadAnimation(animData);
anim.setSpeed(1);