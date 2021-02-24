import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Dodrio",
		fr: "Dodrio",
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		85,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Doduo",
		fr: "Doduo",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Retreat Aid",
				fr: "Soutien de Retraite",
			},
			effect: {
				en: "As long as this Pokémon is on your Bench, your Active Pokémon's Retreat Cost is ColorlessColorless less.",
				fr: "Tant que ce Pokémon est sur votre Banc, le Coût de Retraite de votre Pokémon Actif est diminué de ColorlessColorless.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Attack",
				fr: "Furie",
			},
			effect: {
				en: "Flip 3 coins. This attack does 40 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 40,

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
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
