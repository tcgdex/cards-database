import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Noibat",
		fr: "Sonistrelle",
	},
	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		714,
	],
	hp: 60,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
				"Darkness",
			],
			name: {
				en: "Air Slash",
				fr: "Lame d’Air",
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
