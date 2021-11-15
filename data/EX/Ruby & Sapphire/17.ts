import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Donphan",
		fr: "Donphan"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		232,
	],
	hp: 80,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Phanpy",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rend",
				fr: "Déchirer"
			},
			effect: {
				en: "If the Defending Pokémon has any damage counters on it, this attack does 20 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur possède des marqueurs de dégât, cette attaque lui inflige 40 dégâts."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Spin",
				fr: "Double tour"
			},
			effect: {
				en: "Flip 2 coins. This attack does 60 damage times the number of heads.",
				fr: "Lancez deux pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de face."
			},
			damage: "60×",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
