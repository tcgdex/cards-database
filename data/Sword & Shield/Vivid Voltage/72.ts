import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Chimecho",
	},
	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 70,
	types: [
		"Psychic",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Auspicious Tone",
			},
			effect: {
				en: "Search your deck for a Pokémon and a Supporter card, reveal them, and put them into your hand. Then, shuffle your deck.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Hypnoblast",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
			},
			damage: 30,

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
			type: "Fightning",
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
