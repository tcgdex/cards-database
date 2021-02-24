import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Mewtwo",
	},
	illustrator: "Christopher Rush",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		150,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Energy Control",
			},
			effect: {
				en: "Flip a coin. If heads, choose a basic Energy card attached to 1 of your opponent's Pokémon and attach it to another of your opponent's Pokémon of your choice.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Telekinesis",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
			},
			damage: 30,

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
