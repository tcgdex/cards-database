import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Sneasel",
		fr: "Farfuret",
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		215,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-griffe",
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "10×",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Beat Up",
				fr: "Baston",
			},
			effect: {
				en: "Flip a coin for each of your Pokémon in play. This attack does 20 damage times the number of heads.",
				fr: "Lancez une pièce pour chacun de vos Pokémon en jeu. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 0
}

export default card
