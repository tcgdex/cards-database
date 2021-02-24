import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Haxorus",
		fr: "Tranchodon",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		612,
	],
	hp: 140,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Fraxure",
		fr: "Incisache",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dual Chop",
				fr: "Double Baffe",
			},
			effect: {
				en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giga Impact",
				fr: "Giga Impact",
			},
			effect: {
				en: "This Pokémon can't attack during your next turn.",
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			},
			damage: 120,

		},
	],


	retreat: 2,



}

export default card
