import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Gothitelle",
	},

	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gothorita",
	},

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Mind Bend",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
			},
			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Bend",
			},
			effect: {
				en: "Choose 2 random cards from your opponent’s hand. Your opponent reveals those cards and shuffles them into their deck.",
			},
			damage: 90,

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

	retreat: 2,
	regulationMark: "D"
}

export default card
