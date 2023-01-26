var imgs =  Array.from( document.getElementsByTagName("img") )  ; 
var lightContainer = document.getElementById("lightContainer") ;
var lightItem = document.getElementById("lightItem") ; 
var nextBtn  = document.getElementById("next") ;
var prevBtn  = document.getElementById("prev") ;
var closeBtn  = document.getElementById("close") ; 
var currentIndex  = 0 ;


for( var i = 0  ; i < imgs.length   ; i++ )
{
    imgs[i].addEventListener("click"  ,  function (eventInfo){

        currentIndex = imgs.indexOf(eventInfo.target) ;

        var imgSrc  =  eventInfo.target.getAttribute("src") ; 

        lightItem.style.backgroundImage = "URL("+imgSrc+")"

       lightContainer.style.display  = "flex" ;

    })

}

function nextSlid ()
{
    currentIndex ++ ;

    if(currentIndex > imgs.length -1 )
    {
        currentIndex  = 0 ;
    }

    var imgSrc  =  imgs[currentIndex].getAttribute("src") ; 

    lightItem.style.backgroundImage = "URL("+imgSrc+")"

}
nextBtn.addEventListener("click"   , nextSlid )

function prevSlid ()
{
    currentIndex -- ;

    if(currentIndex < 0)
    {
        currentIndex  = imgs.length -1 ;
    }

    var imgSrc  =  imgs[currentIndex].getAttribute("src") ; 

    lightItem.style.backgroundImage = "URL("+imgSrc+")"

}
prevBtn.addEventListener("click"   , prevSlid )

function closeSlid ()
{
    lightContainer.style.display = "none" ;
}
closeBtn.addEventListener("click"   , closeSlid )


document.addEventListener("keydown"  , function(eventInfo){


    if(eventInfo.code == "ArrowLeft" )
    {
        nextSlid ()
    }
    if(eventInfo.code == "ArrowRight" )
    {
        prevSlid ()
    }
    if(eventInfo.code == "Escape" )
    {
        closeSlid ()
    }

})

document.addEventListener("click"  , function(eventInfo){

    if(eventInfo.clientX == 0 )
    {
        closeSlid ()
    }

})