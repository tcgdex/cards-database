import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Great Ball",
		fr: "Super Ball",
		de: "Superball"
	},

	illustrator: "Nakaoka",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Cherchez dans votre deck un Pokémon de base (sauf les Pokémon-ex) et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
		de: "Durchsuche dein Deck nach einem Basis-Pokémon (kein Pokémon-ex) und lege es auf deine Bank. Mische dein Deck danach."
	},

	thirdParty: {
		cardmarket: 276268,
		tcgplayer: 85895
	}
}

export default card
