import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Energy Recycle System",
		'fr-fr': "Recyclage d'énergie",
		'de-de': "Energie Wiederverwertung"
	},

	illustrator: "Zu-Ka",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Search your discard pile for basic Energy cards. You may either show 1 basic Energy card to your opponent and put it into your hand, or show 3 basic Energy cards to your opponent and shuffle them into your deck.",
		'fr-fr': "Choisissez dans votre pile de défausse des cartes Énergie de base. Vous pouvez soit montrer 1 carte Énergie de base à votre adversaire et la placer dans votre main ou montrer 3 cartes Énergie de base à votre adversaire et les mélanger avec votre deck.",
		'de-de': "Search your discard pile for basic Energy cards. You may either show 1 basic Energy card to your opponent and put it into your hand, or show 3 basic Energy cards to your opponent and shuffle them into your deck."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85217,
				cardmarket: 276727
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 85217,
				cardmarket: 276727
			},
		}
	],
}

export default card
