function animationh(){
var anim = document.querySelector('.home');
animations(anim);

}
function animationa(){
    var anim = document.querySelector('.about');
    animations(anim);
    
    }
    function animatione(){
        var anim = document.querySelector('.education');
        animations(anim);
        
        }
        function animationk(){
            var anim = document.querySelector('.skills');
            animations(anim);
            
            }
function animations(anim){
anim.animate([
    {
        transform : 'translateY(1em)' },
     {transform : 'translateY(5em)'}
    ],{
       duration: 1500,

       direction: "alternate",
       iterations: 2,
       easing: "ease"
        });
    };
    

