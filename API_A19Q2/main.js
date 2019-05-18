///////////////////////////////////////////////////////////////////////////////////////////
// procedure:                                                                            //
// 1. creatElement('li') under <ul>, for loop to display tracks                          //
// 2. mouseover, mouseout class exchange                                                 //
// 3. addEventListener('click',function) on track and display lyrics(get api by axios)    //
///////////////////////////////////////////////////////////////////////////////////////////
// DEFAULT CODE // 
const BASE_URL = 'https://api.lyrics.ovh/v1/'
const songList = document.querySelector('#song-list')
const lyricsPanel = document.querySelector('#lyrics-panel')
const lyrics = document.createElement('pre')
const album1 = {
	artist: 'Adele',
	album: '25',
	tracks: [
		'Hello',
		'Send My Love (To Your New Lover)',
		'I Miss You',
		'When We Were Young',
		'Remedy',
		'Water Under the Bridge',
		'River Lea',
		'Love in the Dark',
		'Million Years Ago',
		'All I Ask',
		'Sweetest Devotion'
	]
}
const album2 = {
	artist: 'Coldplay',
	album: '25',
	tracks: [
		'Adventure of a Lifetime'
	]
}

let album = album1

function CreateSongList(album) {
	for (let Indexofsong = 0; Indexofsong < album.tracks.length; Indexofsong++) {
		let newSong = document.createElement('li')
		newSong.innerHTML = `

    <a id="${Indexofsong}" class="nav-link" href="#">${album.tracks[Indexofsong]}</a>

	`
		songList.appendChild(newSong)
	}
}
CreateSongList(album) 

////////class changes while mouse move/////////

////mouseover
songList.addEventListener('mouseover', function (event) {	
	//console.log(this)
	//console.log(event.target)
	let element = event.target;
  element.classList.remove("nav-link");
	element.classList.add("nav-link", "active");
})	

///mouseout
songList.addEventListener('mouseout', function (event) {
	let element = event.target;
	element.classList.remove("nav-link", "active");
	element.classList.add("nav-link");
})	


/////show lyrics
songList.addEventListener('click', function (event) {
		let singer = album.artist
		let liPoint = parseInt(`${(event.target.id)}`)
		let title = album.tracks[liPoint]
		let URL = BASE_URL + singer + '/' + title

			axios.get(`${URL}`).then(response => {
				console.log(response.data)
				lyrics.innerHTML = response.data.lyrics
				lyricsPanel.appendChild(lyrics)
			})
				.catch(error => console.log(error))
	}
)





	


	