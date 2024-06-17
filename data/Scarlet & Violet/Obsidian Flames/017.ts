import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [762],
	set: Set,

	name: {
		fr: "Candine",
		en: "Steenee",
		es: "Steenee",
		it: "Steenee",
		pt: "Steenee",
		de: "Frubaila"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Aromathérapie",
			en: "Aromatherapy",
			es: "Aromaterapia",
			it: "Aromaterapia",
			pt: "Aromaterapia",
			de: "Aromakur"
		},

		effect: {
			fr: "Soignez 30 dégâts de chacun de vos Pokémon.",
			en: "Heal 30 damage from each of your Pokémon.",
			es: "Cura 30 puntos de daño a cada uno de tus Pokémon.",
			it: "Cura ciascuno dei tuoi Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano de cada um dos seus Pokémon.",
			de: "Heile 30 Schadenspunkte bei jedem deiner Pokémon."
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			fr: "Tranch'Herbe",
			en: "Razor Leaf",
			es: "Hoja Afilada",
			it: "Foglielama",
			pt: "Folha Navalha",
			de: "Rasierblatt"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card