import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Aaron's Collection",
		fr: "La collection d'Aaron",
		de: "Herbaros Sammlung"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		de: "Durchsuche deinen Ablagestapel nach bis zu 2 Karten in beliebiger Kombination aus Pokémon SP- und Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf die Hand."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278662,
		tcgplayer: 83439
	}
}

export default card
