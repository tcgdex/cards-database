import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Dark Claw",
		'fr-fr': "Griffe Obscure",
		'es-es': "Garra Oscura",
		'it-it': "Scurartigli",
		'pt-br': "Garra da Escuridão",
		'de-de': "Finsterklaue"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		'en-us': "If this card is attached to a Darkness Pokémon, each of the attacks of that Pokémon does 20 more damage to the Active Pokémon (before applying Weakness and Resistance).",
		'fr-fr': "Si cette carte est attachée à un Pokémon Darkness, chacune de ses attaques inflige 20 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance).",
		'es-es': "Si esta carta está unida a un Pokémon Darkness, cada uno de los ataques de ese Pokémon hace 20 puntos de daño más a los Pokémon Activos (antes de aplicar Debilidad y Resistencia).",
		'it-it': "Se questa carta è assegnata a un Pokémon Darkness, tutti gli attacchi di quel Pokémon infliggono 20 danni in più al Pokémon attivo, prima di aver applicato debolezza e resistenza,.",
		'pt-br': "Se este card estiver ligado a um Pokémon Darkness, cada um dos ataques desse Pokémon causará 20 de danos adicionais ao Pokémon Ativo (antes de aplicar Fraqueza e Resistência).",
		'de-de': "Wenn diese Karte an ein Darkness Pokémon angelegt ist, fügen alle Angriffe dieses Pokémon den Aktiven Pokémon 20 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	thirdParty: {
		cardmarket: 280420,
		tcgplayer: 84575
	}
}

export default card
