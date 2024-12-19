interface Song {
	artist: string | string[];
	length: number;
	name: string;
	type: "song";
}

interface Album {
	songs: Song[];
	type: "album";
}

interface Playlist {
	resolve: () => Song[];
	type: "playlist";
}

type Item = Song | Album | Playlist;

interface UnrolledPlaylist {
	artists: {
		[artist: string]: string[];
	};
	songs: string[];
	time: number;
}

export function unrollPlaylist(items: Item[]) {
	const unrolled: UnrolledPlaylist = {
		artists: {},
		songs: [],
		time: 0,
	};

	function addSong(song: Song) {
		const artists = Array.isArray(song.artist) ? song.artist : [song.artist];
		artists.forEach((artist) => {
			unrolled.artists[artist] ??= [];
			unrolled.artists[artist].push(song.name);
		});

		unrolled.songs.push(song.name);
		unrolled.time += song.length;
	}

	for (let item of items) {
		switch (item.type) {
			case "song":
				addSong(item);
				break;

			case "album":
				item.songs.forEach(addSong);
				break;

			case "playlist":
				item.resolve().forEach(addSong);
				break;
		}
	}

	return unrolled;
}
