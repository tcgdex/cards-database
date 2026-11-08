import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Item Finder",
		'fr-fr': "Récupérateur",
		'de-de': "Detektor",
		'it-it': "Oggetti Smarriti"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Discard 2 of the other cards from your hand in order to put a Trainer card from your discard pile into your hand.",
		'fr-fr': "Défaussez 2 des autres cartes de votre main pour placer une carte Dresseur de votre pile de défausse dans votre main.",
		'de-de': "Entferne 2 Karten Deiner Hand, um eine Trainerkarte aus Deinem Ablagestapel aufzunehmen.",
		'it-it': "Scarta 2 delle altre carte che hai in mano e sostituiscile con una carta Addestramento presa dalla tua pila degli scarti."
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273769,
				tcgplayer: 42420
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107072
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107072
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
