import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Psychic Memory",
		'fr-fr': "ROM Psy",
		'es-es': "Disco Psíquico",
		'it-it': "ROM Psico",
		'pt-br': "Memória Psíquica",
		'de-de': "Psycho-Disc"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Le Silvallié-GX auquel cette carte est attachée est un Pokémon Psychic.",
		'en-us': "The Silvally-GX this card is attached to is a Psychic Pokémon.",
		'es-es': "El Silvally-GX al que está unida esta carta es un Pokémon Psychic.",
		'it-it': "Il Silvally-GX a cui è assegnata questa carta è di tipo Psychic.",
		'pt-br': "O Pokémon Silvally-GX ao qual esta carta está ligada é um Pokémon Psychic.",
		'de-de': "Das Amigento-GX, an das diese Karte angelegt ist, ist ein Psychic-Pokémon."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 311944,
		tcgplayer: 149123
	}
}

export default card
