import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

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
		'fr-fr': "Cette carte fournit de l'Énergie Colorless.",
		'en-us': "This card provides Colorless Energy.",
		'es-es': "Esta carta proporciona Energía Colorless.",
		'it-it': "Questa carta fornisce Energia Colorless",
		'pt-br': "Este card fornece Energia Colorless.",
		'de-de': "Diese Karte liefert Colorless"
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 280984,
		tcgplayer: 88156
	}
}

export default card
