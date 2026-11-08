import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Plasma Energy",
		'fr-fr': "Énergie Plasma",
		'es-es': "Energía Plasma",
		'it-it': "Energia Plasma",
		'pt-br': "Energia de Plasma",
		'de-de': "Plasma-Energie"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		'fr-fr': "Cette carte fournit de l’Énergie Colorless.",
		'en-us': "This card provides Colorless Energy.",
		'es-es': "Esta carta proporciona Energía Colorless.",
		'it-it': "Cette carte fournit de l’Énergie Colorless.",
		'pt-br': "Este card fornece Energia Colorless.",
		'de-de': "Diese Karte liefert Colorless-Energie."
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 280867,
		tcgplayer: 88155
	}
}

export default card
