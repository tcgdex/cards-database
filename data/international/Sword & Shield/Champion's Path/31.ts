import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		'en-us': "Rolycoly",
		'fr-fr': "Charbi",
		'es-es': "Rolycoly",
		'it-it': "Rolycoly",
		'pt-br': "Rolycoly",
		'de-de': "Klonkett"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	dexId: [837],
	set: Set,
	hp: 70,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		'en-us': "Most of its body has the same composition as coal. Fittingly, this Pokémon was first discovered in coal mines about 400 years ago."
	},

	thirdParty: {
		cardmarket: 500010,
		tcgplayer: 223023
	}
}

export default card
