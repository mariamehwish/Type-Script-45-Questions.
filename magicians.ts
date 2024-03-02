let magicians :string [] = ['Zegham', 'My Crush(he is also a megician👀🔥)', 'Meri Phupho😎']

function show_magicians(magicians:string[]) :void {
    
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
        
    }
}

show_magicians(magicians)