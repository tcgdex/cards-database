import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Heracross",
		fr: "Scarhino",
		de: "Skaraborn"
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
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
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
				en: "Charging Horn",
				fr: "Défonc'korne",
				de: "Rempelhorn"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, this attack does 30 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires. Si c'est pile, cette attaque inflige 30 dégâts.",
				de: "Wirf eine Münze. Bei „Kopf“ fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu. Bei „Zahl“ fügt dieser Angriff 30 Schadenspunkte zu."
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
		en: "It is normally peaceful, but will attack any who get between it and honey, its favorite food.",
		fr: "Généralement, il est pacifique, mais il attaquera tous ceux qui s'interposeront entre lui et son miel, sa nourriture préférée.",
		de: "Es ist normalerweise friedlich, greift aber an, wenn sich ihm jemand auf seinem Weg zu seinem Lieblingsessen Honig in den Weg stellt."
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
