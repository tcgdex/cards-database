import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Double Colorless Energy",
		'fr-fr': "Double Énergie Incolore",
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		'fr-fr': "Double Énergie Incolore fournit de l'Énergie ColorlessColorless.",
		'en-us': "Double Colorless Energy provides ColorlessColorless Energy."
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 288509,
		tcgplayer: 113732
	}
}

export default card
