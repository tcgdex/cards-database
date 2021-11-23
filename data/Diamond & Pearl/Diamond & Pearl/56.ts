import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Monferno",
		fr: "Chimpenfeu",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		391,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Chimchar",
		fr: "Ouisticram",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flame Dance",
				fr: "Danse enflammée",
			},
			effect: {
				en: "Search your discard pile for a Fire Energy card and attach it to Monferno.",
				fr: "Chercher dans votre pile de défausse une carte Énergie Fire et attachez-la à Chimpenfeu.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-griffe",
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	description: {
		fr: "Pour intimider ses agresseurs, il gonfle les flammes de sa queue pour paraître plus grand."
	}
}

export default card
