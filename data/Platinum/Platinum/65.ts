import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Wartortle",
		fr: "Carabaffe",
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		8,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Squirtle",
		fr: "Carapuce",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Slap",
				fr: "Torgnoles",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Rocket Tackle",
				fr: "Lance roquette",
			},
			effect: {
				en: "Wartortle does 10 damage to itself. Flip a coin. If heads, prevent all damage done to Wartortle by attacks during your opponent's next turn.",
				fr: "Carabaffe s'inflige 10 dégâts. Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Carabaffe par des attaques lors du prochain tour de votre adversaire.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
