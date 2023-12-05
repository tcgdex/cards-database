import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Castaway",
		fr: "Naufragé",
		de: "Schiffbrüchiger"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nChoisissez dans votre deck une carte Supporter, une carte Outil Pokémon et une carte Énergie de base. Montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
		de: "Durchsuche dein Deck nach einer Pokémon-Ausrüstungs-Karte und einer Basis-Energiekarte. Zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
	}
}

export default card
