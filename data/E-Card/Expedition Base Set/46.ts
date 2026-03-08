import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Feraligatr",
		fr: "Aligatueur",
		de: "Impergator"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		160,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Croconaw",
		fr: "Crocrodil"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Slash"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Double Claw",
				fr: "Combo-griffe",
				de: "Double Claw"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				de: "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274887,
		tcgplayer: 85415
	},

	variants:[
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
