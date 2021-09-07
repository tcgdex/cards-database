import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Dugtrio",
		fr: "Triopikeur",
	},

	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		51,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Diglett",
		fr: "Taupiqueur",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Dig",
				fr: "Tunnel",
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sand Impact",
				fr: "Impact sablonneux",
			},
			effect: {
				en: "Flip a coin for each Fighting Energy attached to Dugtrio. This attack does 50 damage plus 20 more damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie Fighting attachée à Triopikeur. Cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque côté face.",
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 0
}

export default card
