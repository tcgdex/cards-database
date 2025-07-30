import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Energy Returner",
		fr: "Récupérateur d’énergie",
		de: "Energie-Rückgewinnung"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cherchez 4 cartes Énergie de base dans votre pile de défausse, montrez-les à votre adversaire et mélangez-les à votre deck.",
		en: "Search your discard pile for 4 basic Energy cards, show them to your opponent, and shuffle them into your deck.",
		de: "Durchsuche deinen Ablagestapel nach 4 Basis-Energiekarten, zeige sie deinem Gegner und mische sie in dein Deck."
	},

	trainerType: "Item",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	hp: 0,

	thirdParty: {
		cardmarket: 279230,
		tcgplayer: 85234
	}
}

export default card
