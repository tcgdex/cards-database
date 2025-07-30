import { Card } from '../../../interfaces'
import Set from '../Delta Species'

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
		fr: "Échangez 1 de vos Pokémon Actifs avec 1 de vos Pokémon de Banc.",
		de: "Switch 1 of your Active Pokémon with 1 of your Benched Pokémon."
	},

	thirdParty: {
		cardmarket: 276865
	}
}

export default card
