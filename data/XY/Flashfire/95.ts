import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Protection Cube",
		fr: "Cube Protecteur",
		es: "Cubo Protección",
		it: "Cubo Protettivo",
		pt: "Cubo de Proteção",
		de: "Schutzschachtel"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Évitez tous les dégâts infligés au Pokémon auquel cette carte est attachée par les attaques qu'il utilise.",
		en: "Prevent all damage done to the Pokémon this card is attached to by attacks it uses.",
		es: "Evita todo el daño al Pokémon al que esté unida esta carta por ataques que este use.",
		it: "Previeni tutti i danni inflitti al Pokémon a cui è assegnata questa carta da attacchi che usa.",
		pt: "Impede todos os danos causados ao Pokémon ao qual este card está ligado pelos ataques que ele usa.",
		de: "Verhindere allen Schaden, der dem Pokémon, an das diese Karte angelegt ist, durch Angriffe, die es einsetzt, zugefügt würde."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 281578,
		tcgplayer: 91232
	}
}

export default card
