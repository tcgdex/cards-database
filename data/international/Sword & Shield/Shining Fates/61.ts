import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Bouclier Rouillé",
		'en-us': "Rusted Shield",
		'es-es': "Escudo Oxidado",
		'it-it': "Scudo rovinato",
		'pt-br': "Escudo Enferrujado",
		'de-de': "Rostiger Schild"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'fr-fr': "Cette carte ajoute 70 PV au Zamazenta-V auquel elle est attachée.",
		'en-us': "The Zamazenta V this card is attached to gets +70 HP.",
		'es-es': "El Zamazenta V al que esté unida esta carta obtiene 70 PS más.",
		'it-it': "Lo Zamazenta-V a cui è assegnata questa carta ha 70 PS in più.",
		'pt-br': "O Zamazenta V ao qual esta carta está ligada recebe 70 PS a mais.",
		'de-de': "Das Zamazenta-V, an das diese Karte angelegt ist, erhält +70 KP."
	},

	trainerType: "Tool",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 539328,
				tcgplayer: 232544
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539328,
				tcgplayer: 232544
			}
		},
	],
}

export default card
