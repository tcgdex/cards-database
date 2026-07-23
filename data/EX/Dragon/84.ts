import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Energy Recycle System",
		fr: "Recyclage d'énergie",
		de: "Energie Wiederverwertung"
	},

	illustrator: "Zu-Ka",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		en: "Search your discard pile for basic Energy cards. You may either show 1 basic Energy card to your opponent and put it into your hand, or show 3 basic Energy cards to your opponent and shuffle them into your deck.",
		fr: "Cherchez dans votre deck des cartes Énergie de base. Vous pouvez soit montrer une carte Énergie de base à votre adversaire et la placer dans votre main, soit montrer trois cartes Énergie de base à votre adversaire et les mélanger à votre deck.",
		de: "Durchsuche deinen Ablagestapel nach Basis-Energiekarten. Wähle entweder 1 Basis Energiekarte, zeige sie deinem Gegner und nimm sie auf die Hand oder wähle 3 Basis Energiekarten, zeige sie deinem Gegner und mische sie in dein Deck."
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85216,
				cardmarket: 275961
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85216,
				cardmarket: 275961
			},
		},
	],

}

export default card
