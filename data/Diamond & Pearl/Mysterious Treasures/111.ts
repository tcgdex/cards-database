import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Fossil Excavator",
		fr: "Excavateur de fossiles",
		de: "Fossilienbagger"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nChoisissez dans votre deck ou votre pile de défausse une carte Dresseur dont nom comporte Fossile ou une carte Évolution de Niveau 1 ou 2 qui évolue d'un Fossile. Montrez-la à votre adversaire et placez-la dans votre main. Si vous avez cherché dans votre deck, mélangez-le.",
		de: "Durchsuche dein Deck oder deinen Ablagestapel nach 1 Trainerkarte mit Fossil im Namen oder einer Evolutionskarte der Phase 1 oder Phase 2, die sich aus einem Fossil entwickelt. Zeige sie deinem Gegner und nimm sie auf die Hand. Falls du dein Deck durchsucht hast, mische es danach."
	}
}

export default card
