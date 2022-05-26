import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Switch Cart"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Switch your Active Basic Pokémon with 1 of your Benched Pokémon. If you do, heal 30 damage from the Pokémon you moved to your Bench.",
		fr: "Échangez votre Pokémon Actif de base contre l'un de vos Pokémon de Banc. Dans ce cas, soignez 30 dégâts du Pokémon que vous avez déplacé vers votre Banc.",
		es: "Cambia tu Pokémon Básico Activo por 1 de tus Pokémon en Banca. Si lo haces, cura 30 puntos de daño al Pokémon que has movido a tu Banca.",
		it: "Scambia il tuo Pokémon Base attivo con uno della tua panchina. Se lo fai, cura il Pokémon che hai spostato in panchina da 30 danni.",
		pt: "Troque o seu Pokémon Básico Ativo por 1 dos seus Pokémon no Banco. Se fizer isto, cure 30 pontos de dano do Pokémon que você moveu para o seu Banco.",
		de: "Tausche dein Aktives Basis-Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du das machst, heile 30 Schadenspunkte bei dem Pokémon, das du auf deine Bank verschoben hast."
	},

	trainerType: "Item",
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card