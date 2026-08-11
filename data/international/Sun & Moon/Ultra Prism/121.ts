import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Electric Memory",
		'fr-fr': "ROM Électrik",
		'es-es': "Disco Eléctrico",
		'it-it': "ROM Elettro",
		'pt-br': "Memória Elétrica",
		'de-de': "Elektro-Disc"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Le Silvallié-GX auquel cette carte est attachée est un Pokémon Lightning.",
		'en-us': "The Silvally-GX this card is attached to is a Lightning Pokémon.",
		'es-es': "El Silvally-GX al que esté unida esta carta es un Pokémon Lightning.",
		'it-it': "Il Silvally-GX a cui è assegnata questa carta è di tipo Lightning.",
		'pt-br': "O Pokémon Silvally-GX ao qual esta carta está ligada é um Pokémon Lightning.",
		'de-de': "Das Amigento-GX, an das diese Karte angelegt ist, ist ein Lightning-Pokémon."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 316046,
		tcgplayer: 157738
	}
}

export default card
