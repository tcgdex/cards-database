import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Professor Elm's Training Method",
		fr: "Méthode d'entraînement du Prof. Orme",
		de: "Professor Linds Trainingsmethoden"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nChoisissez dans votre deck une carte Évolution, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
		de: "Durchsuche dein Deck nach einer Entwicklungskarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische dein Deck danach."
	},

	thirdParty: {
		cardmarket: 276735,
		tcgplayer: 88390
	}
}

export default card
