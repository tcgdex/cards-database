import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Dodrio",
		fr: "Dodrio",
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		85,
	],

	hp: 80,

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
			type: "Poke-BODY",
			name: {
				en: "Retreat Aid",
				fr: "Soutien de retraite",
			},
			effect: {
				en: "As long as Dodrio is on your Bench, your Active Pokémon’s Retreat Cost is ColorlessColorless less.",
				fr: "Tant que Dodrio est sur votre Banc, le Coût de retraite de votre Pokémon Actif est réduit de ColorlessColorless.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Incessant Peck",
				fr: "Rafal’Bec",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 damage plus 20 more damage for each heads.",
				fr: "Lancez une pièce jusqu’à ce qu’elle tombe sur pile.  Cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires pour chaque côté face.",
			},
			damage: "20+",

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
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It collects data and plans three times as wisely, but it may think too much and fall into a state of immobility."
	}
}

export default card
