import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Cleffa",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		173,
	],
	hp: 30,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sweet Sleeping Face",
			},
			effect: {
				en: "As long as Cleffa is Asleep, prevent all damage done to Cleffa by attacks.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Eeeeeeek",
			},
			effect: {
				en: "Shuffle your hand into your deck, then draw 6 cards. Cleffa is now Asleep.",
			},

		},
	],






}

export default card
