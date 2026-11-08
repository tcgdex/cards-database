import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Fire Memory",
		'fr-fr': "ROM Feu",
		'es-es': "Disco Fuego",
		'it-it': "ROM Fuoco",
		'pt-br': "Memória de Fogo",
		'de-de': "Feuer-Disc"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Le Silvallié-GX auquel cette carte est attachée est un Pokémon Fire.",
		'en-us': "The Silvally-GX this card is attached to is a Fire Pokémon.",
		'es-es': "El Silvally-GX al que esté unida esta carta es un Pokémon Fire.",
		'it-it': "Il Silvally-GX a cui è assegnata questa carta è di tipo Fire.",
		'pt-br': "O Pokémon Silvally-GX ao qual esta carta está ligada é um Pokémon Fire.",
		'de-de': "Das Amigento-GX, an das diese Karte angelegt ist, ist ein Fire-Pokémon."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 316048,
		tcgplayer: 157740
	}
}

export default card
