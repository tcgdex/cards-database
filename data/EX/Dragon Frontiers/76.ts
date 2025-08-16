import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Island Hermit",
		fr: "L'ermite de l'île",
		de: "Insel-Eremit"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nChoisissez jusqu'à 2 de vos cartes Récompense et retournez-les. (Ces cartes restent retournées jusqu'à la fin de la partie.) Piochez 2 cartes.",
		de: "Wähle bis zu 2 deiner Preise und decke sie auf. (Diese Karten werden nicht wieder verdeckt.) Ziehe 2 Karten."
	},

	thirdParty: {
		cardmarket: 277281,
		tcgplayer: 86291
	}
}

export default card
