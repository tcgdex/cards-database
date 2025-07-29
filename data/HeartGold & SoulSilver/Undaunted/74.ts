import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Flower Shop Lady",
		fr: "Fleuriste",
		de: "Blumenfrau"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cherchez 3 Pokémon et 3 cartes Énergie de base dans votre pile de défausse. Montrez-les à votre adversaire et mélangez-les avec votre deck.",
		en: "Search your discard pile for 3 Pokémon and 3 basic Energy cards. Show them to your opponent and shuffle them into your deck.",
		de: "Durchsuche deinen Ablagestapel nach 3 Pokémon- und 3 Basis-Energiekarten. Zeige sie deinem Gegner und mische sie in dein Deck."
	},

	trainerType: "Supporter",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	hp: 0,

	thirdParty: {
		cardmarket: 279327
	}
}

export default card
