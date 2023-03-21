import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Fresh Water Set",
		fr: "Pack d'Eaux Fraîches",
		es: "Lote de Agua Fresca",
		it: "Set di Acqua Fresca",
		pt: "Conjunto de Água Fresca",
		de: "Tafelwasserpack"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Heal 20 damage from each of your Pokémon.",
		fr: "Soignez 20 dégâts de chacun de vos Pokémon.",
		es: "Cura 20 puntos de daño a cada uno de tus Pokémon.",
		it: "Cura ciascuno dei tuoi Pokémon da 20 danni.",
		pt: "Cure 20 pontos de dano de cada um dos seus Pokémon.",
		de: "Heile 20 Schadenspunkte bei jedem deiner Pokémon."
	},

	trainerType: "Item",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card