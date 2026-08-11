import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Double Colorless Energy",
		'fr-fr': "Double Énergie Incolore",
		'es-es': "Doble Energía Incolora",
		'it-it': "Energia Incolore doppia",
		'pt-br': "Energia Incolor Dupla",
		'de-de': "Doppel-Farblos-Energie"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Energy",
	set: Set,

	effect: {
		'fr-fr': "Double Énergie Incolore fournit de l’Énergie ColorlessColorless.",
		'en-us': "Double Colorless Energy provides ColorlessColorless Energy.",
		'es-es': "Esta carta proporciona 2 Energías Colorless.",
		'it-it': "Un’Energia Incolore doppia fornisce ColorlessColorless.",
		'pt-br': "A Energia Incolor Dupla fornece Energias ColorlessColorless.",
		'de-de': "Doppel-Farblos-Energie liefert ColorlessColorless-Energie."
	},

	energyType: "Special",

	thirdParty: {
		cardmarket: 297617,
		tcgplayer: 131062
	}
}

export default card
