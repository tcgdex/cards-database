import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Omastar",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		139,
	],

	types: [
		"Water",
	],
	evolveFrom: {
		en: "Omanyte",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Time Spiral",
			},
			effect: {
				en: "Choose 1 of your opponent's Evolved Pokémon. Remove the highest Stage Evolution card from that Pokémon and have your opponent shuffle that card into his or her deck.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Primal Tentacles",
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Helix Fossil, Dome Fossil, and Old Amber in your discard pile.",
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	retreat: 1,



}

export default card
