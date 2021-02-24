import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Magby",
	},
	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		240,
	],
	hp: 30,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sweet Sleeping Face",
			},
			effect: {
				en: "As long as Magby is Asleep, prevent all damage done to Magby by attacks.",
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Play with Fire",
			},
			effect: {
				en: "The Defending Pokémon is now Burned. Magby is now Asleep.",
			},

		},
	],






}

export default card
