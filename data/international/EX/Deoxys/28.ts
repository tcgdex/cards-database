import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Whiscash",
		'fr-fr': "Barbicha",
		'de-de': "Welsar"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		340,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Barboach",
		'fr-fr': "Barloche"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Raging Tremble",
				'fr-fr': "Tremblement de rage",
				'de-de': "Raging Tremble"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage for each damage counter on Whiscash to each Defending Pokémon. If tails, this attack does 10 damage for each damage counter on Whiscash to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chaque Pokémon Défenseur pour chaque marqueur de dégât sur Barbicha. Si c'est pile, cette attaque inflige 10 dégâts au Pokémon Défenseur pour chaque marqueur de dégât sur Barbicha.",
				'de-de': "Flip a coin. If heads, this attack does 10 damage for each damage counter on Whiscash to each Defending Pokémon. If tails, this attack does 10 damage for each damage counter on Whiscash to the Defending Pokémon."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Dwindling Wave",
				'fr-fr': "Vague diminutrice",
				'de-de': "Dwindling Wave"
			},
			effect: {
				'en-us': "Does 70 damage minus 10 damage for each damage counter on Whiscash.",
				'fr-fr': "Inflige 70 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Barbicha.",
				'de-de': "Does 70 damage minus 10 damage for each damage counter on Whiscash."
			},
			damage: "70-",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90575,
				cardmarket: 276431
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 90575,
				cardmarket: 276431
			},
		},
	],

}

export default card
