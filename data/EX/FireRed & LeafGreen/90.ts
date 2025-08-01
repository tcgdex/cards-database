import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Energy Switch",
		fr: "Échange d'Énergie",
		de: "Energie-Umschalter"
	},

	illustrator: "Ken Ikuji",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Déplacez une carte Énergie de base d'1 de vos Pokémon à 1 autre de vos Pokémon.",
		de: "Move a basic Energy card attached to 1 of your Pokémon to another of your Pokémon."
	},

	thirdParty: {
		cardmarket: 276266,
		tcgplayer: 85254
	}
}

export default card
