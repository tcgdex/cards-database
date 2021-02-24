import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Zigzagoon",
		fr: "Zigzaton",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		263,
	],
	hp: 50,
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
				en: "Pull Out",
				fr: "Déraciner",
			},
			effect: {
				en: "Search your discard pile for any 1 card, show it to your opponent, and put it on top of your deck.",
				fr: "Choisissez n'importe quelle carte dans votre pile de défausse, montrez-la à votre adversaire et placez-la au dessus de votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Stab",
				fr: "Coup double",
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
