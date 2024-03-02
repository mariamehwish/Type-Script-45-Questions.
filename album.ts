function make_album(artist:string, title:string): {artist: string; title: string} {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}

let album = make_album('Shareya Goshal', 'Mere Dholna')
console.log(album);

album = make_album('Shareya Goshal', 'Ghar More Perdesiya')
console.log(album);

album = make_album('Shareya Goshal', 'Chikni Chammeli')
console.log(album);