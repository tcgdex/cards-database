import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Protection Cube",
		'fr-fr': "Cube Protecteur",
		'es-es': "Cubo Protección",
		'it-it': "Cubo Protettivo",
		'pt-br': "Cubo de Proteção",
		'de-de': "Schutzschachtel"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Évitez tous les dégâts infligés au Pokémon auquel cette carte est attachée par les attaques qu'il utilise.",
		'en-us': "Prevent all damage done to the Pokémon this card is attached to by attacks it uses.",
		'es-es': "Evita todo el daño al Pokémon al que esté unida esta carta por ataques que este use.",
		'it-it': "Previeni tutti i danni inflitti al Pokémon a cui è assegnata questa carta da attacchi che usa.",
		'pt-br': "Impede todos os danos causados ao Pokémon ao qual este card está ligado pelos ataques que ele usa.",
		'de-de': "Verhindere allen Schaden, der dem Pokémon, an das diese Karte angelegt ist, durch Angriffe, die es einsetzt, zugefügt würde."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 281578,
		tcgplayer: 91232
	}
}

export default card
