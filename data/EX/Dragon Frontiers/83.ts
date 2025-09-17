import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

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
		de: "Tausche 1 deiner Aktiven Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	thirdParty: {
		cardmarket: 277288,
		tcgplayer: 89714
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
