import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "PlusPower",
		'fr-fr': "PlusPower",
		'es-es': "PoderPlus",
		'it-it': "PlusPotenza",
		'pt-br': "PlusPower",
		'de-de': "PlusPower"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Pendant ce tour, les attaques de votre Pokémon infligent 10 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance).",
		'en-us': "During this turn, your Pokémon’s attacks do 10 more damage to the Active Pokémon (before applying Weakness and Resistance).",
		'es-es': "Durante este turno, los ataques de tus Pokémon hacen 10 puntos de daño más a los Pokémon Activos (antes de aplicar Debilidad y Resistencia).",
		'it-it': "Durante questo turno, gli attacchi dei tuoi Pokémon infliggono 10 danni in più al Pokémon attivo, prima di aver applicato debolezza e resistenza.",
		'pt-br': "Nesta vez de jogar, os ataques do seu Pokémon causam 10 de danos extras ao Pokémon Ativo (antes de aplicar Fraqueza e Resistência).",
		'de-de': "Während dieses Zuges fügen alle Angriffe deines Pokémon den Aktiven Pokémon 10 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 279834,
		tcgplayer: 88180
	}
}

export default card
