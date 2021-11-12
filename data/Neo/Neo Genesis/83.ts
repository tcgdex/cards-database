import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Arcade Game",
		fr: "Jeu d'arcade"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Mélangez votre deck, et révélez les 3 cartes du dessus. Si au moins 2 de ces cartes ont le même nom, placez toutes celles des 3 qui ont ce nom dans votre main puis mélangez le reste avec votre deck. Si elles ont toutes un nom différent, mélangez les 3 dans votre deck."
	}
}

export default card
