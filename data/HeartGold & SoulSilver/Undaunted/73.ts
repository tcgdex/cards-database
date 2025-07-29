import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Energy Exchanger",
		fr: "Chang’Énergie",
		de: "Energieaustausch"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez une carte Énergie dans votre main, montrez-la à votre adversaire et placez-la sur le dessus de votre deck. Cherchez une carte Énergie dans votre deck, montrez-la à votre adversaire, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		en: "Choose an Energy card from your hand, show it to your opponent, and put it on top of your deck. Search your deck for an Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		de: "Wähle 1 Energiekarte von deiner Hand, zeige sie deinem Gegner und lege sie oben auf dein Deck. Durchsuche dein Deck nach 1 Energiekarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische anschließend dein Deck."
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
		cardmarket: 279326
	}
}

export default card
