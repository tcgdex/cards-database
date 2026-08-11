import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Crystal Edge",
		'fr-fr': "Dague de Cristal",
		'es-es': "Daga de Cristal",
		'it-it': "Lama di Cristallo",
		'pt-br': "Gume de Cristal",
		'de-de': "Kristallklinge"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Si cette carte est attachée à Kyurem Blanc-EX, chacune de ses attaques inflige 50 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance).",
		'en-us': "If this card is attached to White Kyurem-EX, each of its attacks does 50 more damage to the Active Pokémon (before applying Weakness and Resistance).",
		'es-es': "Si esta carta está unida a Kyurem Blanco-EX, cada uno de sus ataques hace 50 puntos de daño más a los Pokémon Activos (antes de aplicar Debilidad y Resistencia).",
		'it-it': "Se questa carta è assegnata a Kyurem Bianco-EX, tutti i suoi attacchi infliggono 50 danni in più al Pokémon attivo, prima di aver applicato debolezza e resistenza.",
		'pt-br': "Se este card estiver ligado a Kyurem Branco-EX, cada um de seus ataques causará 50 de danos adicionais ao Pokémon Ativo (antes da aplicação de Fraqueza e Resistência) .",
		'de-de': "Wenn diese Karte an ein Weißes Kyurem-EX angelegt ist, fügen alle seine Angriffe den Aktiven Pokémon 50 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Tool",

	thirdParty: {
		cardmarket: 280725,
		tcgplayer: 84517
	}
}

export default card
