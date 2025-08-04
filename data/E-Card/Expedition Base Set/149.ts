import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Professor Oak's Research",
		fr: "Recherches du professeur Chen",
		de: "Professor Eichs Nachforschunge"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu'une carte Supporter à chaque tour. Quand vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-vous de cette carte.\n\nMélangez votre main à votre deck. Piochez ensuite 5 cartes.",
		de: "Mische deine Hand in dein Deck, und ziehe dann 5 Karten."
	},

	thirdParty: {
		cardmarket: 275024,
		tcgplayer: 88402
	}
}

export default card
