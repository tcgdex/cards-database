import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect",
		'de-de': "Pupitar"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		247,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Larvitar",
		'fr-fr': "Embrylex"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Skull Bash",
				'fr-fr': "Coud'krane",
				'de-de': "Schädelwumme"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Dust Devil",
				'fr-fr': "Tempête de sable",
				'de-de': "Sandteufel"
			},
			effect: {
				'en-us': "Does 10 damage to each non- Pokémon in play. Don't apply Weakness and Resistance.",
				'fr-fr': "Inflige 10 dégâts à chaque Pokémon non- en jeu. N'appliquez pas la Faiblesse et la Résistance.",
				'de-de': "Fügt jedem Pokémon im Spiel, das nicht vom Typ  ist, 10 Schadenspunkte zu. Wende Schwäche und Resistenz nicht an."
			},

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
	retreat: 1,


	description: {
		'en-us': "Its shell is as hard as sheet rock, and it is also very strong. Its thrashing can topple a mountain.",
		'fr-fr': "Sa carapace est dure comme de la pierre, et elle le rend très fort. Ses coups peuvent renverser une montagne."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274556,
				tcgplayer: 88445
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274556,
				tcgplayer: 88445
			}
		}
	]
}

export default card

