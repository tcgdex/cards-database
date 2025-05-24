import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Dragon Elixir",
		fr: "Élixir de Dragon",
		es: "Elixir Dragón",
		it: "Elisir del Drago",
		pt: "Elixir do Dragão",
		de: "Drachenelixier"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Heal 60 damage from your Active {N} Pokémon.",
		fr: "Soignez 60 dégâts de votre Pokémon {N} Actif.",
		es: "Cura 60 puntos de daño a tu Pokémon {N} Activo.",
		it: "Cura il tuo Pokémon attivo {N} da 60 danni.",
		pt: "Cure 60 pontos de dano do seu Pokémon {N} Ativo.",
		de: "Heile 60 Schadenspunkte bei deinem Aktiven {N}-Pokémon."
	},

	trainerType: "Item",
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "AYUMI ODASHIMA"
}

export default card
