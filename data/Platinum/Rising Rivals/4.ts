import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Floatzel GL",
		fr: "Mustéflott  Niv. 37",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		419,
	],
	hp: 80,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Incite",
				fr: "Inciter",
			},
			effect: {
				en: "Search your discard pile for up to 2 Supporter cards, show them to your opponent, and put them into your hand.",
				fr: "Choisissez dans votre pile de défausse jusqu'à 2 cartes Supporter, montrez-les à votre adversaire et placez-les dans votre main.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Giant Wave",
				fr: "Vague géante",
			},
			effect: {
				en: "Floatzel can't use Giant Wave during your next turn.",
				fr: "Mustéflott  ne peut pas utiliser Vague géante lors de votre prochain tour.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
