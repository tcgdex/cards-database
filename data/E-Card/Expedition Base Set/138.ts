import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Copycat",
		fr: "Copieuse",
		de: "Nachahmerin"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu'une carte Supporter à chaque tour. Quand vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-vous de cette carte.\n\nMélangez votre main avec votre deck. Comptez ensuite le nombre de cartes dans la main de votre adversaire et piochez autant de cartes.",
		de: "Mische deine Hand in dein Deck. Zähle dann die Anzahl an Karten auf der Hand deines Gegners und ziehe so viele Karten."
	},

	thirdParty: {
		cardmarket: 275013
	}
}

export default card
