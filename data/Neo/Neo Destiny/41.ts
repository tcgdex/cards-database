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
				de: "Charging Horn"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, this attack does 30 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires. Si c'est pile, cette attaque inflige 30 dégâts.",
				de: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, this attack does 30 damage."
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

	description: {
		fr: "Généralement, il est pacifique, mais il attaquera tous ceux qui s'interposeront entre lui et son miel, sa nourriture préférée."
	},

	thirdParty: {
		cardmarket: 274693,
		tcgplayer: 86060
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
