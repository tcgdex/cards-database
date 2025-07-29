import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Great Ball",
		fr: "Super Ball",
		de: "Superball"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez dans votre deck un Pokémon de base et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
		de: "Durchsuche dein Deck nach einer Basis-Pokémon-Karte und lege sie auf deine Bank. Mische dein Deck danach."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 278383
	}
}

export default card
