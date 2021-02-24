import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Miltank",
		fr: "Écrémeuh",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		241,
	],
	hp: 90,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Healing Milk",
				fr: "Lait guérisseur",
			},
			effect: {
				en: "Flip 2 coins. For each heads, remove 3 damage counters from 1 of your Pokémon.",
				fr: "Lancez 2 pièces. Pour chaque face, retirez à 1 de vos Pokémon 3 marqueurs de dégât.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Continuous Tumble",
				fr: "Roulage continue",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
