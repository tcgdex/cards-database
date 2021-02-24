import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Parasect",
		fr: "Parasect",
	},
	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		47,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Paras",
		fr: "Paras",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Panic Spores",
				fr: "Spores en Panique",
			},
			effect: {
				en: "Put 2 damage counters on your opponent's Confused Pokémon between turns.",
				fr: "Placez 2 marqueurs de dégâts sur le Pokémon Confus de votre adversaire entre chaque tour.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Mysterious Powder",
				fr: "Poudre Mystérieuse",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
