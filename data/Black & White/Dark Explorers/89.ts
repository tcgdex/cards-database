import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Haxorus",
		fr: "Tranchodon",
		es: "Haxorus",
		it: "Haxorus",
		pt: "Haxorus",
		de: "Maxax"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		612,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Fraxure",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Guillotine",
			},

			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stunning Uppercut",
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, the Defending Pokémon is now Paralyzed. If both of them are tails, this attack does nothing.",
			},
			damage: 80,

		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280417,
		tcgplayer: 86033
	}
}

export default card
