import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Gardevoir VMAX",
		fr: "Gardevoir VMAX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 320,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Gardevoir V",
		fr: "Gardevoir-V"
	},



	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Max Cure",
				fr: "Soignomax"
			},
			effect: {
				en: "Heal 50 damage from this Pokémon.",
				fr: "Soignez 50 dégâts de ce Pokémon."
			},
			damage: 180,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
