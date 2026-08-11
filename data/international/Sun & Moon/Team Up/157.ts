import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Water Memory",
		'fr-fr': "ROM Eau",
		'es-es': "Disco Agua",
		'it-it': "ROM Acqua",
		'pt-br': "Memória de Água",
		'de-de': "Wasser-Disc"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Le Silvallié-GX auquel cette carte est attachée est un Pokémon Water.",
		'en-us': "The Silvally-GX this card is attached to is a Water Pokémon.",
		'es-es': "El Silvally-GX al que esté unida esta carta es un Pokémon Water.",
		'it-it': "Il Silvally-GX a cui è assegnata questa carta è di tipo Water.",
		'pt-br': "O Pokémon Silvally-GX ao qual esta carta está ligada é um Pokémon Water.",
		'de-de': "Das Amigento-GX, an das diese Karte angelegt ist, ist ein Water-Pokémon."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 369082,
		tcgplayer: 183961
	}
}

export default card
