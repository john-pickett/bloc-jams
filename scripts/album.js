// Example Album
 var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };
 
 // Another Example Album
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

// Third Example Album
 var albumWright = {
     title: 'We\'re Flying',
     artist: 'Orville and Frank',
     label: 'AI',
     year: '1903',
     albumArtUrl: 'assets/images/album_covers/21.png',
     songs: [
         { title: 'Build an Airplane', duration: '1:07' },
         { title: 'Let\'s Give It a Go', duration: '5:00' },
         { title: 'Uh Oh, We\'re Crashing', duration: '3:29'},
         { title: 'Let\'s Fix This Airplane', duration: '3:28' },
         { title: 'Flight!', duration: '2:19'}
     ]
 };

var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     return template;
 };

var setCurrentAlbum = function(album) {
     // #1
     var albumTitle = document.getElementsByClassName('album-view-title')[0];
     var albumArtist = document.getElementsByClassName('album-view-artist')[0];
     var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
 
     // #2
     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     // #3
     albumSongList.innerHTML = '';
 
     // #4
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
 };
 
 window.onload = function() {
     setCurrentAlbum(albumPicasso);
 };

var art = document.getElementById('cover-art');
art.addEventListener('click', nextCover);
var j = 0;

function nextCover(){
    if (j === 0) {
        console.log("j is 0");
        setCurrentAlbum(albumMarconi);
        j++;
    } else if ( j === 1) {
        console.log("j is 1");
        setCurrentAlbum(albumWright);
        j++; 
    } else if ( j === 2) {
        console.log("j is 2");
        setCurrentAlbum(albumPicasso);
        j++;
    } else if ( j === 3) {
        console.log("j is 3");
        j = 0;
        nextCover();
    } else {
        return "Error!";
    }
}