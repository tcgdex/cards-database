import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Basculin",
		'fr-fr': "Bargantua",
		'es-es': "Basculin",
		'it-it': "Basculin",
		'pt-br': "Basculin",
		'de-de': "Barschuft"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		550,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Bared Fangs",
				'fr-fr': "Crocs à Vif",
			},
			effect: {
				'en-us': "If, before this Pokémon does damage, the Defending Pokémon has no damage counters on it, this attack does nothing.",
				'fr-fr': "Si, avant que ce Pokémon inflige des dégâts, le Pokémon Défenseur n'a aucun marqueur de dégâts, cette attaque ne fait rien.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Red and blue Basculin usually do not get along, but sometimes members of one school mingle with the other's school.",
	},

	thirdParty: {
		cardmarket: 280255,
		tcgplayer: 83733
	}
}

export default card
