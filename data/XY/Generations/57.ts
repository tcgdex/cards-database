import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Tauros",
		fr: "Tauros",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		128,
	],
	hp: 110,
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
				en: "Take Down",
				fr: "Bélier",
			},
			effect: {
				en: "This Pokémon does 10 damage to itself.",
				fr: "Ce Pokémon s'inflige 10 dégâts.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Seething Anger",
				fr: "Furax",
			},
			effect: {
				en: "Flip a coin for each damage counter on this Pokémon. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce pour chaque marqueur de dégâts placé sur ce Pokémon. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "30×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
