let magicians: string[] = ['Zegham', 'My Crush', 'Meri Phupho'];


function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] += " the Great";
    }
}

make_great(magicians);
show_magicians(magicians);

function make_great2(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + 'the Great');
    }
    return greatMagicians;
}
const magicians3: string[] = ['Katrina Khof', 'Abida Sangeen', 'Dadi Rangeen']
const greatMagicians2: string[] = make_great2(magicians);
show_magicians(magicians3);
show_magicians(greatMagicians2)