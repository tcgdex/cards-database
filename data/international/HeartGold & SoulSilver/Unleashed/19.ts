import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Lucario",
		'fr-fr': "Lucario",
		'de-de': "Lucario"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [448],

	hp: 90,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Riolu",
		'fr-fr': "Riolu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bulk Up",
				'fr-fr': "Gonflette",
				'de-de': "Protzer"
			},
			effect: {
				'en-us': "During your next turn, each of Lucario's attacks does 30 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Lors de votre prochain tour, chaque attaque de Lucario inflige 30 dégâts supplémentaires au Pokémon Défenseur (avant application de la Faiblesse et de la Résistance).",
				'de-de': "In deinem nächsten Zug fügen Lucarios Angriffe dem Verteidigenden Pokémon 30 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Magnum Punch",
				'fr-fr': "Poing magnum",
				'de-de': "Magnum-Schlag"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It’s said that no foe can remain invisible to Lucario, since it can detect auras, even foes it could not otherwise see."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86880,
				cardmarket: 279175
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86880,
				cardmarket: 279175
			}
		},
	],

}

export default card
