import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Jirachi",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Secret Rare",
	category: "Pokemon",

	set: Set,

	hp: 70,
	types: [
		"Metal",
	],



	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dreamy Revelation",
			},
			effect: {
				en: "Once during your turn, if this Pokémon is in the Active Spot, you may look at the top 2 cards of your deck and put 1 of them into your hand. Put the other card back on top of your deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Fighting",
				"Metal",
			],
			name: {
				en: "Amazing Star",
			},
			effect: {
				en: "Search your deck for up to 7 basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
