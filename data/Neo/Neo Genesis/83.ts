import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Arcade Game",
		fr: "Jeu d'arcade",
		de: "Spielautomat"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Mélangez votre deck, et révélez les 3 cartes du dessus. Si au moins 2 de ces cartes ont le même nom, placez toutes celles des 3 qui ont ce nom dans votre main puis mélangez le reste avec votre deck. Si elles ont toutes un nom différent, mélangez les 3 dans votre deck.",
		de: "Shuffle your deck, then reveal the top 3 cards of it. If at last 2 of those cards share the same name, put all of the ones with that name into your hand and shuffle the rest into your deck. If none of them do, shuffle all 3 into your deck."
	},

	thirdParty: {
		cardmarket: 274483
	}
}

export default card
