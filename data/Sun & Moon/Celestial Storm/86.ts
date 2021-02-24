import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Sneasel",
		fr: "Farfuret",
	},
	illustrator: "Ken Sugimori",
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
				fr: "Combo-Griffe",
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 10,

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
				en: "Flip a coin for each Pokémon you have in play. This attack does 30 damage for each heads.",
				fr: "Lancez une pièce pour chacun de vos Pokémon en jeu. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
