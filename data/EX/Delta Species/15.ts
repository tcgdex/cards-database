import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Starmie δ",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		121,
	],
	hp: 60,
	types: [
		"Water",
		"Metal",
	],
	evolveFrom: {
		en: "Staryu",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Metal Navigation",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Metal Energy card and attach it to Starmie. Shuffle your deck afterward. This power can't be used if Starmie is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Collect",
			},
			effect: {
				en: "Draw 3 cards.",
			},

		},
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Energy Loop",
			},
			effect: {
				en: "Return an Energy card attached to Starmie to your hand.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
