import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Cresselia",
		fr: "Cresselia",
	},
	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		488,
	],
	hp: 130,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aurora Gain",
				fr: "Puissance Boréale",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 60,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Luminous Blade",
				fr: "Lame Lumineuse",
			},
			effect: {
				en: "Discard a Psychic Energy from this Pokémon.",
				fr: "Défaussez une Énergie Psychic de ce Pokémon.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
