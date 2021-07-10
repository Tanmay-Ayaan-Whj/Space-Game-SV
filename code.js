var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a2499491-4dab-45d9-9ef2-ea2030f3742b","883a3511-40ae-4f12-b5b8-4c765dfd9750","6feae701-855b-455e-ab07-403d166172e3","c6720b4e-5bc6-41e6-a5be-5d7e73c7ef5a","09648a23-67b9-4047-abe1-64f884a66071"],"propsByKey":{"a2499491-4dab-45d9-9ef2-ea2030f3742b":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"883a3511-40ae-4f12-b5b8-4c765dfd9750":{"name":"spaceship","sourceUrl":"assets/api/v1/animation-library/gamelab/0U_SgMD3AShyz1QWKxeGi1T4z3qdtXv6/category_vehicles/enemyBlack1.png","frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"0U_SgMD3AShyz1QWKxeGi1T4z3qdtXv6","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0U_SgMD3AShyz1QWKxeGi1T4z3qdtXv6/category_vehicles/enemyBlack1.png"},"6feae701-855b-455e-ab07-403d166172e3":{"name":"burst","sourceUrl":"assets/api/v1/animation-library/gamelab/.Y.Pn9.jSzcFM0Uc4Z8wEY0nOJqLo1nU/category_video_games/burst10.png","frameSize":{"x":390,"y":330},"frameCount":1,"looping":true,"frameDelay":2,"version":".Y.Pn9.jSzcFM0Uc4Z8wEY0nOJqLo1nU","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":330},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.Y.Pn9.jSzcFM0Uc4Z8wEY0nOJqLo1nU/category_video_games/burst10.png"},"c6720b4e-5bc6-41e6-a5be-5d7e73c7ef5a":{"name":"stone","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"COhWDR02z8pJdu9WSWUJJ09ppT3NM8iq","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/c6720b4e-5bc6-41e6-a5be-5d7e73c7ef5a.png"},"09648a23-67b9-4047-abe1-64f884a66071":{"name":"shot","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ytb34b1B5_mAE4WbwFfO6lfig4KbFadl","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/09648a23-67b9-4047-abe1-64f884a66071.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg = createSprite(200,200);

var player = createSprite(200,350);

var obstacle = createSprite(50,200,10,200);

var obstacle1 = createSprite(350,200,10,200);

var obstacle2 = createSprite(200,20,100,10);

var obstacle3 = createSprite(250,10,100,10);

var obstacle4 = createSprite(200,130,100,10);

var g;

var bull = createSprite();


obstacle.velocityY = random(-1,-2);
  obstacle.velocityX = random(1,2);
  obstacle1.velocityX = 2;
  obstacle1.velocityY = 1;
  obstacle2.velocityX = 2;
  obstacle2.velocityY = 2;
   obstacle3.velocityX = 2;
  obstacle4.velocityY = 2;
  

obstacle.setCollider("rectangle",0,0,28,20,-45);
obstacle1.setCollider("rectangle",0,0,28,20,-45);
obstacle2.setCollider("rectangle",0,0,28,20,-45);
obstacle3.setCollider("rectangle",0,0,28,20,-45);
obstacle4.setCollider("rectangle",0,0,28,20,-45);




function draw() {
  background(0);
  
  console.log('Press Space To Destroy All Asteroids And Remember Dont let Asteroid Touch You');
  
  bg.setAnimation("b");
  obstacle.setAnimation("stone");
  obstacle1.setAnimation("stone");
  obstacle2.setAnimation("stone");
   obstacle3.setAnimation("stone");
  obstacle4.setAnimation("stone");
  
  if(keyDown("space")){
    bull = createSprite(player.x,player.y);
    bull.setAnimation("shot");
    bull.velocityY = -5;
    bull.setCollider("rectangle",0,0,0,0,-45);
    
  }
  
  if(bull.isTouching(obstacle)){
    obstacle.visible = false;
  }
  
  if(bull.isTouching(obstacle1)){
    obstacle1.visible = false;
    playSpeech("Good Shot", "female", "English");
    
  }
  
  if(bull.isTouching(obstacle2)){
    obstacle2.visible = false;
  }
  
  if(bull.isTouching(obstacle3)){
    obstacle3.visible = false;
  }
  
  if(bull.isTouching(obstacle4)){
    obstacle4.visible = false;
  }
  
  
  if(keyDown("up")){
    player.y = player.y -5;
  }
  
  if(keyDown("down")){
    player.y = player.y +5;
  }
  
  if(player.y < 0){
    player.x = 200;
    player.y = 390;
    playSpeech("Next Level", "female", "English");
  }
  
  if(player.isTouching(obstacle)){
    g = createSprite(player.x,player.y);
    g.setAnimation("burst");
    playSound("assets/category_hits/8bit_splat.mp3", false);
    obstacle.visible = false;
  }
  
  if(player.isTouching(obstacle1)){
    g = createSprite(player.x,player.y);
    g.setAnimation("burst");
    playSound("assets/category_hits/8bit_splat.mp3", false);
    obstacle1.visible = false;
  }
  stopSound("assets/category_hits/8bit_splat.mp3");
  
  if(player.isTouching(obstacle2)){
    g = createSprite(player.x,player.y);
    g.setAnimation("burst");
    playSound("assets/category_hits/8bit_splat.mp3", false);
    obstacle2.visible = false;
  }
  
  if(player.isTouching(obstacle3)){
  g = createSprite(player.x,player.y);
  g.setAnimation("burst");
  obstacle3.visible = false;
  
  }
  
  if(player.isTouching(obstacle4)){
    g = createSprite(player.x,player.y);
    g.setAnimation("burst");
      
    }
  
  
  player.setAnimation("spaceship");
  player.scale = 0.5;
  
  if(keyDown("left")){
    player.x = player.x -5;
  }
  
  if(keyDown("right")){
    player.x = player.x +5;
  }
  
  createEdgeSprites();
  obstacle.bounceOff(edges);
  obstacle1.bounceOff(edges);
  obstacle2.bounceOff(edges);
  obstacle3.bounceOff(edges);
  obstacle4.bounceOff(edges);
  
  
  
  
  drawSprites();





}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
