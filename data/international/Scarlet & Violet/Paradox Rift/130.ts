import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [679],
	set: Set,

	name: {
		en: "Honedge",
		fr: "Monorpale",
		es: "Honedge",
		it: "Honedge",
		pt: "Honedge",
		de: "Gramokles"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Cut Up",
			fr: "Découpage",
			es: "Trocear",
			it: "Tagliuzzamento",
			pt: "Dilacerar",
			de: "Zerhäckseln"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		en: "The blue eye on the sword's handguard is the true body of Honedge. With its old cloth, it drains people's lives away.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740668,
				tcgplayer: 523807,
				cardtrader: 265245
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740668,
				tcgplayer: 523807,
				cardtrader: 265245
			}
		},
	],

	illustrator: "aoki",

	
}

export default card
