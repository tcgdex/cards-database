import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Switch",
		'fr-fr': "Échange",
		'de-de': "Tausch"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Switch 1 of your Active Pokémon with 1 of your Benched Pokémon.",
		'fr-fr': "Échangez 1 de vos Pokémon Actifs avec 1 des Pokémon de Banc.",
		'de-de': "Tausche 1 deiner Aktiven Pokémon gegen 1 Pokémon auf deiner Bank aus."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 278391,
		tcgplayer: 89717
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
