import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Gold Potion",
		'fr-fr': "Potion d’Or",
		'es-es': "Poción Áurea",
		'it-it': "Pozione d’Oro",
		'pt-br': "Poção de Ouro",
		'de-de': "Goldtrank"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Soignez 90 dégâts à votre Pokémon Actif.",
		'en-us': "Heal 90 damage from your Active Pokémon.",
		'es-es': "Cura 90 puntos de daño a tu Pokémon Activo.",
		'it-it': "Cura il tuo Pokémon attivo da 90 danni.",
		'pt-br': "Cure 90 de danos do seu Pokémon Ativo.",
		'de-de': "Heile 90 Schadenspunkte bei deinem Aktiven Pokémon."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280727,
		tcgplayer: 85800
	}
}

export default card
