import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Glameow",
		'fr-fr': "Chaglam",
		'es-es': "Glameow",
		'it-it': "Glameow",
		'pt-br': "Glameow",
		'de-de': "Charmian"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		431,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Act Cute",
				'fr-fr': "Si Mignon",
				'es-es': "Hacerse el Lindo",
				'it-it': "Furbetto",
				'pt-br': "Atuação Fofa",
				'de-de': "Kokettieren"
			},
			effect: {
				'en-us': "Your opponent puts a card from his or her hand on the bottom of his or her deck.",
				'fr-fr': "Votre adversaire place une carte de sa main en dessous de son deck.",
				'es-es': "Tu rival pone 1 carta de su mano en la parte inferior de su baraja.",
				'it-it': "Il tuo avversario prende una carta dalla sua mano e la aggiunge in fondo al suo mazzo.",
				'pt-br': "Seu oponente coloca um card da mão dele(a) no fundo de seu próprio baralho.",
				'de-de': "Dein Gegner legt 1 seiner Handkarten unter sein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'es-es': "Arañazo",
				'it-it': "Graffio",
				'pt-br': "Arranhão",
				'de-de': "Kratzer"
			},

			damage: 20,

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
		'en-us': "When it's happy, Glameow demonstrates beautiful movements of its tail, like a dancing ribbon.",
	},

	thirdParty: {
		cardmarket: 288268,
		tcgplayer: 111626
	}
}

export default card
