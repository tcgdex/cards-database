import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Heracross",
		'fr-fr': "Scarhino",
		'es-es': "Heracross",
		'it-it': "Heracross",
		'pt-br': "Heracross",
		'de-de': "Skaraborn"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		214,
	],

	hp: 100,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Horn Attack",
				'fr-fr': "Koud'Korne",
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Giga Horn",
				'fr-fr': "Giga Corne",
			},
			effect: {
				'en-us': "Flip 2 coins. If both of them are tails, this attack does nothing.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 côtés pile, cette attaque ne fait rien.",
			},
			damage: 80,

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
		'en-us': "No matter how heavy its opponents, it flings them far away with its prized horn.",
	},

	thirdParty: {
		cardmarket: 280595,
		tcgplayer: 86066
	}
}

export default card
