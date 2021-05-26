import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Dusknoir",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 150,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Dusclops",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Spectral Breach",
			},
			effect: {
				en: "All Special Energy attached to Pokémon (both yours and your opponent’s) provide Colorless Energy and have no other effect.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spooky Shot",
			},

			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,



}

export default card
