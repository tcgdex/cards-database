import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Switch",
		fr: "Échange",
		de: "Tausch"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Échangez votre Pokémon Actif avec 1 des Pokémon de votre Banc.",
		de: "Switch 1 of your Active Pokémon with 1 of your Benched Pokémon."
	},

	thirdParty: {
		cardmarket: 276278,
		tcgplayer: 89712
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
