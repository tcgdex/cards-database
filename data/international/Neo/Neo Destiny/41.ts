import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Heracross",
		'fr-fr': "Scarhino",
		'de-de': "Skaraborn"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		214,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Charging Horn",
				'fr-fr': "Défonc'korne",
				'de-de': "Charging Horn"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, this attack does 30 damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires. Si c'est pile, cette attaque inflige 30 dégâts.",
				'de-de': "Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, this attack does 30 damage."
			},
			damage: "30+",

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
		'en-us': "It is normally peaceful, but will attack any who get between it and honey, its favorite food.",
		'fr-fr': "Généralement, il est pacifique, mais il attaquera tous ceux qui s'interposeront entre lui et son miel, sa nourriture préférée."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274693,
				tcgplayer: 86060
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274693,
				tcgplayer: 86060
			}
		}
	]
}

export default card
