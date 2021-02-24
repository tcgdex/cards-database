import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Quagsire",
	},
	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		195,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wooper",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Saturation",
			},
			effect: {
				en: "When you attach a Water Energy card from your hand to Quagsire, remove all Special Conditions and 2 damage counters from Quagsire.\"",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Hyper Pump",
			},
			effect: {
				en: "Does 20 damage plus 20 more damage for each basic Energy card attached to Quagsire but not used to pay for this attack's Energy cost. You can't add more than 60 damage in this way.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
