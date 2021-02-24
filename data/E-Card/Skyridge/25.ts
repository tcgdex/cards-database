import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Politoed",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		186,
	],
	hp: 110,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Poliwhirl",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sudden Growth",
			},
			effect: {
				en: "Attach any number of basic Energy cards from your hand to Politoed.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frog Hop",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Energy Splash",
			},
			effect: {
				en: "Move 2 Energy cards attached to Politoed to 1 or 2 of your Benched Pokémon. (You may put both on the same Pokémon, or 1 each on 2 different Pokémon.) If you have no Benched Pokémon, ignore this effect.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
