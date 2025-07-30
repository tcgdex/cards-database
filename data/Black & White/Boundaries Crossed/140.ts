import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Gold Potion",
		fr: "Potion d’Or",
		es: "Poción Áurea",
		it: "Pozione d’Oro",
		pt: "Poção de Ouro",
		de: "Goldtrank"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Soignez 90 dégâts à votre Pokémon Actif.",
		en: "Heal 90 damage from your Active Pokémon.",
		es: "Cura 90 puntos de daño a tu Pokémon Activo.",
		it: "Cura il tuo Pokémon attivo da 90 danni.",
		pt: "Cure 90 de danos do seu Pokémon Ativo.",
		de: "Heile 90 Schadenspunkte bei deinem Aktiven Pokémon."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280727,
		tcgplayer: 85800
	}
}

export default card
