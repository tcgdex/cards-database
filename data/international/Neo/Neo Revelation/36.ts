import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Piloswine",
		'fr-fr': "Cochignon",
		'de-de': "Keifel"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		221,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Swinub",
		'fr-fr': "Marcacrin"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Nap",
				'fr-fr': "Tit'sieste",
				'de-de': "Nap"
			},
			effect: {
				'en-us': "Remove 3 damage counters from Piloswine. If it has fewer damage counters than that, remove all of them.",
				'fr-fr': "Retirez 3 marqueurs de dégâts de Cochignon. S'il y a moins de marqueurs de dégâts sur lui, retirez-les tous.",
				'de-de': "Remove 3 damage counters from Piloswine. If it has fewer damage counters than that, remove all of them."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "High-Speed Charge",
				'fr-fr': "Charge bulldozer",
				'de-de': "High-Speed Charge"
			},
			effect: {
				'en-us': "Piloswine does 30 damage to itself. Piloswine can't use this attack during your next turn.",
				'fr-fr': "Cochignon s'inflige 30 dégâts. Cochignon ne peut pas utiliser à nouveau cette attaque durant votre prochain tour.",
				'de-de': "Piloswine does 30 damage to itself. Piloswine can't use this attack during your next turn."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 3,


	description: {
		'en-us': "If it charges at an enemy, the hairs on its back stand up straight. It is very sensitive to sound.",
		'fr-fr': "S'il charge un ennemi, les poils de son dos se dressent à la verticale. Il est très sensible aux sons."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274622,
				tcgplayer: 88114
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274622,
				tcgplayer: 88114
			}
		}
	]
}

export default card

