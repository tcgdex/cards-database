import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Wartortle",
		'fr-fr': "Carabaffe",
		'de-de': "Schillok"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [8],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Squirtle",
		'fr-fr': "Carapuce"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Double Slap",
				'fr-fr': "Torgnoles",
				'de-de': "Double Slap"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 2 coins. This attack does 20 damage times the number of heads."
			},
			damage: "20×",

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Rocket Tackle",
				'fr-fr': "Lance roquette",
				'de-de': "Rocket Tackle"
			},
			effect: {
				'en-us': "Wartortle does 10 damage to itself. Flip a coin. If heads, prevent all damage done to Wartortle by attacks during your opponent's next turn.",
				'fr-fr': "Carabaffe s'inflige 10 dégâts. Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Carabaffe par des attaques lors du prochain tour de votre adversaire.",
				'de-de': "Wartotle does 10 damage to itself. Flip a coin. If heads, prevent all damage done to Wartortle by attacks during your opponent's next turn."
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

	description: {
		'en-us': "It is said to live 10,000 years. Its furry tail is popular as a symbol of longevity."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 90490,
				cardmarket: 278486
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278486,
				tcgplayer: 90490
			}
		}
	],

}

export default card
