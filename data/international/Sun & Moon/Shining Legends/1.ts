import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Bulbasaur",
		'fr-fr': "Bulbizarre",
		'es-es': "Bulbasaur",
		'it-it': "Bulbasaur",
		'pt-br': "Bulbasaur",
		'de-de': "Bisasam"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		1,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch’Herbe",
				'es-es': "Hoja Afilada",
				'it-it': "Foglielama",
				'pt-br': "Folha Navalha",
				'de-de': "Rasierblatt"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
	},

	thirdParty: {
		cardmarket: 302139,
		tcgplayer: 146653
	}
}

export default card
