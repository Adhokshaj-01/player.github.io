//ANimation--on-scroll
AOS.init({
            duration : 2000,
            once: false,

});
document.addEventListener('contextmenu', event => event.preventDefault());
let muiscIndex = 0;

window.addEventListener("load" , ()=> {
    onload(muiscIndex);
})

function onload(indexnum){
    songnam.innerHTML =allSongs[indexnum].name;
    musimg.src = `imgaes/${allSongs[indexnum].img}.jpg`;
    music.src= `songs/${allSongs[indexnum].src}.mp3`;
    
}
//funtion


function playsong(){
    main.classList.add("paused");
    music.play();
    playpaused.innerHTML="pause_circle_filled";
    musimg.style.animation="play infinite 2s";

    
    
}
function pausesong (){
    main.classList.remove("paused");
    music.pause();
    playpaused.innerHTML="play_circle_filled";
    musimg.style.animation="none";
    
}
function nextMusic(){
    muiscIndex ++ ;
    muiscIndex > allSongs.length ? muiscIndex = 0 : muiscIndex = muiscIndex;
    onload(muiscIndex);
    playsong();
    

}
function prevMusic(){
    muiscIndex -- ;
    muiscIndex < 0 ? muiscIndex = allSongs.length : muiscIndex = muiscIndex;
    onload(muiscIndex);
    playsong();
    

}
//
//onclick function//
playpaused.addEventListener("click" , ()=> {
    const songPaused = main.classList.contains("paused");
    songPaused ? pausesong() : playsong();

    
});
nextSong.addEventListener("click" , ()=>{
    nextMusic();
});
prevSong.addEventListener("click" , ()=>{
    prevMusic();
});
//-----//
progressarea.addEventListener("click" , (e)=>{
    let progwidthVal =  progressarea.clientWidth;
    let clickedOffsetX = e.offsetX;
    let songduration = music.duration;
    music.currentTime = (clickedOffsetX / progwidthVal) *songduration;
    playsong();

});
music.addEventListener("timeupdate",(e)=>{
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progwidth = (currentTime/duration)*100;
    progressbar.style.width = `${progwidth}%`; 
    //
    //-----//


    let muscurrentTime = document.querySelector('#start'),
    musDuration = document.querySelector('#end');

    music.addEventListener("loadeddata",()=>{
        
         let audioDuration = music.duration;
         let totalMin = Math.floor(audioDuration / 60); 
         let totalSec  =  Math.floor(audioDuration % 60);
         if (totalSec < 10){
             totalSec = `0${totalSec}`;
         }

         musDuration.innerHTML =`${totalMin}:${totalSec}`;
        });

         
         let currentMin = Math.floor(currentTime / 60); 
         let currentSec  =  Math.floor(currentTime % 60);
         if (currentSec < 10){
             currentSec = `0${currentSec}`;
         }

        muscurrentTime.innerHTML =`${currentMin}:${currentSec}`;
        
});
//---//
//on--end--of--song//
music.addEventListener("ended", ()=>{
    muiscIndex ++ ;
    muiscIndex > allSongs.length ? muiscIndex = 0 : muiscIndex = muiscIndex;
    onload(muiscIndex);
    playsong();


});



//function for list and about //
listbtn.addEventListener("click" ,()=>{
    list.style.top="59%";
    list.style.opacity="1";
listcls.addEventListener("click" , ()=>{
    list.style.top="100%";
    list.style.opacity="0";
})    
})
abtbtn.addEventListener("click" , ()=>{
    info.style.top="71%"
    info.style.opacity="1";
    infocls.addEventListener("click" , ()=>{
        info.style.top="100%"
        info.style.opacity="0";
    
    })
})
//*/
