import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Victory Piece",
		'fr-fr': "Éclat de Victoire",
		'es-es': "Pieza Victoria",
		'it-it': "Portavittoria",
		'pt-br': "Peça da Vitória",
		'de-de': "TriumVant"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Si cette carte est attachée à Victini-EX, Victini-EX peut utiliser ses attaques indépendamment de la quantité ou du type d’Énergie qui lui est attachée.",
		'en-us': "If this card is attached to Victini-EX, Victini-EX can use its attacks regardless of the amount or type of Energy attached to it.",
		'es-es': "Si esta carta está unida a Victini-EX, Victini-EX puede usar sus ataques sin importar la cantidad o el tipo de Energía unida a él.",
		'it-it': "Si cette carte est attachée à Victini-EX, Victini-EX peut utiliser ses attaques indépendamment de la quantité ou du type d’Énergie qui lui est attachée.",
		'pt-br': "Se este card estiver ligado a Victini-EX, Victini-EX poderá usar seus ataques independentemente da quantidade ou do tipo de Energia ligada a ele.",
		'de-de': "Wenn diese Karte an Victini-EX angelegt ist, kann Victini-EX seine Angriffe ungeachtet der Anzahl oder des Typs der angelegten Energien einsetzen."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 280870,
		tcgplayer: 90357
	}
}

export default card
