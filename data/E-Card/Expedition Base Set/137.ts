import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Bill's Maintenance",
		fr: "Entretien de Léo",
		de: "Bills Wartung"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu'une carte Supporter à chaque tour. Quand vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-vous de cette carte.\n\nSi vous avez des cartes dans votre main, mélangez-en une à votre deck et piochez ensuite 3 cartes.",
		de: "Falls du mindestens eine Karte auf deiner Hand hast, mische 1 davon in dein Deck und ziehe dann 3 Karten."
	},

	thirdParty: {
		cardmarket: 275012,
		tcgplayer: 83837
	}
}

export default card
