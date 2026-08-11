import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Team Plasma Badge",
		'fr-fr': "Badge de la Team Plasma",
		'es-es': "Medalla del Equipo Plasma",
		'it-it': "Medaglia Team Plasma",
		'pt-br': "Insígnia da Equipe Plasma",
		'de-de': "Team-Plasma-Orden"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Le Pokémon auquel cette carte est attachée est un Pokémon de la Team Plasma.",
		'en-us': "The Pokémon this card is attached to is a Team Plasma Pokémon.",
		'es-es': "El Pokémon al que esté unida esta carta es un Pokémon del Equipo Plasma.",
		'it-it': "Il Pokémon a cui è assegnata questa carta è un Pokémon del Team Plasma.",
		'pt-br': "O Pokémon ao qual este card está ligado é um Pokémon da Equipe Plasma.",
		'de-de': "Das Pokémon, an das diese Karte angelegt ist, ist ein Team Plasma-Pokémon."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 280982,
		tcgplayer: 89847
	}
}

export default card
