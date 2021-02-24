import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Xatu",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		178,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Natu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Cycle",
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 Energy card attached to the Defending Pokémon and 1 of your opponent's Benched Pokémon. Attach that Energy card to that Pokémon.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Super Psy",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
