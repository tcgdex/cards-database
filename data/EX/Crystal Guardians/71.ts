import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Bill's Maintenance",
		fr: "Entretien de Leo",
		de: "Bills Wartung"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nSi vous avez des cartes en main, mélangez-en 1 à votre deck puis piochez 3 cartes.",
		de: "Wenn du mindestens 1 Karte auf der Hand hast, mische 1 von ihnen in dein Deck und ziehe dann 3 Karten."
	},

	thirdParty: {
		cardmarket: 277152
	}
}

export default card
