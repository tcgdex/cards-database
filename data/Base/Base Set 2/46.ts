import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Kadabra",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		64,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Abra",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Recover",
			},
			effect: {
				en: "Discard 1 Energy card attached to Kadabra in order use this attack. Remove all damage counters from Kadabra.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Super Psy",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 273969,
		tcgplayer: 42509
	}
}

export default card
