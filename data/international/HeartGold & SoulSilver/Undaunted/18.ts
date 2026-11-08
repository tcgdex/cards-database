import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Metagross",
		'fr-fr': "Metalosse",
		'de-de': "Metagross"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [376],

	hp: 130,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Metang",
		'fr-fr': "Metang"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Strength",
				'fr-fr': "Force",
				'de-de': "Stärke"
			},

			damage: 70,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quad Smash",
				'fr-fr': "Quadruple destruction",
				'de-de': "Vierfacher Schlag"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 50 damage times the number of heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				'de-de': "Wirf 4 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It folds its four legs when flying. Its four brains are said to be superior to a supercomputer."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279271,
				tcgplayer: 87341
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279271,
				tcgplayer: 87341
			}
		}
	],

}

export default card
