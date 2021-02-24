import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Clefairy",
		fr: "Mélofée",
	},
	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		35,
	],
	hp: 60,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Slap",
				fr: "Torgnoles",
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
