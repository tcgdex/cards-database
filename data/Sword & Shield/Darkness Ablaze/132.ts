import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Copperajah",
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 190,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Cufant",
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Antibacterial Skin",
			},
			effect: {
				en: "This Pokémon can’t be affected by any Special Conditions.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vengeful Stomp",
			},
			effect: {
				en: "If your Benched Pokémon have any damage counters on them, this attack does 120 more damage.",
			},
			damage: "120+",

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

	retreat: 4,
	regulationMark: "D"
}

export default card
