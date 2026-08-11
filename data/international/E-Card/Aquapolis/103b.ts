import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Porygon",
		'fr-fr': "Porygon",
		'de-de': "Porygon"
	},

	illustrator: "Masako Yamashita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [137],

	hp: 40,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Data Sort",
				'fr-fr': "Tri de données",
				'de-de': "Datensortierer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose a Trainer card from your discard pile, show it to your opponent, and then shuffle it into your deck.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez une carte Dresseur de votre pile de défausse, montrez-la à votre adversaire, et mélangez-la ensuite dans votre deck.",
				'de-de': "Wirf eine Münze. Nimm bei \"Kopf\" eine Trainerkarte aus deinem Ablagestapel, zeige sie deinem Gegner und mische sie in dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Koud'bec",
				'de-de': "Schnabel"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 88306,
				cardmarket: 275179
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 88306,
				cardmarket: 275179
			}
		},
	]
}

export default card
