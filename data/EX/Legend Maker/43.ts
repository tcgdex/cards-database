import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Sealeo",
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		364,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Spheal",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Power Circulation",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your discard pile for a basic Energy card, show it to your opponent, and put it on top of your deck. If you do, put 1 damage counter on Sealeo. This power can't be used if Sealeo is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Lunge Out",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],





}

export default card
