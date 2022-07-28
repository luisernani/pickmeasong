
import { songs } from './catalog.js';


document.addEventListener('DOMContentLoaded', () => {    

    //Output Selection 
    const outPut = document.querySelector('#outPut');    

    //Button Selection
    const btnPick = document.querySelector('#btnPick');
    
    //Check Which Radio Function
    function currentRadio (){
        const checkedRadioValue = document.getElementsByName('radioInput');
            for(let i=0; i < checkedRadioValue.length; i++){
                if(checkedRadioValue[i].checked){
                    return checkedRadioValue[i].value;
                }
            }
       
    }

    //Pick a Song Function
    function pickSong(){
        
        const dbGenre = songs.map(songs => songs.genre);
        
        let pickedSong;
       
        for(let j=0; j < dbGenre.length ; j++){
            if(dbGenre[j] === currentRadio()){
                    const dbGenreIndex = songs.filter(songs => songs.genre === dbGenre[j]);
                    const randomSongIndex =  Math.floor(Math.random(dbGenreIndex) * dbGenreIndex.length);
                    pickedSong = `<h3>Check out "${dbGenreIndex[randomSongIndex].songName}", from ${dbGenreIndex[randomSongIndex].artist}.</h3>` + dbGenreIndex[randomSongIndex].youtube;
                break;
                }
                else if(!currentRadio()){
                    pickedSong = '<h3>Please select a genre!!</h3>';
                }
                else{
                    pickedSong = '<h3>Sorry. No song in this genre yet.</h3>';
                }
            }
        return outPut.innerHTML = pickedSong;
        };


    //Button Event Listener
    btnPick.addEventListener('click', () => {
        
        pickSong();

    });
})