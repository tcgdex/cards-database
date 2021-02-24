import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Kangaskhan",
		fr: "Kangourex",
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		115,
	],
	hp: 130,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cross-Cut",
				fr: "Coupe Transversale",
			},
			effect: {
				en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 30 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hurricane Punch",
				fr: "Poing Ouragan",
			},
			effect: {
				en: "Flip 4 coins. This attack does 50 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
