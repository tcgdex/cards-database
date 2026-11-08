import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Switch",
		'fr-fr': "Échange",
		'de-de': "Tausch"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Switch 1 of your Active Pokémon with 1 of your Benched Pokémon.",
		'fr-fr': "Échangez 1 de vos Pokémon Actifs avec 1 de vos Pokémon de Banc.",
		'de-de': "Tausche 1 deiner Aktiven Pokémon gegen 1 Pokémon auf deiner Bank aus."
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
