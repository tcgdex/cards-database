import { Card } from "models/database/card"
import Set from "../Brilliant Stars Trainer Gallery"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Rapid Strike Style Mustard",
		'fr-fr': "Mustar Style Mille Poings",
		'es-es': "Mostaz Estilo Fluido",
		'it-it': "Mustard Stile Pluricolpo",
		'pt-br': "Mostarda Estilo Golpe Fluido",
		'de-de': "Fließender-Stil-Mastrich"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "$$$CARD.RULES.MISSING.TOKEN$$$",
		'fr-fr': "$$$CARD.RULES.MISSING.TOKEN$$$",
		'es-es': "$$$CARD.RULES.MISSING.TOKEN$$$",
		'it-it': "$$$CARD.RULES.MISSING.TOKEN$$$",
		'pt-br': "$$$CARD.RULES.MISSING.TOKEN$$$",
		'de-de': "$$$CARD.RULES.MISSING.TOKEN$$$"
	},

	trainerType: "Supporter",
	regulationMark: "E",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608759,
				tcgplayer: 264230
			}
		},
	],
}

export default card
