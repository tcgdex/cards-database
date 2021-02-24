import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Mamoswine",
		fr: "Mammochon",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		473,
	],
	hp: 180,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Piloswine",
		fr: "Cochignon",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Stomp",
				fr: "Double Écrasement",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Forceful Tackle",
				fr: "Charge Énergique",
			},
			effect: {
				en: "You may put up to 9 damage counters on this Pokémon. This attack does 10 more damage for each damage counter you placed in this way.",
				fr: "Vous pouvez placer jusqu’à 9 marqueurs de dégâts sur ce Pokémon. Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé de cette façon.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
