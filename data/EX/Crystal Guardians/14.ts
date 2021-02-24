import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Blastoise",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		9,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wartortle",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Water Pressure",
			},
			effect: {
				en: "As long as Blastoise's remaining HP is 40 or less, Blastoise does 40 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
			},
			effect: {
				en: "Does 50 damage plus 20 more damage for each Water Energy attached to Blastoise but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
			},
			damage: 50,

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
