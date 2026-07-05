import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Heatran",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		485,
	],

	hp: 100,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Body Slam",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Spin",
			},
			effect: {
				en: "Discard 2 basic Energy cards attached to Heatran. (If you can’t discard cards, this attack does nothing.)",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	description: {
		en: "It dwells in volcanic caves. It digs in with its cross-shaped feet to crawl on ceilings and walls."
	},

	retreat: 3,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 278402,
		tcgplayer: 86049
	}
}

export default card
