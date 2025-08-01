import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [625],
	set: Set,

	name: {
		en: "Bisharp",
		fr: "Scalproie",
		es: "Bisharp",
		it: "Bisharp",
		pt: "Bisharp",
		de: "Caesurio"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion",
		es: "Pawniard",
		it: "Pawniard",
		pt: "Pawniard",
		de: "Gladiantri"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Vengeful Cut",
			fr: "Coupe Vengeresse",
			es: "Corte Vengativo",
			it: "Taglio Vendicativo",
			pt: "Corte Vingativo",
			de: "Racheschnitt"
		},

		effect: {
			en: "This attack does 30 more damage for each damage counter on all of your Benched Pawniard.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts placé sur tous vos Scalpion de Banc.",
			es: "Este ataque hace 30 puntos de daño más por cada contador de daño en todos tus Pawniard en Banca.",
			it: "Questo attacco infligge 30 danni in più per ogni segnalino danno presente sui tuoi Pawniard in panchina.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada contador de dano em todos os seus Pawniard no Banco.",
			de: "Diese Attacke fügt für jede Schadensmarke auf allen Gladiantri auf deiner Bank 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Slicing Blade",
			fr: "Lame Tranchante",
			es: "Cuchilla Cortante",
			it: "Affettalama",
			pt: "Lâmina Fatiante",
			de: "Schwertschneide"
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658777
	}
}

export default card