import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Aipom",
		'fr-fr': "Capumain",
		'de-de': "Griffel"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [190],

	hp: 60,

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
				'en-us': "Imitate",
				'fr-fr': "Imiter",
				'de-de': "Nachäffen"
			},
			effect: {
				'en-us': "Draw cards until you have the same number of cards in your hand as your opponent.",
				'fr-fr': "Piochez jusqu’à ce que vous obteniez le même nombre de cartes dans votre main que votre adversaire.",
				'de-de': "Ziehe so viele Karten, bis du die gleiche Anzahl Handkarten hast wie dein Gegner."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tail Punch",
				'fr-fr': "Kogn’Keu",
				'de-de': "Schwanzhieb"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its tail is so powerful that it can use it to grab a tree branch and hold itself up in the air."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83493,
				cardmarket: 279585
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279585,
				tcgplayer: 83493
			}
		},
	],

}

export default card
