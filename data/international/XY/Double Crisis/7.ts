import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Grimer",
		'fr-fr': "Tadmorv de la Team Aqua",
		'pt-br': "Grimer da Equipe Aqua",
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		88,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Pound",
				'fr-fr': "Écras'Face",
				'pt-br': "Pancada",
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mud-Slap",
				'fr-fr': "Coud'Boue",
				'pt-br': "Tapa de Lama",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its flexible body, which allows it to squeeze into any cracks, comes in handy when invading enemy hideouts.",
	},

	thirdParty: {
		cardmarket: 282518,
		tcgplayer: 97053
	}
}

export default card
