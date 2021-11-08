import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Gabite",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		444,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Gible",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Burrow",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Gabite by attacks during your opponent’s next turn.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Distorted Wave",
			},
			effect: {
				en: "Before doing damage, remove 2 damage counters from the Defending Pokémon.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		en: "It habitually digs up and hoards gems in its nest. Its loot is constantly targeted by thieves."
	},

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	}
}

export default card
