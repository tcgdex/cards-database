import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Linoone",
		fr: "Lineon",
		de: "Geradaks"
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
		fr: "Zigzaton"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Seek Out",
				fr: "À la recherche",
				de: "Seek Out"
			},
			effect: {
				en: "Search your deck for up to 2 cards and put them into your hand. Shuffle your deck afterward.",
				fr: "Choisissez deux cartes dans votre deck. Montrez-les à votre adversaire et placez-les dans votre main. Mélangez ensuite votre deck.",
				de: "Search your deck for up to 2 cards and put them into your hand. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Continuous Headbutt",
				fr: "Coup d'boule sans fin",
				de: "Continuous Headbutt"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 40 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que ce soit pile. Cette attaque inflige 40 dégâts multipliés par le nombre de face.",
				de: "Flip a coin until you get tails. This attack does 40 damage times the number of heads."
			},
			damage: "40x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 275686,
		tcgplayer: 86803
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
