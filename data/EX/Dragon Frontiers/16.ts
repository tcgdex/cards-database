import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Gligar δ",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		207,
	],
	hp: 60,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sting Turn",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and switch Gligar with 1 of your Benched Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Sting",
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, this attack does 10 damage plus 10 more damage and the Defending Pokémon is now Poisoned.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
