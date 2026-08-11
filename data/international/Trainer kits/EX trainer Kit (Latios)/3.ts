import { Card } from 'models/database/card'
import Set from '../EX trainer Kit (Latios)'

const card: Card = {
	dexId: [264],
	set: Set,

	name: {
		'en-us': "Linoone",
		'fr-fr': "Lineon"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",
	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Zigzagoon",
		'fr-fr': "Zigzaton"
	},

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			'en-us': "Seek Out",
			'fr-fr': "À la recherche"
		},
		effect: {
			'en-us': "Search your deck for up to 2 cards and put them into your hand. Shuffle your deck afterward.",
			'fr-fr': "Choisissez deux cartes dans votre deck. Montrez-les à votre adversaire et placez-les dans votre main. Mélangez ensuite votre deck."
		}
	}, {
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			'en-us': "Continuous Headbutt",
			'fr-fr': "Coup d'boule sans fin"
		},
		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 40 damage times the number of heads.",
			'fr-fr': "Lancez une pièce jusqu'à ce que ce soit pile. Cette attaque inflige 40 dégâts multipliés par le nombre de face."
		},
		damage: "40×"
	}],

	weaknesses: [
		{
			type: "Fighting",
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275759,
				tcgplayer: 86805
			}
		},
	],

}

export default card
