import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Houndour",
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		228,
	],
	hp: 40,
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
				en: "Bite",
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Plunder",
			},
			effect: {
				en: "Before doing damage, discard all Trainer cards attached to the Defending Pokémon.",
			},
			damage: 20,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
