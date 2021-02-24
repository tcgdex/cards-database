import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Latias",
	},
	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		380,
	],
	hp: 80,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Miraculous Light",
			},
			effect: {
				en: "Remove 2 damage counters and all Special Conditions from Latias.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Mist Ball",
			},
			effect: {
				en: "Discard a Fire Energy and a Water Energy attached to Latias.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
