import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Eevee δ",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		133,
	],
	hp: 50,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Metal Scoop",
			},
			effect: {
				en: "Search your discard pile for a Metal Energy card and attach it to Eevee.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
