import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Ambipom",
		fr: "Capidextre",
	},
	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		424,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Aipom",
		fr: "Capumain",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Hit",
				fr: "Coup Double",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hand Fling",
				fr: "Catapu-Main",
			},
			effect: {
				en: "Does 10 damage times the number of cards in your hand.",
				fr: "Inflige 10 dégâts multipliés par le nombre de cartes dans votre main.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
