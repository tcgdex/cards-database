import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Unown [J]",
	},
	illustrator: "Hideki Kazama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
	],
	hp: 40,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "[Join]",
			},
			effect: {
				en: "Once during your turn (before you attack), if you have Unown J, Unown O, Unown I, and Unown N on your Bench, you may search your deck for a Basic Pokémon or Evolution Pokémon card. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
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
