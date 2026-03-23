import { Card } from '../../../interfaces'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		en: "Combusken",
		fr: "Galifeu"
	},
	illustrator: "Kouki Saitou",
	rarity: "Black Star Promo",
	category: "Trainer",

	set: Set,
	dexId: [
		256,
	],
	hp: 70,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Torchic",
		fr: "Poussifeu"
	},
	stage: "Stage1",



	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				fr: "Intimidation",
			},
			damage: "20",
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Double pied",
			},
			damage: "40×",
			effect: {
				fr: "Lancez deux pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de face.",
			},
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
