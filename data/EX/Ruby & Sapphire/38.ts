import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Linoone",
		fr: "Lineon"
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		264,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Zigzagoon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Seek Out",
				fr: "À la recherche"
			},
			effect: {
				en: "Search your deck for up to 2 cards and put them into your hand. Shuffle your deck afterward.",
				fr: "Choisissez deux cartes dans votre deck. Montrez-les à votre adversaire et placez-les dans votre main. Mélangez ensuite votre deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Continuous Headbutt",
				fr: "Coup d'boule sans fin"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 40 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que ce soit pile. Cette attaque inflige 40 dégâts multipliés par le nombre de face."
			},
			damage: "40×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
