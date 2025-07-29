import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Sableye",
		fr: "Ténéfix",
		es: "Sableye",
		it: "Sableye",
		pt: "Sableye",
		de: "Zobiris"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		302,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			},
			damage: 10,

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Junk Hunt",
			},
			effect: {
				en: "Put 2 Item cards from your discard pile into your hand.",
			},

		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280390
	}
}

export default card
