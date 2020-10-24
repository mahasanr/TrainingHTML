$(function() {
  
    // Init ScrollMagic Controller
    var scrollMagicController = new ScrollMagic();
    
    // Create Animation for 0.5s
    var tween = TweenMax.to('#scene2', 0.5, 
        {
        left:100 , 
        opacity:1 , 
    duration :600 , 
    easing : "ease-in-out"}
    );
    
    // Create the Scene and trigger when visible
    var scene = new ScrollScene({
      triggerElement: '#scene2',
      offset: 200 /* offset the trigger 150px below #scene's top */
    })

    .setTween(tween)
   
    .addTo(scrollMagicController);
    
    // Add debug indicators fixed on right side
     scene.addIndicators();
  });