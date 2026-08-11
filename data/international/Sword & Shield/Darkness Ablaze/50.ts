import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [746],

	name: {
		'en-us': "Wishiwashi",
		'fr-fr': "Froussardine",
		'es-es': "Wishiwashi",
		'it-it': "Wishiwashi",
		'pt-br': "Wishiwashi",
		'de-de': "Lusardin"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 30,

	types: [
		"Water",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Deep Sea Swirl",
				'fr-fr': "Remous Abyssal",
				'es-es': "Remolino de Alta Mar",
				'it-it': "Vortice Abissale",
				'pt-br': "Giro em Mar Profundo",
				'de-de': "Tiefseewirbel"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw 8 cards.",
				'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 8 cartes.",
				'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 8 cartas.",
				'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca otto carte.",
				'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre 8 cartas.",
				'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 8 Karten."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Wave Splash",
				'fr-fr': "Grosse Vague",
				'es-es': "Chapoteo Ondulante",
				'it-it': "Schizzi d'Onda",
				'pt-br': "Onda Borrifante",
				'de-de': "Wellenplatscher"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Individually, they're incredibly weak. It's by gathering up into schools that they're able to confront opponents."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483124,
				tcgplayer: 219375
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483124,
				tcgplayer: 219375
			}
		},
	],
}

export default card
