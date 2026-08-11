import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Togepi",
		'fr-fr': "Togepi",
		'de-de': "Togepi"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [175],

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
				'en-us': "Minor Errand-Running",
				'fr-fr': "Rendez-vous mineur",
				'de-de': "Kleine Besorgung"
			},
			effect: {
				'en-us': "Flip 2 coins. For each heads, search your deck for a basic Energy card. Show those cards to your opponent, and then put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Lancez 2 pièces. Pour chaque face, cherchez dans votre deck une carte Énergie de base. Montrez ces cartes à votre adversaire avant de les ajouter à votre main. Mélangez ensuite votre deck.",
				'de-de': "Wirf 2 Münzen. Durchsuche jedesmal, wenn du \"Kopf\" geworfen hast, dein Deck nach einer Basis-Energiekarte. Zeige diese Karten deinem Gegner und nimm sie dann auf deine Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pound",
				'fr-fr': "Écras'face",
				'de-de': "Pfund"
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
				tcgplayer: 89931,
				cardmarket: 275190
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 89931,
				cardmarket: 275190
			}
		},
	]
}

export default card
