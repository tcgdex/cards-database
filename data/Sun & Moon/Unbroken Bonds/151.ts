import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Dodrio",
		fr: "Dodrio",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		85,
	],
	hp: 100,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Doduo",
		fr: "Doduo",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tri Attack",
				fr: "Triplattaque",
			},
			effect: {
				en: "Flip 3 coins. This attack does 60 damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 60 dégâts pour chaque côté face.",
			},
			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Accelerating Stab",
				fr: "Poignard Accélérateur",
			},
			effect: {
				en: "This Pokémon can't use Accelerating Stab during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Poignard Accélérateur pendant votre prochain tour.",
			},
			damage: 90,

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




}

export default card
