import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Bunnelby",
		'fr-fr': "Sapereau",
		'es-es': "Bunnelby",
		'it-it': "Bunnelby",
		'pt-br': "Bunnelby",
		'de-de': "Scoppel"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		659,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mud Shot",
				'fr-fr': "Tir de Boue",
				'es-es': "Disparo Lodo",
				'it-it': "Colpodifango",
				'pt-br': "Tiro de Lama",
				'de-de': "Lehmschuss"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "They use their large ears to dig burrows. They will dig the whole night through.",
	},

	thirdParty: {
		cardmarket: 311934,
		tcgplayer: 149112
	}
}

export default card
