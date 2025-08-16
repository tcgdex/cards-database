import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Kirlia",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		281,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Ralts",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psychic Research",
			},
			effect: {
				en: "Search your discard pile for a Supporter card and use the effect of that card as the effect of this attack. (The Supporter card remains in your discard pile.)",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Telekinesis",
			},
			effect: {
				en: "Choose 1 of your opponent’s Pokémon. This attack does 40 damage to that Pokémon. This attack’s damage isn’t affected by Weakness or Resistance.",
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	description: {
		en: "It is highly perceptive of its Trainer’s feelings. It dances when it is feeling happy."
	},

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278040,
		tcgplayer: 86467
	}
}

export default card
