import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "React Energy",
		'fr-fr': "Énergie réaction",
		'de-de': "Reaktions-Energie"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		'en-us': "React Energy provides Colorless Energy.",
		'de-de': "Reaktions-Energie liefert  Energie.",
		'fr-fr': "Énergie réaction fournit une Énergie Incolore.",
	},

	thirdParty: {
		cardmarket: 276959,
		tcgplayer: 88649
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
