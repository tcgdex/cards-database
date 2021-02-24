import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Zacian",
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,







	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Energy Stream",
			},
			effect: {
				en: "Attach a Metal Energy card from your discard pile to this Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Smashing Edge",
			},
			effect: {
				en: "Flip a coin. If tails, discard 2 Energy from this Pokémon.",
			},
			damage: 120,

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
	retreat: 2,



}

export default card
