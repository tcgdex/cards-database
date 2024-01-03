import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Mr. Stone's Project",
		fr: "Le projet de M. Rochard",
		de: "Mr. Trumms Projekt"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nChoisissez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck. Ou, choisissez dans votre pile de défausse jusqu'à 2 cartes Énergie de base, montrez-les à votre adversaire et placez-les dans votre main.",
		de: "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach. Oder: Durchsuche deinen Ablagestapel nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf die Hand."
	}
}

export default card
