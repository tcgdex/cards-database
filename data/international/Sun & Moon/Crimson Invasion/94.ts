import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Fighting Memory",
		'fr-fr': "ROM Combat",
		'es-es': "Disco Lucha",
		'it-it': "ROM Lotta",
		'pt-br': "Memória de Luta",
		'de-de': "Kampf-Disc"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Le Silvallié-GX auquel cette carte est attachée est un Pokémon Fighting.",
		'en-us': "The Silvally-GX this card is attached to is a Fighting Pokémon.",
		'es-es': "El Silvally-GX al que está unida esta carta es un Pokémon Fighting.",
		'it-it': "Il Silvally-GX a cui è assegnata questa carta è di tipo Fighting.",
		'pt-br': "O Pokémon Silvally-GX ao qual esta carta está ligada é um Pokémon Fighting.",
		'de-de': "Das Amigento-GX, an das diese Karte angelegt ist, ist ein Fighting-Pokémon."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 311941,
		tcgplayer: 149119
	}
}

export default card
