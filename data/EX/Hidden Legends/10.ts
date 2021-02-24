import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Medicham",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		308,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Meditite",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Meditate",
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Chakra Points",
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each card in your opponent's hand.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
