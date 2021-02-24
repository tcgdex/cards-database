import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Poliwhirl",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		61,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Poliwag",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Belly Drum",
			},
			effect: {
				en: "Put 3 damage counters on Poliwhirl. If this doesn't knock out Poliwhirl, search your deck for up to 2 Basic Energy cards and attach them to Poliwhirl. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Gun",
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each W Energy attached to Poliwhirl but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
			},
			damage: 30,

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
