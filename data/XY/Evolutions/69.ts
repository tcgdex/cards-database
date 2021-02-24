import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Doduo",
		fr: "Doduo",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Trainer",

	set: Set,
	dexId: [
		84,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",



	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,
	effect: {
		en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
		fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
	},


}

export default card
