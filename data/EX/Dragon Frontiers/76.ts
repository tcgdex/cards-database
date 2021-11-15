import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Island Hermit",
		fr: "L'ermite de l'île"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nChoisissez jusqu'à 2 de vos cartes Récompense et retournez-les. (Ces cartes restent retournées jusqu'à la fin de la partie.) Piochez 2 cartes."
	}
}

export default card
