import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Silver Bangle",
		'fr-fr': "Bracelet d’Argent",
		'es-es': "Pulsera Plateada",
		'it-it': "Braccialargento",
		'pt-br': "Bracelete de Prata",
		'de-de': "Silberreif"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Les attaques du Pokémon auquel cette carte est attachée (excepté les Pokémon-EX) infligent 30 dégâts supplémentaires aux Pokémon-EX Actifs (avant application de la Faiblesse et de la Résistance).",
		'en-us': "The attacks of the Pokémon this card is attached to (excluding Pokémon-EX) do 30 more damage to Active Pokémon-EX (before applying Weakness and Resistance).",
		'es-es': "Los ataques del Pokémon al que esté unida esta carta (excluidos los Pokémon-EX) hacen 30 puntos de daño más a los Pokémon Activos-EX (antes de aplicar Debilidad y Resistencia).",
		'it-it': "Gli attacchi del Pokémon a cui è assegnata questa carta (esclusi i Pokémon-EX) infliggono 30 danni in più ai Pokémon-EX attivi, prima di aver applicato debolezza e resistenza.",
		'pt-br': "Os ataques do Pokémon ao qual este card está ligado (exceto Pokémon-EX) causam 30 de danos adicionais ao Pokémon-EX Ativo (antes da aplicação de Fraqueza e Resistência).",
		'de-de': "Die Angriffe des Pokémon, an das diese Karte angelegt ist (außer Pokémon-EX), fügen Aktiven Pokémon-EX 30 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 281109,
		tcgplayer: 89215
	}
}

export default card
