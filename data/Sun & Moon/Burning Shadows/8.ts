import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Tangrowth",
		fr: "Bouldeneu",
	},
	illustrator: "tetsuya koizumi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		465,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Tangela",
		fr: "Saquedeneu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Giga Drain",
				fr: "Giga-Sangsue",
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
				fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
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
				en: "Crosswise Whip",
				fr: "Fouets Croisés",
			},
			effect: {
				en: "Flip 4 coins. This attack does 50 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
