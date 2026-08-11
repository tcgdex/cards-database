import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Giant Cape",
		'fr-fr': "Cape Géante",
		'es-es': "Capa Gigante",
		'it-it': "Mantello Gigante",
		'pt-br': "Capa Gigante",
		'de-de': "Riesige Robe"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Cette carte ajoute 20 PV au Pokémon auquel elle est attachée.",
		'en-us': "The Pokémon this card is attached to gets +20 HP.",
		'es-es': "El Pokémon al que esté unida esta carta obtiene 20 PV más.",
		'it-it': "Il Pokémon a cui è assegnata questa carta ha 20 PV in più.",
		'pt-br': "O Pokémon ao qual este card está ligado recebe +20 PS.",
		'de-de': "Das Pokémon, an das diese Karte angelegt ist, erhält +20 KP."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 280553,
		tcgplayer: 85696
	}
}

export default card
