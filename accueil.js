const button=document.querySelector('.play-icon');
var image=document.querySelector('.image');
let rim1 = document.getElementById('rim1');
let saryRim = document.querySelector('.sary-sisiny');
const progress = document.getElementById("progress")
/*   Play et Pause   */ 
    image.addEventListener("click",()=>{
    
    if(rim1.paused){
        rim1.play();
        image.src = "iconMusic/1721922923954.png";
        saryRim.classList.add('rotation');
    }
    else{
        rim1.pause();
        image.src = "iconMusic/jouer.png";
        saryRim.classList.remove('rotation');
    }
});

const songs =[
    {artist:'Alan walker' ,title:'Faded' ,duration:'3:45' ,src:'music/alan walker faded.mp3', cover:'artiste/alan walker.jpg'},
    {artist:'Rim-ka' ,title:'Tsy magnino' ,duration:'3:43' ,src:'music/rim ka tsy magino.mp3', cover:'artiste/rimka.jpg'},
    {artist:'Mopcaan' ,title:'Anao tompony' ,duration:'3:52' ,src:'music/MOPCAAN_-_ANAO_TOMPONY__Official_Video_(720p).mp3', cover:'artiste/mopcaan.jpg'},
    {artist:'Ambondrona' ,title:'Aza ela any' ,duration:'4:30' ,src:'music/ambondrona aza ela any.mp3', cover:'artiste/ambondrona.jpg'},
    {artist:'Sanih' ,title:'Cadeau' ,duration:'4:06' ,src:'music/sanih cadeau.mp3', cover:'artiste/sanih.jpg'},
    {artist:'Central cee' ,title:'Talking' ,duration:'2:35' ,src:'music/[FREE] Central Cee x WeWantWraiths “Talking To The Moon” _ Melodic Drill _ (prod by. Michelin Shin).mp3', cover:'artiste/central cee.jpg'},
    {artist:'Metallica' ,title:'Metal militia' ,duration:'5:10' ,src:'music/10-Metal Militia.mp3', cover:'artiste/metal.jpg'},
];
let currentIndex = 0;

const audio = document.getElementById('rim1');
const info = document.getElementById('info');

function loadSong(index){
    const song = songs[index];
    audio.src = song.src;
    saryRim.src = song.cover;
    info.innerHTML =`<h3>Artist: ${song.artist}</h3>  | Titre: ${song.title} | Durée: ${song.duration}`;
    audio.play();
}

function nextSong(){
    currentIndex = (currentIndex + 1) % songs.length;
    loadSong(currentIndex);
}

function prevSong(){
    currentIndex = (currentIndex - 1 + songs.length) % songs.length ;
    loadSong(currentIndex);
}

if (image.paused){
    loadSong(currentIndex);
}

    function upadateProgress(){
        const pourcentage = (audio.currentTime / audio.duration) * 100;
        progress.value = pourcentage;
    }
    function setProgress(){
        const time = (progress.value /100) * audio.duration;
        audio.currentTime = time;
    }

    audio.addEventListener('timeupdate',upadateProgress);
    progress.addEventListener('input',setProgress);

/*     Barre de recherche    */ 
let inRecherche = document.getElementById('inRecherche');
let imArt = document.querySelectorAll('.imArt');
let search2 = document.getElementById('search2');

inRecherche.addEventListener('input', (e)=>{
        let content = e.target.value;

    imArt.forEach((rech)=>{
        if(rech.textContent.indexOf(content)>=0){
            rech.style.display = "";
        }
        else{
            rech.style.display = "none";
        }
    })
});