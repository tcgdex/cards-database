import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Mudsdale",
		fr: "Bourrinos",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Fightning",
	],

	evolveFrom: {
		en: "Mudbray",
		fr: "Tiboudet",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Double Impact",
				fr: "Double Impact",
			},
			effect: {
				en: "Flip 2 coins. This attack does 120 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 120 dégâts pour chaque côté face.",
			},
			damage: "120×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D"
}

export default card
