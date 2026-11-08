import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Energy Returner",
		'fr-fr': "Récupérateur d’énergie",
		'de-de': "Energie-Rückgewinnung"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Cherchez 4 cartes Énergie de base dans votre pile de défausse, montrez-les à votre adversaire et mélangez-les à votre deck.",
		'en-us': "Search your discard pile for 4 basic Energy cards, show them to your opponent, and shuffle them into your deck.",
		'de-de': "Durchsuche deinen Ablagestapel nach 4 Basis-Energiekarten, zeige sie deinem Gegner und mische sie in dein Deck."
	},

	trainerType: "Item",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85234,
				cardmarket: 279230
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85234,
				cardmarket: 279230
			}
		},
	],

}

export default card
