import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Great Potion",
		'fr-fr': "Potion Géniale",
		'es-es': "Gran Poción",
		'it-it': "Gran Pozione",
		'pt-br': "Grande Poção",
		'de-de': "Großartiger Trank"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Soignez 50 dégâts à votre Pokémon-GX Actif.",
		'en-us': "Heal 50 damage from your Active Pokémon-GX.",
		'es-es': "Cura 50 puntos de daño a tu Pokémon-GX Activo.",
		'it-it': "Cura il tuo Pokémon-GX attivo da 50 danni.",
		'pt-br': "Cure 50 pontos de dano do seu Pokémon-GX Ativo.",
		'de-de': "Heile 50 Schadenspunkte bei deinem Aktiven Pokémon-GX."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 388777,
		tcgplayer: 195253
	}
}

export default card
