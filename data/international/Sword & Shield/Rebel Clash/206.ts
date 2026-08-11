import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Big Charm",
		'fr-fr': "Grande Amulette",
		'es-es': "Gran Amuleto",
		'it-it': "Amuleto Grande",
		'pt-br': "Pingente Grande",
		'de-de': "Großes Amulett"
	},

	illustrator: "inose yukie",
	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		'en-us': "The Pokémon this card is attached to gets +30 HP.",
		'fr-fr': "Cette carte ajoute 30 PV au Pokémon auquel elle est attachée.",
		'es-es': "El Pokémon al que está unida esta carta obtiene 30 PS más.",
		'it-it': "Il Pokémon a cui è assegnata questa carta ha 30 PS in più.",
		'pt-br': "O Pokémon ao qual esta carta está ligada recebe 30 PS a mais.",
		'de-de': "Das Pokémon, an das diese Karte angelegt ist, erhält +30 KP."
	},

	trainerType: "Tool",
	regulationMark: "D",


	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 457303,
				tcgplayer: 213289
			}
		},
	],
}

export default card
