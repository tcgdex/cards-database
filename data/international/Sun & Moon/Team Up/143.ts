import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Grass Memory",
		'fr-fr': "ROM Plante",
		'es-es': "Disco Planta",
		'it-it': "ROM Erba",
		'pt-br': "Memória de Planta",
		'de-de': "Pflanzen-Disc"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Le Silvallié-GX auquel cette carte est attachée est un Pokémon Grass.",
		'en-us': "The Silvally-GX this card is attached to is a Grass Pokémon.",
		'es-es': "El Silvally-GX al que esté unida esta carta es un Pokémon Grass.",
		'it-it': "Il Silvally-GX a cui è assegnata questa carta è di tipo Grass.",
		'pt-br': "O Pokémon Silvally-GX ao qual esta carta está ligada é um Pokémon Grass.",
		'de-de': "Das Amigento-GX, an das diese Karte angelegt ist, ist ein Grass-Pokémon."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 369069,
		tcgplayer: 183938
	}
}

export default card
