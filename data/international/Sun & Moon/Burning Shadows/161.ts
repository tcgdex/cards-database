import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Bodybuilding Dumbbells",
		'fr-fr': "Haltères de Culturisme",
		'es-es': "Pesas Culturismo",
		'it-it': "Manubri del Culturista",
		'pt-br': "Halteres de Fisiculturismo",
		'de-de': "Bodybuilding-Hanteln"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Cette carte ajoute 40 PV au Pokémon de Niveau 1 auquel elle est attachée.",
		'en-us': "The Stage 1 Pokémon this card is attached to gets +40 HP.",
		'es-es': "El Pokémon de Fase 1 al que esté unida esta carta obtiene 40 PS más.",
		'it-it': "Il Pokémon di Fase 1 a cui è assegnata questa carta ha 40 PS in più.",
		'pt-br': "O Pokémon Estágio 1 que esta carta estiver ligada receberá +40 PS.",
		'de-de': "Das Phase-1-Pokémon, an das diese Karte angelegt ist, erhält 40 KP mehr."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 299559,
		tcgplayer: 138623
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
