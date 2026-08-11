import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Tepig",
		'fr-fr': "Gruikui",
		'es-es': "Tepig",
		'it-it': "Tepig",
		'pt-br': "Tepig",
		'de-de': "Floink"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		498,
	],

	hp: 80,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Live Coal",
				'fr-fr': "Charbon Mutant",
				'es-es': "Carbón Activado",
				'it-it': "Carboni Ardenti",
				'pt-br': "Carvão Vivo",
				'de-de': "Glühende Kohlen"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'es-es': "Desenrollar",
				'it-it': "Rotolamento",
				'pt-br': "Rolagem",
				'de-de': "Walzer"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It can deftly dodge its foe's attacks while shooting fireballs from its nose. It roasts berries before it eats them.",
	},

	thirdParty: {
		cardmarket: 407804,
		tcgplayer: 201209
	}
}

export default card
