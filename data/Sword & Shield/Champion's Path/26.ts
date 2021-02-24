import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Machamp",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 170,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Machoke",
	},



	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Macho Revenge",
			},
			effect: {
				en: "This attack does 20 damage for each Fighting Pokémon in your discard pile.",
			},
			damage: "20×",

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Dynamite Punch",
			},
			effect: {
				en: "This Pokémon also does 50 damage to itself.",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
