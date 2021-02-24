import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Sabrina's Slowbro",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		80,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Slowpoke",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Naptime",
			},
			effect: {
				en: "Flip a coin. If heads, remove 3 damage counters from Sabrina's Slowbro and Sabrina's Slowbro is now Asleep. If Sabrina's Slowbro has fewer damage counters than that, remove all of them.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Screaming Headbutt",
			},
			effect: {
				en: "You can't use this attack during your next turn.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
