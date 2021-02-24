import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		fr: "Relicanth",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 80,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				fr: "Pression abyssale",
			},
			effect: {
				fr: "Lors du prochain tour de votre adversaire, le Coût de retraite du Pokémon Défenseur est Colorless Colorless de plus.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Aqua-vague",
			},
			effect: {
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque face.",
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
