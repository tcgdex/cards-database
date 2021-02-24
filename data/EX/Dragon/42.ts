import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Shelgon",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		372,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Bagon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Granite Head",
			},
			effect: {
				en: "Damage done to Shelgon by an opponent's attack is reduced by 10 (after applying Weakness and Resistance) during your opponent's next turn.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flare",
			},

			damage: 40,

		},
	],






}

export default card
