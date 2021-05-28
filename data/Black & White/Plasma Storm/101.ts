import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Snorlax",
		fr: "Ronflex",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		143,
	],
	hp: 130,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Block",
				fr: "Barrage",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent's Active Pokémon can't retreat.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, le Pokémon Actif de votre adversaire ne peut pas battre en retraite.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Teampact",
				fr: "Teampact",
			},
			effect: {
				en: "Does 30 damage times the number of Team Plasma Pokémon you have in play.",
				fr: "Inflige 30 dégâts multipliés par le nombre de Pokémon de la Team Plasma que vous avez en jeu.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
