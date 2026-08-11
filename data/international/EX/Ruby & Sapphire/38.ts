import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Linoone",
		'fr-fr': "Lineon",
		'de-de': "Geradaks"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [264],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Zigzagoon",
		'fr-fr': "Zigzaton"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Seek Out",
				'fr-fr': "À la recherche",
				'de-de': "Seek Out"
			},
			effect: {
				'en-us': "Search your deck for up to 2 cards and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez deux cartes dans votre deck. Montrez-les à votre adversaire et placez-les dans votre main. Mélangez ensuite votre deck.",
				'de-de': "Search your deck for up to 2 cards and put them into your hand. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Continuous Headbutt",
				'fr-fr': "Coup d'boule sans fin",
				'de-de': "Continuous Headbutt"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 40 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que ce soit pile. Cette attaque inflige 40 dégâts multipliés par le nombre de face.",
				'de-de': "Flip a coin until you get tails. This attack does 40 damage times the number of heads."
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


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275686,
				tcgplayer: 86803
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275686,
				tcgplayer: 86803
			}
		},
	],

}

export default card
