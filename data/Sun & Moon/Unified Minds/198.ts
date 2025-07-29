import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Great Potion",
		fr: "Potion Géniale",
		es: "Gran Poción",
		it: "Gran Pozione",
		pt: "Grande Poção",
		de: "Großartiger Trank"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Soignez 50 dégâts à votre Pokémon-GX Actif.",
		en: "Heal 50 damage from your Active Pokémon-GX.",
		es: "Cura 50 puntos de daño a tu Pokémon-GX Activo.",
		it: "Cura il tuo Pokémon-GX attivo da 50 danni.",
		pt: "Cure 50 pontos de dano do seu Pokémon-GX Ativo.",
		de: "Heile 50 Schadenspunkte bei deinem Aktiven Pokémon-GX."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 388777
	}
}

export default card
