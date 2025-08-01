import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Palmer's Contribution",
		fr: "La contribution de Koner",
		de: "Viktors Beitrag"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		de: "Durchsuche deinen Ablagestapel nach bis zu 5 Karten in beliebiger Kombination aus Pokémon- und Basis-Energiekarten, zeige sie deinem Gegner und mische sie in dein Deck."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278830
	}
}

export default card
