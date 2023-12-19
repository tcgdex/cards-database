import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Fieldworker",
		fr: "Travailleur de terrain",
		de: "Feldarbeiter"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nPiochez 3 cartes. Votre adversaire peut également piocher une carte.",
		de: "Ziehe 3 Karten. Dein Gegner kann dann ebenfalls 1 Karte ziehen."
	}
}

export default card
