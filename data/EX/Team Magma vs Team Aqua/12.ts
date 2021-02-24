import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Torkoal",
	},
	illustrator: "K. Hoshiba",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		324,
	],
	hp: 80,
	types: [
		"Fire",
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Magma Burn",
			},
			effect: {
				en: "Discard the top card from your opponent's deck, and flip a coin. If tails, discard a Fire Energy attached to Team Magma's Torkoal.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Hot Air",
			},
			effect: {
				en: "Discard a Fire Energy attached to Team Magma's Torkoal, and your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
