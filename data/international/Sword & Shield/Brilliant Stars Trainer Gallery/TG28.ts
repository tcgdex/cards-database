import { Card } from "models/database/card"
import Set from "../Brilliant Stars Trainer Gallery"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Single Strike Style Mustard",
		'fr-fr': "Mustar Style Poing Final",
		'es-es': "Mostaz Estilo Brusco",
		'it-it': "Mustard Stile Singolcolpo",
		'pt-br': "Mostarda Estilo Golpe Decisivo",
		'de-de': "Fokussierter-Stil-Mastrich"
	},

	illustrator: "Souichirou Gunjima",
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
				cardmarket: 608760,
				tcgplayer: 264231
			}
		},
	],
}

export default card
