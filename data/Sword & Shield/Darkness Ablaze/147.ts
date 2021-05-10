import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Staraptor",
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 150,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Staravia",
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hurricane Blender",
			},
			effect: {
				en: "Move any amount of Energy from your Pokémon to your other Pokémon in any way you like.",
			},
			damage: 70,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Brave Bird",
			},
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
			},
			damage: 170,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],

	regulationMark: "D"
}

export default card
