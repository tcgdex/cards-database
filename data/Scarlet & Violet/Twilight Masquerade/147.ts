import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Cook",
		fr: "Cuisinier",
		es: "Chef",
		it: "Cuoco",
		pt: "Chef",
		de: "Küchenchef"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Heal 70 damage from your Active Pokémon.",
		fr: "Soignez 70 dégâts de votre Pokémon Actif.",
		es: "Cura 70 puntos de daño a tu Pokémon Activo.",
		it: "Cura il tuo Pokémon attivo da 70 danni.",
		pt: "Cure 70 pontos de dano do seu Pokémon Ativo.",
		de: "Heile 70 Schadenspunkte bei deinem Aktiven Pokémon."
	},

	trainerType: "Supporter",
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Hideki Ishikawa"
}

export default card