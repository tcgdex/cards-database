import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Garchomp",
		'fr-fr': "Carchacrok",
		'es-es': "Garchomp",
		'it-it': "Garchomp",
		'pt-br': "Garchomp",
		'de-de': "Knakrack"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		445,
	],

	hp: 140,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Gabite",
		'fr-fr': "Carmache",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Jet Headbutt",
				'fr-fr': "Bélier Volant",
			},

			damage: 40,

		},
		{
			cost: [
				"Water",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Sand Tomb",
				'fr-fr': "Tourbi-Sable",
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It is said that when one runs at high speed, its wings create blades of wind that can fell nearby trees.",
	},

	thirdParty: {
		cardmarket: 280529,
		tcgplayer: 85625
	}
}

export default card
