import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Premier Ball",
		fr: "Honor ball",
		de: "Premierball"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez dans votre deck ou votre pile de défausse un Pokémon LV.X, montrez-le à votre adversaire et placez-le dans votre main. Si vous cherchez dans votre deck, mélangez votre deck.",
		de: "Durchsuche dein Deck oder deinen Ablagestapel nach 1 Pokémon LV.X-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Falls du dein Deck durchsucht hast, mische es danach."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 278003
	}
}

export default card
