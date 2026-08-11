import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Purugly G",
		'fr-fr': "Chaffreux ",
		'de-de': "Shnurgarst G"
	},

	illustrator: "Ryota Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [432],

	hp: 90,

	types: [
		"Colorless"
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Chip Off",
				'fr-fr': "Grignoter",
				'de-de': "Chip Off"
			},
			effect: {
				'en-us': "If your opponent has 6 or more cards in his or her hand, discard a number of cards without looking until your opponent has 5 cards left in his or her hand.",
				'fr-fr': "Si votre adversaire possède plus de 6 cartes en main, défaussez des cartes sans regarder jusqu'à ce qu'il ne reste à votre adversaire que 5 cartes en main.",
				'de-de': "If your opponent has 6 or more cards in his or her hand, discard a number of cards without looking until your opponent has 5 cards left in his or her hand."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poor Sleep",
				'fr-fr': "Sommeil agité",
				'de-de': "Poor Sleep"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 50 damage plus 30 more damage and Purugly G is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires et Chaffreux  est maintenant Endormi.",
				'de-de': "Flip a coin. If heads, this attack does 50 damage plus 30 more damage and Purugly G is now Asleep."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 88466,
				cardmarket: 278509
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278509,
				tcgplayer: 88466
			}
		}
	],

}

export default card
